FROM node:14-alpine

WORKDIR /usr/src/email-app

COPY package.json ./

COPY yarn.lock ./

COPY . .

RUN yarn install && yarn build

RUN npm install -g serve

CMD ["serve", "-s", "build"]