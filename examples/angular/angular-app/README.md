<div align="center">
  <img src="https://metaapi.cloud/favicon.ico" alt="Logo-MetaApi" width="50" height="50"/> 
  <img src="https://angular.io/assets/images/favicons/favicon.ico" alt="Logo-Angular" width="50" height="50"/>
</div>

# Examples of integration of MetaApi with Angular

Here are examples of using different parts of _MetaApi_ with _Angular_:

- Historical Market Data: [src/app/historical/](./src/app/historical)
- RiskManagement: [src/app/risk-management/](./src/app/risk-management)
- Stream Quotes: [src/app/stream-quotes](./src/app/stream-quotes)
- CopyFactory: [src/app/copy-factory/](./src/app/copy-factory)
- MetaStats: [src/app/meta-stats/](./src/app/meta-stats)
- MetaApi: [src/app/meta-api/](./src/app/meta-api)

## Prerequisites

- Node.js `16.14+, 18.10+` or later installed
- NPM `8+` or later installed
- A valid MetaApi API token (you can get one by [signing up for a MetaApi account](https://app.metaapi.cloud/token))
- A MetaTrader account connected to MetaApi

## Installation

Download the MetaApi SDK from GitHub using the following command:

```bash
git clone git@github.com:agiliumtrade-ai/metaapi-node.js-sdk.git
cd metaapi-node.js-sdk/examples/angular/angular-app/
```

You can install a project manually or using a docker.

### Manual installation

Install project dependencies using the following commands:

```bash
npm install
```

or

```bash
yarn install
```

### Docker installation

Build the image using the following command:

```bash
docker build -t metaapi-angular-app .
```

or you can use `docker-compose` :

```bash
docker-compose up
```

## Configuration

Set required variables:

``` javascript
export const environment = {
// For MetaApi
  ACCOUNT_ID: 'your-metaapi-account-id',
  TOKEN: 'your-metaapi-token',

// For CopyFactory
  SUBSCRIBER_ACCOUNT_ID: 'your-subscriber-account-id',
  PROVIDER_ACCOUNT_ID: 'your-provider-account-id',
  TELEGRAM_BOT_TOKEN: 'your-telegram-bot-token',
  TELEGRAM_CHAT_ID: 'your-telegram-chat-id',
  STRATEGY_ID: 'your-strategy-id',

// Meta
  DOMAIN: 'agiliumtrade.agiliumtrade.ai',
  SYMBOL: 'your-symbol-id',
};
```

You can make it with:

- Harcoding in [`environment.ts` file](./src/app/environment/environment.ts);
- In running application.

If you use Docker to start code examples, rebuild the image using the following command:

```bash
docker build -t metaapi-angular-app .
```

## Running

### Start manually

Run the application using the following command:

```bash
npm start 
```

or

```bash
yarn start
```

### Start via docker

Run the application using the following command:

```bash
docker run -p 4200:4200 metaapi-angular-app
```

or you can use `docker-compose` :

```bash
docker-compose up
```

## Try

Try live examples in your browser at [http://localhost:4200](http://localhost:4200).

## More integration examples

- [Browser](./../../browser)
- [NodeJS](./../../node)
- [React](./../../react)
- [Vue](./../../vue)

## Troubleshooting

If you encounter any issues while running the examples or integrating MetaApi with your Angular application, please, contact the MetaApi support team via online chat.
