import React, { Component } from 'react'
import './DonateForm.css';
import ServicesModal from './ServicesModal';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Table, FormGroup, FormControl, ControlLabel, Col} from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

export default class DonateForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            fund: '',
            threshold: '',
            isOpen: false, 
            service: '',
            donateAmount: ''
        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);

        // this is where we'll pass services data to the modal, then the modal will return the selection

        // this.onSubmit = this.onSubmit.bind(this);
    }

    // handleChange(e) {
        
    // }

    showModal() {
        this.setState({ isOpen: true });
    };
    
    hideModal() {
        this.setState({ isOpen: false });
    };


    render() {
        return (
            <div className="donate-container">
                 <Form.Group onSubmit={this.onSubmit} className="donate-form"> 
                    <h1 className="donate-title">Donate</h1>

                    <input type="text" placeholder="Name (optional)" className="donate-inputField" />

                    <br />

                    <select className="donate-inputField">
                        <option value="indiaFund">Crypto Relief India Fund</option>
                    </select>

                    <br />

                        <Button id="ServiceButton" variant="primary" onClick={this.showModal}>
                            Choose a Service
                        </Button>

                        <Modal id="serviceModal" show={this.state.isOpen} onHide={this.hideModal}>
                            <Modal.Body>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                        Click me!
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                        <Card.Body>Hello! I'm the body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1">
                                        Click me!
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                        <Card.Body>Hello! I'm another body</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Modal.Body>
                        </Modal>
                    <br />

                    <label className="threshold">Threshold: ~ xxx amount </label>

                    <br />

                    <input type="text" placeholder="Amount" className="donate-inputField" />

                    <br />

                    <button type="submit" id="donate-submit"className="donate-inputField">Donate</button>
                </Form.Group>
            </div>
        )
    }
}

// function CustomToggle({ children, eventKey }) {
//     const decoratedOnClick = useAccordionToggle(eventKey, () =>
//     console.log('totally custom!'),
//     );
//     return (
//     <div onClick={decoratedOnClick} >
//     <Form.Check
//     >
//     <Form.Check.Input type="radio" />
//     {children}
//     </Form.Check>
//     </div>
//     );
// }
    
    