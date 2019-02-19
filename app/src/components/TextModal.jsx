import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import ReactHtmlParser from 'react-html-parser'
import $ from 'jquery'

const TextModal = ({ handleHideModal, modalHTMLContent, largeModal }) => {
  const myModal = React.createRef()

  useEffect(() => {
    $(ReactDOM.findDOMNode(myModal.current)).modal('show')
    $(ReactDOM.findDOMNode(myModal.current)).on('hidden.bs.modal', handleHideModal)

    return () => {
      $(ReactDOM.findDOMNode(myModal.current)).modal('hide')
    }
  }, [])


  return (
    <div className="modal fade" id="modalLongTitle" tabIndex="-1" role="dialog" aria-labelledby="modalLongTitle" aria-hidden="true" ref={myModal}>
      <div className={`modal-dialog${(largeModal) ? ' modal-lg' : ''}`} role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalLongTitle">Instructions</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {ReactHtmlParser(modalHTMLContent)}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default TextModal
