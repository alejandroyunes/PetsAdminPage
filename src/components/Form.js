import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'

export default function Form({createAppointment}) {

  const [ error, setError ] = useState(false);
  const [ appointment, updateAppointment ] = useState({
    name: '',
    owner: '',
    date: '',
    checkIn: '',
    symptoms: '',
  });

  const { name, owner, date, checkIn, symptoms } = appointment;

  const  updateAppointmentState = e => {
      updateAppointment({
        ...appointment,
        [e.target.name] : e.target.value
      })
    }

    const onSubmitAppointment = e => {
      e.preventDefault();
      if(name.trim() === '' || 
        owner.trim() === '' ||
        date.trim() === '' ||
        checkIn.trim() === '' ||
        symptoms.trim() === ''){
        setError(true);
        return;
      }
      setError(false);
      appointment.id = uuidv4();
      createAppointment(appointment);
      updateAppointment({
        name: '',
        owner: '',
        date: '',
        checkIn: '',
        symptoms: '',
      })
      
    }

  return (
    <div>
        <div>
        <form onSubmit={ onSubmitAppointment }>
          <label>Name: </label>
          <input
            className="u-full-width"
            type="text"
            name="name"
            placeholder="Pets Name"
            onChange={  updateAppointmentState }
            value={name}
          />
          <label> Owner Name: </label>
          <input
            className="u-full-width"
            type="text"
            name="owner"
            placeholder="Owner Name"
            onChange={  updateAppointmentState }
            value={owner}
          />
          <label>Date: </label>
          <input
            className="u-full-width"
            type="date"
            name="date"
            placeholder="Date"
            onChange={  updateAppointmentState }
            value={date}
          />
          <label>CheckIn: </label>
          <input
            className="u-full-width"
            type="time"
            name="checkIn"
            placeholder="checkIn"
            onChange={  updateAppointmentState }
            value={checkIn}
          />
          <label>Symptoms: </label>
          <textarea
            className="u-full-width"
            type="text"
            name="symptoms"
            placeholder="symptoms"
            onChange={  updateAppointmentState }
            value={symptoms}
          />
          <button
            type="submit"
            className="u-full-width button add">
            Add Appointment
          </button>
        </form>
      </div>
    </div>
  )
}





Form.propTypes = {
  createAppointment: PropTypes.func.isRequired
}
