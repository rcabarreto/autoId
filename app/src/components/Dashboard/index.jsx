import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { sequenceActions } from '../../actions'

import SequenceForm from './SequenceForm'
import SequenceList from './SequenceList'

const Dashboard = ({ token, dispatch }) => {
  useEffect(() => {
    dispatch(sequenceActions.loadSequences(token))
  })

  return (
    <div>
      <h1>My Sequences</h1>
      <SequenceForm />
      <SequenceList />
    </div>
  )
}


export default connect(state => ({
  token: state.user.token,
}))(Dashboard)
