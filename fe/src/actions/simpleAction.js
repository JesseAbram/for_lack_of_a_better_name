export const simpleAction = account => dispatch => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: account
  });
};

export const secondAction = (iface) => dispatch => {
  dispatch({
    type: 'SECOND_ACTION',
    payload: iface
  });
};
