import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Appointment from "./components/Appointment";
import Logo from './images/pet-care.svg'


export default function App() {

  let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
  if(!initialAppointments){
    initialAppointments = []
  }
  
  
  useEffect( () => {
    if(initialAppointments){
      localStorage.setItem('appointments', JSON.stringify(appointments))
    }else{
      localStorage.setItem('appointments', JSON.stringify([]))
    }
  })


  const [appointments, setAppoinment] = useState(initialAppointments);

  const createAppointment = appointment => {
    setAppoinment([
      ...appointments,
      appointment
    ])
  }

  const deleteAppointment = id => {
     const appointment = appointments.filter((appointment)=> appointment.id !== id)
     setAppoinment(appointment)
  }

  const title = appointments.length === 0? 'No Appointments' : 'Appointments'


  return (
    <>
    <div style={{ display: 'flex',alignItems: 'center', justifyContent:'center'}}>
    <div >
    <img src={Logo}/>
    </div>
    <div style={{paddingTop: '5px'}}>
    <h1 >Patient Admin</h1>
    </div>
  
    </div>
    
    
      <div className="container">
        <div className="row">
          <div className="one-half column">
          <h4> Patient's Data</h4>
            <Form 
            createAppointment={createAppointment}
            />
          </div>
          <div className="one-half column">
          <h4> {title}</h4>
          {
            appointments.map((appointment) =>(
              <Appointment 
              appointment={appointment}
              key={appointment.id}
              deleteAppointment={deleteAppointment}
            />
            ))
          }
            
          </div>
        </div>
      </div>
      
    </>
  );
}





//Icons made by <a href="https://www.flaticon.com/authors/photo3idea-studio" title="photo3idea_studio">photo3idea_studio</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>








