
export default (state = {}, action) => {
  switch (action.type) {
  case 'SET_ERROR_MESSAGE':
    return {
      ...action.error,
    }
  case 'CLEAR_ERROR_MESSAGE':
    return {}
  default:
    return state
  }
}
