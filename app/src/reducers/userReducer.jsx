import { userConstants } from '../constants'

export default (state = {}, action) => {
  switch (action.type) {
  case userConstants.LOGIN_SUCCESS:
    return {
      ...action.user,
    }
  case userConstants.USER_LOGOUT:
    return {}
  default:
    return state
  }
}
