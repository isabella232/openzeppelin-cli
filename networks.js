const HttpProvider = require('web3-providers-http');

module.exports = {
  networks: {
    development: {
      protocol: 'http',
      host: 'localhost',
      port: 7545,
      gas: 5000000,
      gasPrice: 5e9,
      networkId: '*',
    },
    kaleido: {
      provider: new HttpProvider(process.env.ETH_URL),
      gasPrice: 0,
      networkId: '*'
    }
  }
};
