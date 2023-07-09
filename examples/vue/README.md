<div align="center">
  <img src="https://metaapi.cloud/favicon.ico" alt="Logo-MetaApi" width="50" height="50"/>
  <img src="https://vuejs.org/logo.svg" alt="Logo-Vue" width="50" height="50"/>
</div>

# MetaApi Integration with Vue 3

Example of integration of MetaApi with Vue 3 application.

You can look at a demo of these examples [here](https://drive.google.com/file/d/1WSI3TRBM_kbMSj1youSw0Ufi1YGk8A6E/view?usp=sharing).

## Prerequisites

* Node.js `10.x.x` or later installed
* NPM `6.x` or later installed
* A valid MetaApi API token (you can get one by [signing up for a MetaApi account](https://app.metaapi.cloud/token))
* A MetaTrader account connected to MetaApi

## Installation

Install MetaApi with npm:

```bash
npm install --save metaapi.cloud-sdk
```

## Using

Import library in your component file:

``` javascript
import MetaApi from 'metaapi.cloud-sdk';
```

Create instance of MetaApi with your MetaApi token:

``` javascript
// Get instance of MetaApi with your MetaApi token
const metaApi = new MetaApi(token);
```

Establish connection with MetaTrader account.

``` javascript
const account = await metaApi.metatraderAccountApi.getAccount(accountId);

// Get connection instance
await account.waitConnected();
const connection = account.getRPCConnection();

/* For WS connection use:
const connection = account.getStreamingConnection();
*/ 

// Wait until connection is established
await connection.connect();
await connection.waitSynchronized();
```

Use _connection_ to work with API:

``` javascript
// Get account information
const accountInformation = await connection.getAccountInformation();
```

## Examples

You can apply MetaApi to your Vue 3 application in two ways:

* Composition API (recommended);
* Options API.

### Using with Composition API

``` html
<script setup lang="ts">
  
import { toRefs, ref } from 'vue'
import MetaApi, { RpcMetaApiConnectionInstance, StreamingMetaApiConnectionInstance } from 'metaapi.cloud-sdk'

const accountId = 'your-metaapi-account-id'
const token = 'your-metaapi-token'

// Connect to API
async function getConnectionConnection(): Promise<
  RpcMetaApiConnectionInstance|StreamingMetaApiConnectionInstance
> {
  // Get instance of MetaApi with your MetaApi token
  const metaApi = new MetaApi(token.value);
  // Get MetaTrader account
  const account = await metaApi.metatraderAccountApi.getAccount(accountId.value);

  // Get connection instance
  await account.waitConnected();
  const connection = account.getRPCConnection();
  /* For WS connection use:
  const connection = account.getStreamingConnection();
  */

  // Wait until connection is established
  await connection.connect();
  await connection.waitSynchronized();

  return connection;
}

// Work with RPC API
async function fetchData() {
  connecting.value = true;
  try {
    const connection = await getConnectionConnection();

    const accountInformation = await connection.getAccountInformation();
    console.log("accountInformation", accountInformation);

    const positions = await connection.getPositions();
    console.log("positions", positions);

    const orders = await connection.getOrders();
    console.log("orders", orders);

  } catch(err) {
    console.error(err);
  } finally {
    connecting.value = false;
  }
}
</script>

<template>
  <div>
    <button @click="fetchData()" v-if="!connecting">Connect to MetaApi and do smth...</button>
    <div v-else>Connecting...</div>
  </div>
</template>
```

### Examples

- [Historical Market Data](./vue-app/src/components/historical)
- [Risk Management](./vue-app/src/components/risk-management)
- [Stream Quotes](./vue-app/src/components/stream-quotes)
- [CopyFactory](./vue-app/src/components/copy-factory)
- [MetaStats](./vue-app/src/components/meta-stats)
- [MetaApi](./vue-app/src/components/meta-api)

## More integration 

- [Browser](./../browser)
- [Angular](./../angular)
- [NodeJS](./../node)
- [React](./../react)

## Troubleshooting

If you encounter any issues while running the examples or integrating MetaApi with your Vue application, please, contact the MetaApi support team via online chat.
