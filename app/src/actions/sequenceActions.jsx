import { toastr } from 'react-redux-toastr'
import { sequenceConstants } from '../constants'
import { sequenceService } from '../services'
import { loaderActions, errorActions } from './index'

export default {

  loadSequences() {
    const request = () => ({ type: sequenceConstants.LOAD_SEQUENCES_REQUEST })
    const success = sequences => ({ type: sequenceConstants.LOAD_SEQUENCES_SUCCESS, sequences })
    const failure = error => ({ type: sequenceConstants.LOAD_SEQUENCES_FAILURE, error })

    return (dispatch, getState) => {
      const state = getState()

      dispatch(request())
      dispatch(errorActions.clearError())
      dispatch(loaderActions.showLoader())

      sequenceService.loadSequences(state.user.token).then((sequences) => {
        dispatch(success(sequences))
        dispatch(loaderActions.hideLoader())
      }).catch((error) => {
        dispatch(failure(error))
        dispatch(loaderActions.hideLoader())
        dispatch(errorActions.handleRequestFailure(error))
      })
    }
  },

  addSequence(sequenceName) {
    const request = () => ({ type: sequenceConstants.CREATE_SEQUENCE_REQUEST })
    const success = sequence => ({ type: sequenceConstants.CREATE_SEQUENCE_SUCCESS, sequence })
    const failure = error => ({ type: sequenceConstants.CREATE_SEQUENCE_FAILURE, error })

    return (dispatch, getState) => {
      const state = getState()

      dispatch(request())
      dispatch(loaderActions.showLoader())

      sequenceService.addSequence(sequenceName, state.user.token).then((sequence) => {
        dispatch(success(sequence))
        dispatch(loaderActions.hideLoader())
        toastr.success('Nice!', 'Sequence created successfully')
      }).catch((error) => {
        dispatch(failure(error))
        dispatch(loaderActions.hideLoader())
        // toastr.error('Failure!', 'loadSubscriptions service error')
      })
    }
  },

  deleteSequence(sequenceId) {
    const request = () => ({ type: sequenceConstants.DELETE_SEQUENCE_REQUEST })
    const success = id => ({ type: sequenceConstants.DELETE_SEQUENCE_SUCCESS, id })
    const failure = error => ({ type: sequenceConstants.DELETE_SEQUENCE_FAILURE, error })

    return (dispatch, getState) => {
      const state = getState()

      dispatch(request())
      dispatch(loaderActions.showLoader())

      sequenceService.deleteSequence(sequenceId, state.user.token).then(() => {
        dispatch(success(sequenceId))
        dispatch(loaderActions.hideLoader())
        toastr.success('Nice!', 'Sequence deleted successfully')
      }).catch((error) => {
        dispatch(failure(error))
        dispatch(loaderActions.hideLoader())
        // toastr.error('Failure!', 'loadSubscriptions service error')
      })
    }
  },

  resetSequence(sequenceId, newValue) {
    const request = () => ({ type: sequenceConstants.RESET_SEQUENCE_REQUEST })
    const success = sequence => ({ type: sequenceConstants.RESET_SEQUENCE_SUCCESS, sequence })
    const failure = error => ({ type: sequenceConstants.RESET_SEQUENCE_FAILURE, error })

    return (dispatch, getState) => {
      const state = getState()

      dispatch(request())
      dispatch(loaderActions.showLoader())

      sequenceService.resetSequence(sequenceId, newValue, state.user.token).then((sequence) => {
        dispatch(success(sequence))
        dispatch(loaderActions.hideLoader())
        toastr.success('Nice!', 'Sequence updated successfully')
      }).catch((error) => {
        dispatch(failure(error))
        dispatch(loaderActions.hideLoader())
        // toastr.error('Failure!', 'loadSubscriptions service error')
      })
    }
  },

}
