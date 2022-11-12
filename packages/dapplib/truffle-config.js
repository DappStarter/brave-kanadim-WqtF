require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski stove radar ridge clutch harvest hat army gesture'; 
let testAccounts = [
"0x97b0e823946ba63457a71c2e46826a2f3b0f052da22cbf269c14b689671dab75",
"0x45fe12ffd84288ccc6daa6cfa654ab8cf8c31eb2053431d310b6b9aa2d79971a",
"0x8b7e93f55610919ae71f1efdf67547f652ff402b3acd72a6237ccfc0a912a13d",
"0x599c0fc45559ddf079f808b77e422ceb2c9e7848897af6bf788cc5e8758b85f4",
"0x7536a70280a1d8c7abd0fba65cf08c54eba3ded582e324fbed1b56491288bd05",
"0x71bba814c1c710c1de31916de903938fa7f47324028c23416c4084f51fdddd0e",
"0x7f66a7844fb5fbcdfc7d43e5e2af5aa8de163480aa87086cae2659d4d5d953fd",
"0x3a4a71fc1864840dae31afe668040b67056c9386a07c08b46b1f27461a5b2f4c",
"0x49dd4d3779fd9ea218bc9e2c64d52f3d2bc53a3aff3696c2f7b130af5dbb9272",
"0x7b52b6a3a13e69cf38b92ccf8cdad3a4d38743d575c96a6fe05cb3cd9b70fd4e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


