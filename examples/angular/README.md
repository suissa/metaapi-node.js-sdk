<div align="center">
  <img src="https://metaapi.cloud/favicon.ico" alt="Logo-MetaApi" width="50" height="50"/> 
  <img src="https://angular.io/assets/images/favicons/favicon.ico" alt="Logo-Angular" width="50" height="50"/>
</div>

# MetaApi Integration Example with Angular

Example of integration of MetaApi with Angular application.

You can look at a demo of these examples [here](https://drive.google.com/file/d/1u0BVfIEKXkyerw4V074xYcxKY_nrBwg_/view?usp=sharing).

## Prerequisites

- Node.js `14.10+, 16.10+` or later installed
- NPM `6.14+` or later installed
- A valid MetaApi API token (you can get one by [signing up for a MetaApi account](https://app.metaapi.cloud/token))
- A MetaTrader account connected to MetaApi.

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

### Service

Create _service_ for MetaApi and add methods for working with MetaApi:

``` javascript
// metaapi.service.ts
import { Injectable } from '@angular/core';
import MetaApi, { MetatraderAccountInformation, RpcMetaApiConnectionInstance } from 'metaapi.cloud-sdk';

@Injectable({
  providedIn: 'root'
})
export class MetaapiRpcService {
  public metaApi: MetaApi;

  private _accountId = 'your-metaapi-account-id';
  private _token = 'your-metaapi-token';

  constructor() {
    this.metaApi = new MetaApi(this._token);
  }

  async connectToMetaTraderApiRPC(): Promise<RpcMetaApiConnectionInstance> {
    const account = await this.metaApi.metatraderAccountApi.getAccount(this._accountId);

    // Get connection instance
    await account.waitConnected();
    const connection = account.getRPCConnection();

    // Wait until connection is established
    await connection.connect();
    await connection.waitSynchronized();

    return connection;
  }

  // Do something with MetaApi!
  async getAccountInformation(): Promise<MetatraderAccountInformation> {
    const connection = await this.connectToMetaTraderApiRPC();
    return await connection.getAccountInformation();
  }
}
```

Inject service into your component and use it:

``` javascript
// app.component.ts
import { Component } from '@angular/core';
import { MetaApiService } from 'metaapi.service';
import { MetatraderAccountInformation } from 'metaapi.cloud-sdk';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <p>{{ accountInfo | json }}</p>
    </div>
  `,
})
export class AppComponent {
  accountInfo?: MetatraderAccountInformation;

  constructor(private metaApiService: MetaApiService) {
    this.fetchData();
  }

  async fetchData() {
    try {
      this.accountInfo = await this.metaApiService.getAccountInformation();
      /* You can work directly with MetaApi:
        this.metaApiService.metaApi...
      */
    } catch (error) {
      console.error(error);
    }
  }
}
```

## Examples of using

- [Historical Market Data](./angular-app/src/app/historical)
- [Risk Management](./angular-app/src/app/risk-management)
- [Stream Quotes](./angular-app/src/app/stream-quotes)
- [CopyFactory](./angular-app/src/app/copy-factory)
- [MetaStats](./angular-app/src/app/meta-stats)
- [MetaApi](./angular-app/src/app/meta-api)

## More integration

- [Browser](./../browser)
- [NodeJS](./../node)
- [React](./../react)
- [Vue](./../vue)

## Troubleshooting

If you encounter any issues while running the examples or integrating MetaApi with your Angular application, please, contact the MetaApi support team via online chat.
