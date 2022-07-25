import React, { useState } from 'react';

const ErrorModal = () => {

  const [openErrorModal, setOpenErrorModal] = useState(false);

  return (
    <div className={`modal ${openErrorModal && 'd-block'}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" 
              className="btn-close" 
              data-bs-dismiss="modal" 
              aria-label="Close"
              onClick={() => setOpenErrorModal(false)}
            />
          </div>
          <div className="modal-body">
            <div>Hello!</div>
            {/* <div className="error-header">{error.response.data.cod}</div>
            <div className="error-text">{error.response.data.message}</div> */}
          </div>
          <div className="modal-footer">
            <button type="button" 
              className="btn btn-secondary" 
              data-bs-dismiss="modal" 
              onClick={() => setOpenErrorModal(false)}
            >Close</button>
          </div>
        </div>
      </div>
    </div>
  )

}

export default ErrorModal;