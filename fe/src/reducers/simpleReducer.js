const initialState = {
  iface: {},
  address: ''
};

export function appState(state = initialState, action = {}) {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        ...state,
        address: action.payload
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
