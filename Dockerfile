FROM node:current
LABEL authors="SirXplosiv"

WORKDIR /app

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . .

CMD [ "npx", "ts-node", "index.ts" ]