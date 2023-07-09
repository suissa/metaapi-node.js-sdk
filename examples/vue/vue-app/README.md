<div align="center">
  <img src="https://metaapi.cloud/favicon.ico" alt="Logo-MetaApi" width="50" height="50"/>
  <img src="https://vuejs.org/logo.svg" alt="Logo-Vue" width="50" height="50"/>
</div>

# Examples of integration of MetaApi with Vue 3

Here are examples of using different parts of MetaApi with _Vue 3_ built with _Vite_:

- Historical Market Data: [src/components/historical/](./src/components/historical)
- RiskManagement: [src/components/risk-management/](./src/components/risk-management)
- Stream Quotes [src/components/stream-quotes](./src/components/stream-quotes)
- CopyFactory: [src/components/copy-factory/](./src/components/copy-factory)
- MetaStats: [src/components/meta-stats/](./src/components/meta-stats)
- MetaApi: [src/components/meta-api/](./src/components/meta-api)

But you can use it with any other _Vue_ application and build system.

## Prerequisites

- Node.js `14.18+, 16+` or later installed _(for Vite)_
- NPM `6.14+` or later installed
- A valid MetaApi API token (you can get one by [signing up for a MetaApi account](https://app.metaapi.cloud/token))
- A MetaTrader account connected to MetaApi

## Installation

Download the MetaApi SDK from GitHub using the following command:

```bash
git clone git@github.com:agiliumtrade-ai/metaapi-node.js-sdk.git
cd metaapi-node.js-sdk/examples/vue/vue-app/
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
docker build -t metaapi-vue-app .
```

or you can use `docker-compose` :

```bash
docker-compose up
```

## Configuration

Set required variables:

``` javascript
/* For CopyFactory */
const providerAccountId = import.meta.env.VITE_PROVIDER_ACCOUNT_ID || 'your-provider-account-id';
const subscriberAccountId = import.meta.env.VITE_SUBSCRIBER_ACCOUNT_ID || 'your-subscriber-account-id';
const strategyId = import.meta.env.VITE_STRATEGY_ID || 'your-strategy-id';
const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || 'your-telegram-bot-token';
const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID || 'your-telegram-chat-id';

/* For MetaApi */
const accountId = import.meta.env.VITE_ACCOUNT_ID || 'your-metaapi-account-id';
const token = import.meta.env.VITE_TOKEN || 'your-metaapi-token';

/* Meta data */
const domain = import.meta.env.VITE_DOMAIN || 'agiliumtrade.agiliumtrade.ai';
const symbol = import.meta.env.VITE_SYMBOL || 'EURUSD';
```

You can make it with:

- Harcoding in [`App.vue` file](./src/App.vue);
- `.env` file in root of project;
- In running application.

If you use Docker to start code examples, rebuild the image using the following command:

```bash
docker build -t metaapi-vue-app .
```

## Running

### Start manually

Run the application using the following command:

```bash
npm run dev
```

or

```bash
yarn dev
```

### Start via docker

Run the application using the following command:

```bash
docker run -p 5173:5173 metaapi-vue-app
```

or you can use `docker-compose` :

```bash
docker-compose up
```

## Try

Try live examples in your browser at [http://localhost:5173](http://localhost:5173).

## More integration examples

- [Browser](./../../browser);
- [Angular](./../../angular);
- [NodeJS](./../../node);
- [React](./../../react).

## Troubleshooting

If you encounter any issues while running the examples or integrating MetaApi with your Vue application, please, contact the MetaApi support team via online chat.
