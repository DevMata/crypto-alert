<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

A NestJS and MongoDB RESTful API that handles alerts for crypto prices.

## Targets versions

* Node.js: 16.15.0
* NPM: 8.5.5
* NestJS: 8.0.0

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Env variables

Copy the .env.example into a .env file and fill the following variables.

| Variable            | Description         |
| :------------------ | :------------------ |
| PORT                | API port            |
| MONGO_URL           | MongoDB server URL  |
| COINRANKING_URL     | Coinranking URL     |
| COINRANKING_API_KEY | Coinranking api key |

## Resources

If you run the API locally your base URL is: ```http://localhost:<YOUR PORT>```

```bash
GET /alerts

POST /alerts

GET /alerts/validated

POST /alerts/validation
```
## OpenAPI

The ```/docs``` route provides an OpenAPI documentation.

## Stay in touch

- Author - [Antonio Mata](https://www.linkedin.com/in/antoniomatasv/)
