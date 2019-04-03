import React, { useState } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import { Trash2 } from 'react-feather'
import { sequenceActions } from '../../actions'
import ConfirmationModal from '../ConfirmationModal'
import FormModal from '../FormModal'
import TextModal from '../TextModal'


const SequenceItem = ({
  id, name, slug, value, createdAt, updatedAt, token, dispatch,
}) => {
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [showFormModal, setShowFormModal] = useState(false)
  const [showEndpointsModal, setShowEndpointsModal] = useState(false)
  const [showApiKey, setShowApiKey] = useState(false)

  const handleHideModal = () => {
    setShowConfirmModal(false)
    setShowFormModal(false)
    setShowEndpointsModal(false)
    setShowApiKey(false)
  }

  const handleDeleteItem = () => {
    setShowConfirmModal(false)
    dispatch(sequenceActions.deleteSequence(id))
  }

  const handleResetValue = (newValue) => {
    setShowFormModal(false)
    console.log('newValue', newValue)
    dispatch(sequenceActions.resetSequence(id, newValue))
  }


  const showApiToken = () => `
  <p>This is your API Token:</p>
  <span class="tokenContainer">${token}</span>
  `

  const showInstructions = () => `
  <p>Get sequence next value:</p>
  <span class="tokenContainer">
  curl -X GET http://${process.env.API_URL}:${process.env.API_PORT}/api/sequence/${slug}/next -H "Authorization: Bearer XXXXXX"
  </span>
  <br />
  <p>Get sequence current value:</p>
  <span class="tokenContainer">
  curl -X GET http://${process.env.API_URL}:${process.env.API_PORT}/api/sequence/${slug}/current -H "Authorization: Bearer XXXXXX"
  </span>
  `

  return (
    <React.Fragment>
      {showConfirmModal && <ConfirmationModal handleHideModal={handleHideModal} handleConfirmation={handleDeleteItem} />}
      {showFormModal && <FormModal handleHideModal={handleHideModal} handleConfirmation={handleResetValue} />}
      {showEndpointsModal && <TextModal handleHideModal={handleHideModal} modalHTMLContent={showInstructions()} largeModal />}
      {showApiKey && <TextModal handleHideModal={handleHideModal} modalHTMLContent={showApiToken()} />}
      <div className="list-group-item mb-2">
        <div className="d-flex w-100 justify-content-between">
          <span style={{ textAlign: 'left' }}>
            <h3 className="mb-1">{name}</h3>
          </span>
          <span>
            {slug}<br />
            <small>Created {moment(createdAt).fromNow()}</small><br />
            <small>Updated {moment(updatedAt).fromNow()}</small>
          </span>
          <h1>{value}</h1>
        </div>
        <div className="d-flex w-100 justify-content-between">
          <span>
            <button type="button" className="btn btn-primary btn-sm mr-1" onClick={() => setShowEndpointsModal(true)}>Endpoints</button>
            <button type="button" className="btn btn-secondary btn-sm mr-1" onClick={() => setShowApiKey(true)}>Token</button>
          </span>
          <span>
            <button type="button" className="btn btn-warning btn-sm mr-1" onClick={() => setShowFormModal(true)}>Reset</button>
            <button type="button" className="btn btn-danger btn-sm" onClick={() => setShowConfirmModal(true)}><Trash2 style={{ width: '18px', height: '18px' }} /></button>
          </span>
        </div>
      </div>
    </React.Fragment>
  )
}


export default connect(state => ({
  token: state.user.token,
}))(SequenceItem)
