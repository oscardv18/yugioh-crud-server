FROM node:19

RUN npm i -g nodemon

WORKDIR /home/yugioh-crud-server/

EXPOSE 4000

CMD npm run dev