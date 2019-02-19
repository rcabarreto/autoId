import React, { useState } from 'react'
import { connect } from 'react-redux'

import { sequenceActions } from '../../actions'

const AddSequence = ({ token, dispatch }) => {
  const [sequenceName, setSequenceName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(sequenceActions.addSequence(sequenceName, token))
    setSequenceName('')
  }

  return (
    <div className="container mt-3 mb-4">
      <div className="addSequence">
        <form className="form-inline addSequenceForm" onSubmit={handleSubmit}>
          <div className="form-group mb-2 d-flex w-100 justify-content-between">
            <input type="text" value={sequenceName} onChange={event => setSequenceName(event.target.value)} className="form-control form-control-lg addSequenceInput" placeholder="Create a new sequence..." required />
            <button type="submit" className="btn btn-lg btn-primary">create</button>
          </div>
        </form>
      </div>
    </div>
  )
}


export default connect(state => ({
  token: state.user.token,
}))(AddSequence)
