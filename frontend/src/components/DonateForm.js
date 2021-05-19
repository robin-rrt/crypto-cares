import './DonateForm.css';
import React, { Component } from 'react'
import ServicesModal from './ServicesModal';

export default class DonateForm extends Component {
    state = {
        isOpen: false,
        service: ''
    }
    constructor(props) {
        super(props);
        this.state = {isOpen: false, service: ''};

        // this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(e) {
        
    }

    showModal = () => {
        this.setState({ isOpen: true }, () => {
        this.closeButton.focus();
        this.toggleScrollLock();
        });
    };

    toggleScrollLock = () => {
        document.querySelector('html').classList.toggle('scroll-lock');
    };

    closeModal = () => {
        this.setState({ isOpen: false });
        this.TriggerButton.focus();
        this.toggleScrollLock();
    };

    onKeyDown = (event) => {
        if (event.keyCode === 27) {
            this.closeModal();
        }
    };

    onSubmit(event) {

    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit} className="DonateForm">
                    <h1 className="title">Donate</h1>

                    <input type="text" placeholder="Name (optional)" className="inputField" />

                    <br />

                    <select className="inputField">
                        <option value="indiaFund">Crypto Relief India Fund</option>
                    </select>

                    <br />

                    <button id="ServiceButton" className="inputField" onClick={this.openServices}>Choose a service</button>

                    {/* <ServicesModal /> */}

                    <br />

                    <p className="threshold">Threshold: ~ xxx amount</p>

                    <br />

                    <input type="text" placeholder="Amount" className="inputField" />

                    <br />

                    <button type="submit" id="submit"className="inputField">Donate</button>
                </form>
            </div>
        )
    }
}




// const Donate = () => {
//     return (
//         <div style=
//         {{
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//         }}
//         >
//             <form action="" className="DonateForm">
//                 <h1 className="title">Donate</h1>

//                 <input type="text" placeholder="Name (optional)" className="inputField"></input>

//                 <br />

//                 <select className="inputField">
//                     <option value="indiaFund">Crypto Relief India Fund</option>
//                 </select>

//                 <br />

//                 <button id="ServiceButton" className="inputField" onClick>Choose a service</button>

//                 <br />

//                 <p className="threshold">Threshold: ~ xxx amount</p>

//                 <br />

//                 <button type="submit" id="submit"className="inputField">Donate</button>
//             </form>
//         </div>

//     )
// }

// export default Donate;