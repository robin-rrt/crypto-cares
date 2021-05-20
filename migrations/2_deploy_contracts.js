const CryptoCares = artifacts.require("CryptoCares");
const CryptoCaresNFT=artifacts.require("Crypto_Care_NFT")
module.exports = function (deployer) {
  deployer.deploy(CryptoCares);
  deployer.deploy(Crypto_Care_NFT);
};
