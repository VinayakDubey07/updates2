import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "./Calendar.css"
import Button from './Button';
import Timepicker from './Timepicker';
const Calendar1 = () => {
 const [value, onChange] = useState(new Date());

 return (
  <div className="Cal">
    <a className="text1">Pick Date</a>
    <Calendar onChange={onChange} value={value} />
    <Timepicker/>
    <Button/>
  </div>
  
  
 );
};



export default Calendar1;
