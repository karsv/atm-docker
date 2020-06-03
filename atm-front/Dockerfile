FROM node:14.3.0-stretch-slim
WORKDIR /usr/src/app
COPY package.json .
RUN npm i -g @angular/cli@~9.1.4 typescript@~3.8.3
RUN npm install bootstrap --save
RUN npm i
COPY . .
RUN ng build --prod
CMD ng serve --host 0.0.0.0
