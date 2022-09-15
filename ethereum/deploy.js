const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

// const provider = new HDWalletProvider(
//   'REPLACE_WITH_YOUR_MNEMONIC',
//   // remember to change this to your own phrase!
//   'https://rinkeby.infura.io/v3/15c1d32581894b88a92d8d9e519e476c'
//   // remember to change this to your own endpoint!
// );

const provider = new HDWalletProvider(
    'cruel thing wagon luggage scatter banner produce stand deal arena potato door',
    'https://rinkeby.infura.io/v3/6bf9fb335b934438b21dcdcc92966a83'
  );


  const web3 = new Web3(provider);

  const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
  
    console.log("Attempting to deploy from account", accounts[0]);
  
    const result = await new web3.eth.Contract(compiledFactory.abi)
      .deploy({ data: compiledFactory.evm.bytecode.object })
      .send({ gas: "1400000", from: accounts[0] });
  
    console.log("Contract deployed to", result.options.address);
    provider.engine.stop();
  };
  deploy();
  
