export const simpleAction = account => dispatch => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: account
  });
};

export const secondAction = () => dispatch => {
  dispatch({
    type: 'SECOND_ACTION',
    payload: 'yay! second action dispatch'
  });
};
