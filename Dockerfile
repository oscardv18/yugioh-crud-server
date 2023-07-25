FROM node:18.16.1-bullseye

RUN npm i -g nodemon

WORKDIR /home/yugioh-crud-server/

EXPOSE 8000

CMD npm run dev