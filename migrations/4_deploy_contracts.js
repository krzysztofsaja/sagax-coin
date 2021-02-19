const SajCoin = artifacts.require("SajCoin");
const web3 = require('web3');

module.exports = function(deployer) {
  const INITIAL_SUPPLY = web3.utils.toWei('1000');
  deployer.deploy(SajCoin, INITIAL_SUPPLY);
};

