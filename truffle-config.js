const HDWalletProvider = require("@truffle/hdwallet-provider");
const { bscTestMnemonic, BSCSCANAPIKEY } = require('./env.json');

require("ts-node")
    .register({
        files: true,
    });

module.exports = {
    // Uncommenting the defaults below
    // provides for an easier quick-start with Ganache.
    // You can also follow this format for other networks;
    // see <http://truffleframework.com/docs/advanced/configuration>
    // for more details on how to specify configuration options!
    //
    compilers: {
        solc: {
            version: '0.6.2',
            settings: {          // See the solidity docs for advice about optimization and evmVersion
                optimizer: {
                    enabled: false,
                    runs: 200
                },
                evmVersion: "byzantium"
            }
        }
    },
    plugins: [
        'truffle-plugin-verify'
    ],
    api_keys: {
        bscscan: BSCSCANAPIKEY
    },

    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*"
        },
        bsctest: {
            provider: () => new HDWalletProvider(bscTestMnemonic, `https://data-seed-prebsc-2-s1.binance.org:8545/`),
            network_id: 97,
            confirmations: 10,
            timeoutBlocks: 20000,
            skipDryRun: true,
            production: true
        },
        bsc: {
            provider: () => new HDWalletProvider(bscTestMnemonic, `https://bsc-dataseed1.binance.org`),
            network_id: 56,
            confirmations: 10,
            timeoutBlocks: 20000,
            skipDryRun: true
        },
    }
    // test: {
    //   host: "127.0.0.1",
    //   port: 7545,
    //   network_id: "*"
    // }
    //
};
