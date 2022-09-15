import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
      CampaignFactory.abi,
    '0xBdCaA50291780EC2E148406B292d66bdb636E6E5'
);

export default instance;