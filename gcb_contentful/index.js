// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//

'use strict';

// [START cloudbuild_quickstart]
async function quickstart(
    projectId = process.env.PROJECT_ID,
    triggerId = process.env.TRIGGER_ID,
    branchName = process.env.BRANCH_NAME
) {
    // Imports the Google Cloud client library
    const {CloudBuildClient} = require('@google-cloud/cloudbuild');

    // Creates a client
    const cb = new CloudBuildClient();

    // Starts a build against the branch provided.
    const [resp] = await cb.runBuildTrigger({
        projectId,
        triggerId,
        source: {
            projectId,
            dir: './',
            branchName,
        },
    });
    console.info(`triggered build for ${triggerId}`);
    const [build] = await resp.promise();

    const STATUS_LOOKUP = [
        'UNKNOWN',
        'Queued',
        'Working',
        'Success',
        'Failure',
        'Error',
        'Timeout',
        'Cancelled',
    ];
    for (const step of build.steps) {
        console.info(
            `step:\n\tname: ${step.name}\n\tstatus: ${STATUS_LOOKUP[build.status]}`
        );
    }
}

exports.contentfullTrigger = (req, res) => {
    const args = process.argv.slice(2);
    quickstart(...args).catch(console.error);
    res.send('ok!');
};