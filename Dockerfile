FROM node:18-alpine

RUN mkdir -p /home/app

WORKDIR /home/app

COPY . .

RUN npm install

RUN ls -a

CMD ["node", "index.js"]
