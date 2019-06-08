export const getWeb3 = web3 => dispatch => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: web3
  });
};

export const initiateContract = (iface) => dispatch => {
  dispatch({
    type: 'SECOND_ACTION',
    payload: iface
  });
};
