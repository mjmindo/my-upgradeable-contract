const { ethers, upgrades } = require('hardhat');

// TO DO: Place the address of your proxy here!
const proxyAddress = '0x5f760e7433c1e42BdC809D324C9B45f9591e6eb5';

async function main() {
  const VendingMachine2 = await ethers.getContractFactory('VendingMachine2');
  const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachine2);

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyAddress
  );

  console.log("The current contract owner is: " + upgraded.owner());
  console.log('Implementation contract address: ' + implementationAddress); //0x385FBB5aA5513c3c5ba378bA2EE5Bb3A95DeB3A0
}

main();