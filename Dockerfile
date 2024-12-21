FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY app.js ./
COPY database.js ./

RUN npm install

EXPOSE 3000

CMD ["node", "app.js"]