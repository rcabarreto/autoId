import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'


const FormModal = ({ handleHideModal, handleConfirmation }) => {
  const myModal = React.createRef()

  const [formValue, setFormValue] = useState('0')

  useEffect(() => {
    $(ReactDOM.findDOMNode(myModal.current)).modal('show')
    $(ReactDOM.findDOMNode(myModal.current)).on('hidden.bs.modal', handleHideModal)

    return () => {
      $(ReactDOM.findDOMNode(myModal.current)).modal('hide')
    }
  }, [])

  const handleSubmit = () => {
    $(ReactDOM.findDOMNode(myModal.current)).modal('hide')
    handleConfirmation(formValue)
  }

  return (
    <div className="modal fade" id="schedulerFormModal" tabIndex="-1" role="dialog" aria-labelledby="schedulerFormModalLabel" aria-hidden="true" ref={myModal}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="schedulerFormModalLabel">Edit configuration</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="new-value" className="col-form-label">New value:</label>
                <input type="number" className="form-control" id="new-value" value={formValue} onChange={event => setFormValue(event.target.value)} />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Update value</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default FormModal
