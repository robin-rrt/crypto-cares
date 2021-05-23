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
    // state = {
    //     isOpen: false,
    //     service: ''
    // }
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

    // showModal = () => {
    //     this.setState({ isOpen: true }, () => {
    //         this.closeButton.focus();
    //         this.toggleScrollLock();
    //     });
    // };

    // toggleScrollLock = () => {
    //     document.querySelector('html').classList.toggle('scroll-lock');
    // };

    // closeModal = () => {
    //     this.setState({ isOpen: false });
    //     this.TriggerButton.focus();
    //     this.toggleScrollLock();
    // };

    // onKeyDown = (event) => {
    //     if (event.keyCode === 27) {
    //         this.closeModal();
    //     }
    // };

    // onSubmit(event) {

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
                 <form /*onSubmit={this.onSubmit}*/ className="donate-form"> 
                    <h1 className="donate-title">Donate</h1>

                    <input type="text" placeholder="Name (optional)" className="donate-inputField" />

                    <br />

                    <select className="donate-inputField">
                        <option value="indiaFund">Crypto Relief India Fund</option>
                    </select>

                    <br />


                        {/* <button type="button" id="ServiceButton" className="donate-inputField" onClick={this.showModal}>Choose a service</button> */}

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
                                {/* <Form>
                                    <Form.Group as="row">

                                        <Col>
                                            <Form.Check type="radio"></Form.Check>
                                            <Form.Check type="radio"></Form.Check>
                                            <Form.Check type="radio"></Form.Check>
                                            <Form.Check type="radio"></Form.Check>
                                        </Col>
                                        <Col sm="4">
                                        <Accordion defaultActiveKey="0">
                                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                            Click me!
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                            <Card.Body>Hello! I'm the body</Card.Body>
                                            </Accordion.Collapse>
                                            </Accordion>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as="row">

                                        <Col>
                                            <Form.Check type="radio"></Form.Check>
                                        </Col>
                                        <Col sm="4">
                                        <Accordion defaultActiveKey="0">
                                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                            Click me!
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                            <Card.Body>Hello! I'm the body</Card.Body>
                                            </Accordion.Collapse>
                                            </Accordion>
                                        </Col>
                                    </Form.Group>
                                    {/* <Form.Group as="row"> */}
                                        {/* <Form.Check type="radio"></Form.Check>
                                        <Accordion defaultActiveKey="0">
                                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                            Click me!
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="1">
                                            <Card.Body>Hello! I'm another body</Card.Body>
                                            </Accordion.Collapse>
                                            </Accordion> */}
                                        
                                    {/* </Form.Group> 
                                </Form> */}
                            </Modal.Body>
                        </Modal>

                        <ServicesModal isOpen={this.state.isOpen} handleClose={this.hideModal}>
                            {/* <Accordion defaultActiveKey="0">
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
                            </Accordion> */}
                        </ServicesModal>

                    <br />

                    <label className="threshold">Threshold: ~ xxx amount </label>

                    <br />

                    <input type="text" placeholder="Amount" className="donate-inputField" />

                    <br />

                    <button type="submit" id="donate-submit"className="donate-inputField">Donate</button>
                </form>
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
    
    