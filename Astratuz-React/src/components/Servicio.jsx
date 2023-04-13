import React from 'react';
import './Status.css';

function Servicio({texto, status}) {
  return (
    <div className={`ContentService services-h4 ${(status == 3) ? "BorderGreen" : (status == 1)?"BorderRed": "BorderYellow"}`}>
      <label>{texto}</label>
      <div className={`Circle ${(status == 3) ? "green" : (status == 1)?"red": "yellow"}`}></div>
    </div>
    
  );    
}

export default Servicio;