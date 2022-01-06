// https://eth-ropsten.alchemyapi.io/v2/fz-XM6ashu7PgwfIjDTSNfsuemA7fYtO

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/fz-XM6ashu7PgwfIjDTSNfsuemA7fYtO',
      accounts: [ 'ae2eee102a68fb7a453a3ec77fa3414eca67de1f89123455f12b4c2e84792717' ]
    }
  }
}