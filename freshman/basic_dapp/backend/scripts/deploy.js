async function main() {
  const HelloWorld = await ethers.getContractFactory("Mood");

  // Start deployment, returning a promise that resolves to a contract object
  const mood = await HelloWorld.deploy();
  console.log("Contract deployed to address:", mood.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
