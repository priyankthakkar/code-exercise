# Welcome to email-app!

This git repository contains a node application **email-api**, which is a node & express js application that retursn mock data.

It contains **react** application **email-app** which forms the UI screen for the tasks section of the given mocked invision screen.

To run application execute following commands:

`git clone https://github.com/priyankthakkar/code-exercise.git`

`docker-compose up --build`

**If docker is not installed** on the machine, in that case application can be started with following commands:

Navigate to ./code-exercise/email-api and execute following command:
`npm install && node index.js`

Once email-api is running navigate to ./code-exercise/email-app and execute following commands:
`yarn install && yarn start`

## Assumptions

1. Screen just uses the data returned by mock APIs and renders it, no further interactions are supported
2. The screen is supported as now only for desktop/laptop screens, it is not responsive
3. As there is a single screen, react router has not been added. A react-router (Broswer router) can support navgation across different routes
