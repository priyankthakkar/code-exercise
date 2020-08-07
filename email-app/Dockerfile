FROM ubuntu:bionic

# update 
RUN apt-get update
# install curl 
RUN apt-get install curl -y
# get install script and pass it to execute: 
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash
# and install node 
RUN apt-get install nodejs -y
# confirm that it was successful 
RUN node -v
# npm installs automatically 
RUN npm -v \
    && npm i -g yarn \
    && yarn --version

WORKDIR /usr/src/email-app

COPY package.json ./

COPY yarn.lock ./

COPY . .

RUN yarn install && yarn build

RUN npm install -g serve

CMD ["serve", "-s", "build", "-l", "5000"]