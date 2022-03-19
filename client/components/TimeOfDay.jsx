import React from 'react';

const userMedicines = [{medicineId: 1, medicineName: 'Sentret', medicineSchedule: {breakfast: true, lunch: false, dinner: false, beforeBed: true}}]



const TimeOfDay = ({
  userMedicines,
  timeOfDay,
  medicines
}) => (
  <div className="timeOfDayBox">
    <h4>{timeOfDay}</h4>
    <div>{medicines}</div>
  </div>
);

export default TimeOfDay;