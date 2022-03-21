import React from 'react';

const TimeOfDay = ({
  userMedicines,
  timeOfDay,
  medicines
}) => (
  <div className="time-of-day-box">
    <h4>{timeOfDay}</h4>
    {medicines.map(medicine => <li>{medicine}</li>)}
  </div>
);

export default TimeOfDay;