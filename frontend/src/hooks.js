import "./contracts/Cryptocares.json"
import Web3 from 'web3';
import {useGlobal} from 'reactn';

const h = new Web3(Web3.givenProvider || "http://localhost:9545");
var contract = Web3.eth.contract(Cryptocares.abi,'0x0982008ea0509fb05283eeba2ff161a5964a67b0')

function Add_Services(minimum_donation_amount, duration, numberOfServices,description, uri ){

    contract.methods.Add_Services(minimum_donation_amount,numberOfServices,description,uri).send({from:account});
} 
