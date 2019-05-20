import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { simpleAction, secondAction } from './actions/simpleAction';
import './App.css';

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
  simpleAction = async () => {
    await ethereum.enable();
    const account = web3.eth.accounts[0];
    this.props.simpleAction(account);
  };

  secondAction = () => {
    this.props.secondAction();
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
        <Button onClick={this.simpleAction}>Test redux action</Button>
        <Button onClick={this.secondAction}>Test second action</Button>
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = {
  simpleAction,
  secondAction
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
