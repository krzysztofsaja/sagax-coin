const ConvertLib = artifacts.require("ConvertLib");
const SagaxCoin = artifacts.require("SagaxCoin");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, SagaxCoin);
  deployer.deploy(SagaxCoin);
};
