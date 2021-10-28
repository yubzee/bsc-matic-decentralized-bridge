const TokenEth = artifacts.require('TokenMatic.sol');
const TokenBsc = artifacts.require('TokenBsc.sol');
const BridgeEth = artifacts.require('BridgeMatic.sol');
const BridgeBsc = artifacts.require('BridgeBsc.sol');

module.exports = async function (deployer, network, addresses) {
 
  if(network === 'bscTestnet') {
    await deployer.deploy(TokenBsc);
    const tokenBsc = await TokenBsc.deployed();
    await deployer.deploy(BridgeBsc, tokenBsc.address);
    const bridgeBsc = await BridgeBsc.deployed();
    await tokenBsc.updateAdmin(bridgeBsc.address);
  }
 if(network === 'maticTestnet') {
    await deployer.deploy(TokenMatic);
    const tokenMatic = await TokenMatic.deployed();
    await deployer.deploy(BridgeMatic, tokenMatic.address);
    const bridgeMatic = await BridgeMatic.deployed();
    await tokenMatic.updateAdmin(bridgeMatic.address);
  }
};
