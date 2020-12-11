// migrations/2_deploy.js 
const { deployProxy } = require('@openzeppelin/truffle-upgrades');
 
const ZCX = artifacts.require('ZCX');

module.exports = async function (deployer) {
  await deployProxy(ZCX, ['ZEN Exchange Token', 'ZCX'], { deployer, initializer: 'initialize' });
};