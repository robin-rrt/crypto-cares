import React from 'react-dom';


const ServicesModal = ({ handleClose, show, children }) => {
    
    return (
        <div>
            <div className="modal-container">
                {children}
                <button className="modal-close"onClick={handleClose}>close</button>
            </div>
        </div>
    )
}

export default ServicesModal




// import React, { Component } from 'react'

// export default class ServicesModal extends Component {

//     state= {
//         service: null
//     }

//     handleChange = (e) => this.setState({
//         service: e.target.value
//     })

//     render() {
//         return (
//             <div>
//                 <form>
//                     <h1>Donate</h1>

//                     <input type="text" placeholder="Name (optional)"  />

//                     <br />

//                     <select>
//                         <option value="indiaFund">Crypto Relief India Fund</option>
//                     </select>

//                     <br />

//                     <button id="ServiceButton" onClick={this.openServices}>Choose a service</button>

//                     <br />

//                     <p >Threshold: ~ xxx amount</p>

//                     <br />

//                     <button type="submit" onClick={() => this.props.onSubmit}>Pick Service</button>
//                 </form>
//             </div>
//         )
//     }
// }
