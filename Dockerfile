FROM node:alpine

RUN npm install -g gatsby-cli

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install && \
    npm cache clean --force

COPY . .

gatsby develop
