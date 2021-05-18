import React, { Component } from 'react'
import DonateForm from '../components/DonateForm'

export default class Donate extends Component {

    constructor (props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <DonateForm  />
            </div>
        )
    }
}
