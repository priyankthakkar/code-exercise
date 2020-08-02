FROM node:14

#creating the app directory
WORKDIR /usr/src/email-api

# copying package.json and package-lock.json
COPY package*.json ./

# installing dependencies
RUN npm install

#copying source code
COPY . .

CMD ["node", "index.js"]