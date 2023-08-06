const { ethers, upgrades } = require('hardhat');

async function main() {
  const VendingMachine1 = await ethers.getContractFactory('VendingMachine1');
  const proxy = await upgrades.deployProxy(VendingMachine1, [100]);
  await proxy.waitForDeployment();



  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    await proxy.getAddress()
  );

  console.log('Proxy contract address: ' + await proxy.getAddress()); //0x5f760e7433c1e42BdC809D324C9B45f9591e6eb5

  console.log('Implementation contract address: ' + implementationAddress); //0x385FBB5aA5513c3c5ba378bA2EE5Bb3A95DeB3A0 this is the one you should verify
  
  //Successfully verified contract VendingMachine1 on Etherscan.
  // https://goerli.etherscan.io/address/0x385FBB5aA5513c3c5ba378bA2EE5Bb3A95DeB3A0#code
}

main();