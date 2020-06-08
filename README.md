# Shorten Links App

Shorten Links App is a Node.js application with Express.js server React.js for client and MondoDB database.

## Clone repo

Clone this repo to your local machine using:

```bash
git clone https://github.com/pavel-wh/MERN-Shorten
```

## Installation

Use the Node package manager [npm](https://www.npmjs.com/) to install this app.

```bash
npm install

npm client:install
```

## Create Database

-   Sign in to [mongodb](https://account.mongodb.com/account) Create project, build cluster and create database.

-   Create config file for connect mongodb database config/default.json from config/default-example.json

-   Add your local IP to Whitelist

## Build Setup

```bash

# start express server
npm run server

# build client for production
npm run client:build

# start concurrently server and client
npm run dev
```

For detailed explanation on how things work, check out [React.js docs](https://reactjs.org/).

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
