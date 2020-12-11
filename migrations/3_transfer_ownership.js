// migrations/3_transfer_ownership.js
const { admin } = require('@openzeppelin/truffle-upgrades');
 
module.exports = async function (network) {
  // Use address of your Gnosis Safe
  const gnosisSafe = '0x17b45dC664304Eb44A0Bd3BcEeC46f9d9543AFCB';
 
  // Don't change ProxyAdmin ownership for our test network
  if (network !== 'development') {
    // The owner of the ProxyAdmin can upgrade our contracts
    await admin.transferProxyAdminOwnership(gnosisSafe);
  }
};