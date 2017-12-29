var SampleCrowdsale = artifacts.require("SampleCrowdsale");

module.exports = function(deployer, network, accounts) {

	const startTime = Date.now()/1000|0 + 120
    const endTime = startTime + (3600 * 1 * 1); // *1 hour *1 days
    const ethRate = new web3.BigNumber(100);
    const wallet = accounts[0];

	deployer.deploy(SampleCrowdsale, startTime, endTime, ethRate, 100000000000000000000, 200000000000000000000, wallet);
};