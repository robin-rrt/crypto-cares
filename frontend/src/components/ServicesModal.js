// import React, {useRef} from 'react';
import './ServicesModal.css'
import styled from 'styled-components';
import {MdClose} from 'react-icons/md';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'


const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`;


export default function ServicesModal({ handleClose, isOpen, children }) {
    // const modalRef = useRef();

    var showHideClassName = isOpen ? "modal services-display-block" : "modal services-display-none";

    // const closeModal = e => {
    //     if (modalRef.current === e.target) {
    //         isOpen = false;
    //     }
    // }

    return (
            <div className={showHideClassName} >
                <section className="services-modal-main" /*ref={modalRef} onClick={closeModal}*/>
                    { children }
                    <button type="button" onClick={handleClose}>Close Modal</button>

                    <Accordion defaultActiveKey="0">
                        {/* <Card>
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
                        </Card> */}
                        <Form>
                            {['checkbox', 'radio'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    label={`default ${type}`}
                                />

                                <Form.Check
                                    disabled
                                    type={type}
                                    label={`disabled ${type}`}
                                    id={`disabled-default-${type}`}
                                />
                                </div>
                            ))}
                        </Form>

                    </Accordion>

                    <CloseModalButton aria-label="Close Modal" onClick={handleClose} />
                
                </section>
                
            </div>
    )
}


