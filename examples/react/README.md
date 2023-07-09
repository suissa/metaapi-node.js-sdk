<div align="center">
  <img src="https://metaapi.cloud/favicon.ico" alt="Logo-MetaApi" width="50" height="50"/>
  <img src="https://react.dev/favicon.ico" alt="Logo-React" width="50" height="50"/>
</div>

# MetaApi Integration with React

Integration MetaApi SDK with React.

You can look at a demo of these examples [here](https://drive.google.com/file/d/1GMCr4DC1gWEf40SjVw8psm0t9te07xQ7/view?usp=sharing).

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

## Using

You can apply MetaApi to your React application in two ways:

* Functional component;
* Class component.

You can apply MetaApi to your React application in two ways:

* Functional component;
* Class component.

### Using in Functional Component

``` javascript
import React, { useState, useEffect } from 'react';
import MetaApi, { RpcMetaApiConnectionInstance } from 'metaapi.cloud-sdk1';

const accountId = 'your-metatrader-account-id';
const token = 'your-metaapi-token';

const MyComponent = () => {
  const [data, setData] = useState(null);

  const connectToMetaApi = async (): Promise<RpcMetaApiConnectionInstance> => {
    // Get instance of MetaApi with your MetaApi token
    const metaApi = new MetaApi(token);
    // Get MetaTrader account
    const account = await metaApi.metatraderAccountApi.getAccount(accountId);

    // Get connection instance
    await account.waitConnected();
    const connection = account.getRPCConnection();

    // Wait until connection is established
    await connection.connect();
    await connection.waitSynchronized();

    return connection;
  }

  const fetchData = async () => {
    const connection = await connectToMetaApi();

    // For example, get account information
    const accountInformation = await connection.getAccountInformation();
    console.log(accountInformation);
    setData(accountInformation);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {!data && <p>Loading...</p>}
      {data && <p>{JSON.stringify(data)}</p>}
    </div>
  );
};

export default MyComponent;
```

### Using in Class Component

``` javascript
import React, { Component } from 'react';
import MetaApi from 'metaapi.cloud-sdk';

interface IMyComponentProps {}
interface IMyComponentState {
  data: any;
}

class MyComponent extends Component<IMyComponentProps, IMyComponentState> {
  state: IMyComponentState = { data: null }; 

  accountId: string = 'your-metatrader-account-id';
  token: string = 'your-metaapi-token';

  async componentDidMount(): Promise<void> {
    const connection = await this.connectToMetaTraderApiRPC();

    // For example, get account information
    const accountInformation = await connection.getAccountInformation();
    console.log(accountInformation);
    this.setState({ data: accountInformation });
  }

  async connectToMetaTraderApiRPC(): Promise<RpcMetaApiConnectionInstance> {
    // Get instance of MetaApi with your MetaApi token
    const metaApi = new MetaApi(this.token);
    // Get MetaTrader account
    const account = await metaApi.metatraderAccountApi.getAccount(this.accountId);

    // Get connection instance
    await account.waitConnected();
    const connection = account.getRPCConnection();

    // Wait until connection is established
    await connection.connect();
    await connection.waitSynchronized();

    return connection;
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        {!data && <p>Loading...</p>}
        {data && <p>{JSON.stringify(data)}</p>}
      </div>
    );
  }
}

export default MyComponent;
```

## Examples

- [Historical Market Data](./react-app/src/components/historical)
- [Risk Management](./react-app/src/components/risk-management)
- [Stream Quotes](./react-app/src/components/stream-quotes)
- [CopyFactory](./react-app/src/components/copy-factory)
- [MetaStats](./react-app/src/components/meta-stats)
- [MetaApi](./react-app/src/components/meta-api)


## More integration 

- [Browser](./../browser)
- [Angular](./../angular)
- [NodeJS](./../node)
- [Vue](./../vue)

## Troubleshooting

If you encounter any issues while running the examples or integrating MetaApi with your React application, please, contact the MetaApi support team via online chat.
