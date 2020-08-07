FROM node:14

WORKDIR /usr/src/email-app

COPY package.json ./

COPY yarn.lock ./

COPY . .

RUN yarn install && yarn build

RUN rm -rf node_modules

RUN npm install -g serve

CMD ["serve", "-s", "build", "-l", "5000"]