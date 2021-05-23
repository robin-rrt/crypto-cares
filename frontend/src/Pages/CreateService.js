import React,{getGlobal,useGlobal, useState} from 'reactn'
import { Form, Button } from 'react-bootstrap'
import './createService.css'
import Web3 from 'web3'
import ABI from '../contracts/Cryptocares.json'

const CreateService = () => {
    const [account, setAccount] = useGlobal('account')
    const [minDonation, setMinDonation] = useState('minDonation')
    const [duration, setDuration] = useState('duration')
    const [amount, setAmount] = useState('amount')
    const [description, setDescription] = useState('description')
    const [uri, setUri] = useState('uri')

    // const { abi } = require('../contracts/Cryptocares.json')

    // const [web3] = useGlobal('web3')

    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")

    var contract = new web3.eth.Contract([ABI], '0x2Dab42C8Ff8A4Acb7384A86F9a1d1F484B5196dc');

    const handleSubmit = async event => {
        
        event.preventDefault();
        console.log("minimum donation amount: " + minDonation)
        console.log(ABI)
        contract.methods.Add_Services({minDonation, duration, amount, description, uri}).send({from: account, gas: 0x00, 
            gasPrice: 0x00})
        .on('transactionHash', (hash) => {
            console.log(hash)
        })
        .on('receipt', (receipt) => {
            console.log(receipt)
        })
        
    }
    return (
        <div className="create-service-container">   
        
            <div className="create-service-form">
                {
                    
                    !!account
                    ?
                        
                        <Form.Group>
                            <Form onSubmit={handleSubmit}>
                                <h2 className="service-title">Create Service</h2>
                                
                                <Form.Control className="service-input-field" placeholder="Minimum Donation Amount ($)" onChange={e => setMinDonation(e.target.value)} ></Form.Control>
                                <br />
                                <Form.Control className="service-input-field" placeholder="Duration of Service (days)" onChange={e => setDuration(e.target.value)}></Form.Control>
                                <br />
                                <Form.Control className="service-input-field" placeholder="Amount of Services" onChange={e => setAmount(e.target.value)}></Form.Control>
                                <br />
                                <Form.Control className="service-input-field" as="textarea" placeholder="Description of Service" rows={3} onChange={e => setDescription(e.target.value)}></Form.Control>
                                <br />
                                <Form.Control className="service-input-field" placeholder="Contact URI" onChange={e => setUri(e.target.value)}></Form.Control>
                                <br />
                                <Button type="submit">Create Service</Button>
                            </Form>
                        
                         </Form.Group>
                    :
                    <h1>Account not Connected</h1>
                } 
                
            </div>

          
        </div>

    )
}

export default CreateService;