const TokenMatic = artifacts.require('./TokenMatic.sol');

module.exports = async done => {
  const [sender, _] = await web3.eth.getAccounts();
  const tokenMatic = await TokenMatic.deployed();
  const balance = await tokenMatic.balanceOf(sender);
  console.log(balance.toString());
  done();
}
