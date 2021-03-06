import React from "react";
import PropTypes from "prop-types";

const Appointment = ({ appointment, deleteAppointment }) => (
    <>
<div className="Appointment">
    <p>Pet: <span>{appointment.name}</span></p>
    <p>Owner: <span>{appointment.owner}</span></p>
    <p>Date: <span>{appointment.date}</span></p>
    <p>Check-in: <span>{appointment.checkIn}</span></p>
    <p>Symptoms: <span>{appointment.symptoms}</span></p>
    <button
    className="button delete -u-full-width"
    onClick={ () => deleteAppointment(appointment.id)} >Delete</button>
    </div>
    
    </>
);

export default Appointment;


Appointment.propTypes = {
    appointment: PropTypes.object.isRequired,
    deleteAppointment: PropTypes.func.isRequired
}

