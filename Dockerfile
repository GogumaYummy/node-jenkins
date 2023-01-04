FROM node:18.12.1

WORKDIR /usr/src/app

COPY package*.json .

RUN npm i -g npm@latest &&\
  npm i --production

COPY . .

EXPOSE 3000

CMD npm start