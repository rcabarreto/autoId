import { push } from 'connected-react-router'
import { toastr } from 'react-redux-toastr'
import { userService } from '../services'
import { userConstants } from '../constants'
import { loaderActions, errorActions } from './index'

export default {

  checkLoggedinUser() {
    const userObject = userService.loadUserLocalData()
    return { type: userConstants.LOGIN_SUCCESS, user: userObject }
  },

  signinUser(name, email, password) {
    const request = () => ({ type: userConstants.SIGNIN_REQUEST })
    const success = user => ({ type: userConstants.SIGNIN_SUCCESS, user })
    const failure = error => ({ type: userConstants.SIGNIN_FAILURE, error })

    return (dispatch) => {
      dispatch(request())
      dispatch(loaderActions.showLoader())

      userService.signinUser(name, email, password).then((userObject) => {
        dispatch(success(userObject))
        dispatch(loaderActions.hideLoader())
        dispatch(push('/login'))
      }).catch((error) => {
        dispatch(failure(error))
        dispatch(loaderActions.hideLoader())
        dispatch(errorActions.handleRequestFailure(error))

        if (error.data.name === 'SequelizeUniqueConstraintError') { toastr.error('Failure!', 'User already registered!') }
      })
    }
  },

  loginUser(email, password) {
    const request = () => ({ type: userConstants.LOGIN_REQUEST })
    const success = user => ({ type: userConstants.LOGIN_SUCCESS, user })
    const failure = error => ({ type: userConstants.LOGIN_FAILURE, error })

    return (dispatch) => {
      dispatch(request())
      dispatch(loaderActions.showLoader())

      userService.loginUser(email, password).then((userObject) => {
        dispatch(success(userObject))
        dispatch(loaderActions.hideLoader())
        dispatch(push('/dashboard'))
      }).catch((error) => {
        dispatch(failure(error))
        dispatch(loaderActions.hideLoader())
        dispatch(errorActions.handleRequestFailure(error))
        if (error.status === 401) { toastr.error('Failure!', 'Wrong password or user not registered!') }
      })
    }
  },

  logoutUser() {
    const logout = () => ({ type: userConstants.USER_LOGOUT })

    return (dispatch) => {
      userService.deleteUserData().then(() => {
        dispatch(logout())
      })
    }
  },

}
