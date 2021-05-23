import React, { Component } from "react";
import {
  FormGroup,
  FormControl,
  ControlLabel
} from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./Sub.css";
import Web3 from 'web3';
import Web3Provider from 'react-web3-provider';

export default class BugSub extends Component {
  constructor(props) {

    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    web3.eth.getAccounts().then(console.log);  //this here prints out my primary MetaMask address

    super(props);
    this.state = {
      sum: "",
      fullissue: "",
      images: "",
      matrix: "",
      newSub: null
    };
  }



  validateForm() {
    return (
      this.state.company.length > 0 &&
      this.state.images.length > 0 &&
      this.state.images === this.state.matrix
    );
  }


  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();


    this.setState({ isLoading: true });

    this.setState({ newSub: "test" });

    this.setState({ isLoading: false });
  }


  handleSubmissionSubmit = async event => {
    event.preventDefault();

    this.setState({ isLoading: true });
    var senderAccount;
    web3.eth.getAccounts((error, accounts) => (senderAccount = accounts[0]));

    console.log(senderAccount);


    var Contract = new web3.eth.Contract(ABI, '0x0982008ea0509fb05283eeba2ff161a5964a67b0', {
  from: senderAccount});

    window.contractInstance = Contract;

    window.contractInstance.methods.actualContractMethod("value a", "valueb").send({from: senderAccount}).on('transactionHash',            function(hash){ console.log("Hash: " + hash);  

  },

  renderSubmissionForm() {
    return (
      <form onSubmit={this.handleSubmissionSubmit}>
        <LoaderButton
          block
          bsSize="large"
          type="submit"
          isLoading={this.state.isLoading}
          text="Return home"
          loadingText="Thank you…"
        />
      </form>
    );
  }

  renderForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="company" bsSize="large">
          <ControlLabel> Company</ControlLabel>
          <FormControl
            autoFocus
            type="company"
            value={this.state.company}
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup controlId="sum" bsSize="large">
          <ControlLabel>Summary</ControlLabel>
          <FormControl
            autoFocus
            type="sum"
            value={this.state.sum}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="fullissue" bsSize="large">
          <ControlLabel> Statement </ControlLabel>
          <FormControl as="textarea" rows="10" type="fullissue" value={this.state.fullissue} onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="images" bsSize="large">
          <ControlLabel>Images</ControlLabel>
          <FormControl
            value={this.state.images}
            onChange={this.handleChange}
            type="images"
          />
        </FormGroup>
        <FormGroup controlId="matrix" bsSize="large">
          <ControlLabel> Intensity</ControlLabel>
          <FormControl
            value={this.state.matrix}
            onChange={this.handleChange}
            type="matrix"
          />
        </FormGroup>
        <LoaderButton
        onclick="activate()"
          block
          bsSize="large"
          disabled={!this.validateForm()}
          type="submit"
          isLoading={this.state.isLoading}
          text="Submit"
          loadingText="Submitting..."
        />
      </form>
    );
  }
  render() {
    return (
      <div className="Submission">
        {this.state.newSub === null
          ? this.renderForm()
          : this.renderSubmissionForm()}
      </div>
    );
  }
}