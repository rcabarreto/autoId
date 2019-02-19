import { sequenceConstants } from '../constants'

export default (state = {}, action) => {
  switch (action.type) {
  case sequenceConstants.LOAD_SEQUENCES_SUCCESS:
    return {
      ...state,
      items: [...action.sequences],
    }
  case sequenceConstants.CREATE_SEQUENCE_SUCCESS:
    return {
      ...state,
      items: [...state.items, action.sequence],
    }
  case sequenceConstants.DELETE_SEQUENCE_SUCCESS:
    return {
      ...state,
      items: state.items.filter(item => (item.id !== action.id)),
    }
  case sequenceConstants.RESET_SEQUENCE_SUCCESS:
    return {
      ...state,
      items: state.items.map((item) => {
        if (item.id !== action.sequence.id) {
          return item
        }
        return action.sequence
      }),
    }
  default:
    return state
  }
}
