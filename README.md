# openzeppelin-cli
Demonstrates necessary settings to use openzeppelin CLI with a Kaleido environment to deploy contracts, send transactions, query and upgrade contracts

## Pre-reqs

Node.js: https://nodejs.org/en/download/
Truffle: https://www.trufflesuite.com/docs/truffle/getting-started/installation

## Run and Test

First install the minimal dependencies and configure the target Ethereum node:

```
npm i
export ETH_URL=<full URL of your Kaleido node like https://username:password@envId-nodeId-rpc.kaleido.io>
```

To test against a local instance of **testrpc** or **Ganache**, first double check the port number in the `network.js` file for the `development` definition, then launch and select `development` when prompted for the network to deploy to:

To test against a Kaleido environment, launch and select `kaleido` for network.

```
$ npx oz create
Nothing to compile, all contracts are up to date.
? Pick a contract to instantiate Counter
? Pick a network development
✓ Contract Counter deployed
All contracts have been deployed
? Call a function to initialize the instance after creating it? Yes
? Select which function increase()
✓ Instance created at 0xa029061Dd586f914c3d5d319f6dA9776A83E0C3B
0xa029061Dd586f914c3d5d319f6dA9776A83E0C3B
```

## Important Notes

Due to the security protection on Kaleido blockchain nodes, all connections require authentication with the app credentials. Use the following technique in `network.js` to create provider instances for the openzeppelin CLI to use:

```
const HttpProvider = require('web3-providers-http');

module.exports = {
  networks: {
    kaleido: {
      provider: new HttpProvider(process.env.ETH_URL),
      gasPrice: 0,
      networkId: '*'
    }
  }
};
```
