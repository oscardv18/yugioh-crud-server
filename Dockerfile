FROM node:lts-hydrogen

RUN npm i -g nodemon

WORKDIR /home/yugioh-crud-server/

EXPOSE 8000

CMD npm run dev
