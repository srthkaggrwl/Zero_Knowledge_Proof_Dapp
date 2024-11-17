// 4.3 Create migrations/1_deploy_contracts.js
const ZKVerifier = artifacts.require("ZKVerifier");

module.exports = function(deployer) {
  deployer.deploy(ZKVerifier);
};