import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { getWeb3, initiateContract } from './actions/web3';
import './App.css';
import {ADDRESS, ABI} from './blockchain'
import { ethers } from 'ethers';

let web3;
let ethereum;

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  componentWillMount() {
    window.addEventListener('load', () => {
      web3 = global.web3;
      ethereum = global.ethereum;
    });
  }
  getWeb3 = async () => {
    await ethereum.enable();
    const account = web3.eth.accounts[0];
    this.props.getWeb3(account);
  };

  initiateContract = () => {
    const iface = new ethers.utils.Interface(ABI);
    this.props.initiateContract(iface);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload
        </p>
        <Button onClick={this.getWeb3}>Test redux action</Button>
        <Button onClick={this.initiateContract}>Test second action</Button>
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = {
  getWeb3,
  initiateContract
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
