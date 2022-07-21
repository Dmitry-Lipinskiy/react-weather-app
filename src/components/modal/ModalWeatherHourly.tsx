import React, { Dispatch, SetStateAction } from 'react';
import WeatherHourly from '../weather/WeatherHourly';

const ModalWeatherHourly = (
    {openWeatherHourlyModal, setOpenWeatherHourlyModal}: 
    {openWeatherHourlyModal: boolean, setOpenWeatherHourlyModal: Dispatch<SetStateAction<boolean>>}
  ) => {

  return (
    <div className={`modal ${openWeatherHourlyModal && 'd-block'}`}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Modal title</h5>
            <button type="button" 
              className="btn-close" 
              data-bs-dismiss="modal" 
              aria-label="Close"
              onClick={() => setOpenWeatherHourlyModal(false)}
            />
          </div>
          <div className="modal-body">
            <WeatherHourly />
          </div>
          <div className="modal-footer">
            <button type="button" 
              className="btn btn-secondary" 
              data-bs-dismiss="modal" 
              onClick={() => setOpenWeatherHourlyModal(false)}
            >Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalWeatherHourly;