require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope enroll sure trophy name rifle rural uncover inflict praise army gaze'; 
let testAccounts = [
"0x784a00f7e6d01f0f00e643b0215c61eb5d9f3801aed850f9dbeee7bb7afb14e0",
"0xfb50c8a08425c38bccd34aa5740c9c0670fabee7ca7b4910e4931fd6d52f8d5e",
"0x4b0ae44cc80f05d8f4f1e4d479ba64401be93fd07f3758e0ad297ff99342db68",
"0xa4cbef65745229028b183d7322e5dc4bc82e75f7c939336ad46d7570c2b344e1",
"0x045c3e9d565f213b945c8657609e1f6af2ba42cd17b00699093ae4d9c164577c",
"0x117f596348db9e9b97a5261e00c3a21da28c412e9a136f1a30b58c9bcf5478a2",
"0x898890075288a33bcf1be079778df1026f61763ff6c930929f53d87982704519",
"0xc21e0e3d80ab00b27352c64e9cfd993c62ee1525eb1fb7d543ace2836b067ce1",
"0xec64c50bcc7d2aa4d1b38908bc6211813d24e7eb0c5f26fb946bee4cdfe93dee",
"0x502a939107b7365159d68dfa9594515274c63ec260410e9dd09b8667621f4266"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

