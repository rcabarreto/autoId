import React from 'react'
import { connect } from 'react-redux'

import SequenceItem from './SequenceItem'

const NotFound = () => (
  <div className="list-group-item list-group-item-action mb-2">
    <div className="d-flex w-100 justify-content-between">
      <span style={{ textAlign: 'left' }}>
        <h4 className="mt-1 mb-1">No sequences found!<br /><small>Create your first sequence using the form above.</small></h4>
      </span>
    </div>
  </div>
)


const SequenceList = ({ sequences }) => {
  const renderSequences = (sequences) => {
    if (!sequences || sequences.length === 0) return <NotFound />

    return sequences.map((sequence, index) => (
      <SequenceItem key={index} {...sequence} />
    ))
  }

  return (
    <div className="container">
      <ul className="list-group">
        {sequences && renderSequences(sequences)}
      </ul>
    </div>
  )
}


export default connect(state => ({
  sequences: state.sequence.items,
}))(SequenceList)
