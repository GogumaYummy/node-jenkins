FROM node:18.12.1-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g pm2

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "pm2-docker", "start", "src/app.js" ]