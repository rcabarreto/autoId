import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { sequenceActions } from '../../actions'

import SequenceForm from './SequenceForm'
import SequenceList from './SequenceList'

const Dashboard = ({ dispatch }) => {
  useEffect(() => {
    dispatch(sequenceActions.loadSequences())
  })

  return (
    <div>
      <h1>My Sequences</h1>
      <SequenceForm />
      <SequenceList />
    </div>
  )
}


export default connect()(Dashboard)
