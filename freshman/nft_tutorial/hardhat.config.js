require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const RINKEBY_API_KEY_URL = process.env.RINKEBY_API_KEY_URL;
const GOERLI_API_KEY_URL = process.env.GOERLI_API_KEY_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "goerli",
  networks: {
    hardhat: {},
    rinkeby: {
      url: RINKEBY_API_KEY_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    goerli: {
      url: GOERLI_API_KEY_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
