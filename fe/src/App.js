import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { simpleAction, secondAction } from './actions/simpleAction';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.simpleAction = this.simpleAction.bind(this);
    this.secondAction = this.secondAction.bind(this);
  }

  simpleAction() {
    this.props.simpleAction();
  }

  secondAction() {
    this.props.secondAction();
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
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  secondAction: () => dispatch(secondAction())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
