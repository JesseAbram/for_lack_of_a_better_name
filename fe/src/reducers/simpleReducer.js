const initialState = {
  iface: {},
  web3: null
};

export function appState(state = initialState, action = {}) {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        ...state,
        web3: action.payload
      };
    case 'SECOND_ACTION':
      return {
          ...state,
        iface: action.payload
      };

    default:
      return state;
  }
}
