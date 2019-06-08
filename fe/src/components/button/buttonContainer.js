import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Header from './header.js';

export const mapStateToProps = state => ({
  web3: state.
});

export default withRouter(connect(
  mapStateToProps
)(Header));
