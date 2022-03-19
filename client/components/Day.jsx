import React from 'react';
import TimeOfDay from './TimeOfDay.jsx';

const timeOfDayMaker = (userMedicines, time) => (
  <TimeOfDay
    timeOfDay={time}
  />
);

const Day = ({
    day,
    userMedicines
}) => (
  <div className="dayBox">
    <h3>{day}</h3>
    {timeOfDayMaker(userMedicines, 'Breakfast')}
  </div>
);

export default Day;