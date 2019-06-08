import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { getWeb3, initiateContract } from './actions/web3';
import './App.css';
import {ADDRESS, ABI} from './blockchain'
import { ethers } from 'ethers';



class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  componentWillMount() {
    this.getWeb3()
    this.initiateContract()
  }

  async componentDidMount() { 
    await this.getWeb3()
    await this.initiateContract()
  }

  getWeb3 = async () => {
    await global.ethereum.enable();
    this.props.getWeb3(global.web3);
  
  };

  initiateContract = () => {
    const iface = new ethers.utils.Interface(ABI);
    this.props.initiateContract(iface);
  console.log(this.props)  
  }

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
