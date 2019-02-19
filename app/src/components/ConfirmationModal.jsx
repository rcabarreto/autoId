import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

const ConfirmationModal = ({ handleHideModal, handleConfirmation }) => {
  const myModal = React.createRef()

  useEffect(() => {
    $(ReactDOM.findDOMNode(myModal.current)).modal('show')
    $(ReactDOM.findDOMNode(myModal.current)).on('hidden.bs.modal', handleHideModal)

    return () => {
      $(ReactDOM.findDOMNode(myModal.current)).modal('hide')
    }
  }, [])

  return (
    <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" ref={myModal}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">Confirm</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Do you really want to delete this Sequence?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-primary" onClick={handleConfirmation}>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default ConfirmationModal
