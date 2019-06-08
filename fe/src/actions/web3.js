export const getWeb3 = account => dispatch => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: account
  });
};

export const initiateContract = (iface) => dispatch => {
  dispatch({
    type: 'SECOND_ACTION',
    payload: iface
  });
};
