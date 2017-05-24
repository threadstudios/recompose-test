const defaultState = {
  accountReference : false,
  loading: false,
  error: false,
  aemLabelOne : 'Test',
  aemFieldSomething : 'Blah',
  FieldSomething: 'Gah?!'
}

const account = (state = defaultState, action) => {
  switch (action.type) {
    case 'EDIT_ACCOUNT':
      return {accountReference : action.id}
    case 'XHR_START':
      return Object.assign({}, state, {loading : true, error : false});
    case 'XHR_SUCCESS':
      return Object.assign({}, state, {accountReference: 'AB0001', loading : false, error: false});
    case 'XHR_ERROR':
      return Object.assign({}, state, {loading : false, error: true});
    default:
      return state
  }
}

export default account