FROM node:18-alpine

RUN mkdir -p /home/app

WORKDIR /home/app

ARG ENV_FILE
COPY . .
COPY $ENV_FILE .env

RUN npm install

RUN ls -a

CMD ["node", "index.js"]
