import React, { Dispatch, SetStateAction } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelectors';

const ErrorModal = (
  {openErrorModal, setOpenErrorModal}: 
  {openErrorModal: boolean, setOpenErrorModal: Dispatch<SetStateAction<boolean>>}
) => {

  // const {err} = useTypedSelector(state => state.err);

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
            {/* <div className="error-header">{err.response.data.cod}</div>
            <div className="error-text">{err.response.data.message}</div> */}
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