'use strict';

require("dotenv").config();
const axios = require('axios');
const fs = require('fs');
const { promisify } = require('util');
const writeFileAsync = promisify(fs.writeFile);

const supportedLanguages = ['en', 'fr'];
const LOCIZE_API_KEY = process.env.LOCIZE_API_KEY;
const LOCIZE_PROJECT_ID = process.env.LOCIZE_PROJECT_ID;

/** Source of 'truth': local file **/
const getDiff = function(local, hosted) {
    const diffToAdd = {};
    const diffToRemove = {};
    for (let key in local){
        if(local.hasOwnProperty(key) && !hosted.hasOwnProperty(key)){
            diffToAdd[key] = local[key];
        }
    }
    for (let key in hosted){
        if(hosted.hasOwnProperty(key) && !local.hasOwnProperty(key)){
            diffToRemove[key] = null;
        }
    }
    return {diffToAdd, diffToRemove};
};

(async function() {
    try{
        //Get translations from locize
        const currentTranslationRequestResponse = await axios.get(`https://api.locize.app/${LOCIZE_PROJECT_ID}/latest/en/en`);
        const {data: locizeTranslations} = currentTranslationRequestResponse;
        //Get local translations
        const localTranslations = require('../src/i18n/translationKeysReference.json');
        //Get diff
        const {diffToAdd, diffToRemove} = getDiff(localTranslations, locizeTranslations);
        if(Object.keys(diffToAdd).length !== 0 && diffToAdd.constructor === Object) {
            console.log("Diff to add", diffToAdd);
            await axios.post(`https://api.locize.app/missing/${LOCIZE_PROJECT_ID}/latest/en/en`, diffToAdd, {headers: {'Authorization': `Bearer ${LOCIZE_API_KEY}`}});
        }else {
            console.log("No diff to add!");
        }
        if(Object.keys(diffToRemove).length !== 0 && diffToRemove.constructor === Object) {
            console.log("Diff to remove", diffToRemove);
            await axios.post(`https://api.locize.app/update/${LOCIZE_PROJECT_ID}/latest/en/en`, diffToRemove, {headers: {'Authorization': `Bearer ${LOCIZE_API_KEY}`}});
        }else {
            console.log("No diff to remove!");
        }
        //Get translations and write it to file
        const translationsDirectoryPath = __dirname + '/../src/translations';
        if (!fs.existsSync(translationsDirectoryPath)){
            fs.mkdirSync(translationsDirectoryPath);
        }
        await Promise.all( supportedLanguages.map(async (language) => {
            console.log(`Fetching ${language} translations`);
            const translationsRequestResponse = await axios.get(`https://api.locize.app/${LOCIZE_PROJECT_ID}/latest/${language}/translation`);
            const {data: translations} = translationsRequestResponse;
            let data = JSON.stringify(translations, null, 2);
            await writeFileAsync(__dirname + `/../src/translations/${language}.json`, data);
        }));
    }catch(e){
        console.log('Error!', e);
    }
})();


