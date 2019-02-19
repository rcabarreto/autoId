import { userActions } from './index'

export default {

  handleRequestFailure(errorObj) {
    const showMessage = error => ({ type: 'SET_ERROR_MESSAGE', error })

    return (dispatch) => {
      if (errorObj) {
        dispatch(showMessage(errorObj))
        if (errorObj.status === 401) {
          dispatch(userActions.logoutUser())
        }
      } else {
        dispatch(showMessage({ status: 500, statusText: 'Unable to refresh data, server is not responding' }))
      }
    }
  },

  clearError() {
    return { type: 'CLEAR_ERROR_MESSAGE' }
  },

}
