const initialState = {
  wallet: {},
  address: ''
};

export function appState(state = initialState, action = {}) {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload
      };
    case 'SECOND_ACTION':
      return {
        result: action.payload
      };
    default:
      return state;
  }
}
