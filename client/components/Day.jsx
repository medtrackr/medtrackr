import React from 'react';
import TimeOfDay from './TimeOfDay.jsx';

const timesOfDay = ['Breakfast', 'Lunch', 'Dinner', 'Before Bed'];

const timeOfDayMaker = (userMedicines, time, medicines) => (
  <TimeOfDay
    userMedicines={userMedicines}
    timeOfDay={time}
    medicines={medicines}
  />
);

const Day = ({
  day,
  userMedicines
  }) => {

  let currTimeOfDay = []
  const breakfast = [];
  const lunch = [];
  const dinner = [];
  const beforeBed = [];
  const medicines = [breakfast, lunch, dinner, beforeBed];

  userMedicines.forEach(medicine => {
    if (medicine.medicineSchedule.breakfast === true) breakfast.push(medicine.medicineName);
    if (medicine.medicineSchedule.lunch === true) lunch.push(medicine.medicineName);
    if (medicine.medicineSchedule.dinner === true) dinner.push(medicine.medicineName);
    if (medicine.medicineSchedule.beforeBed === true) beforeBed.push(medicine.medicineName);
  })

  for (let i = 0; i < timesOfDay.length; i++) {
    currTimeOfDay.push(timeOfDayMaker(userMedicines, timesOfDay[i], medicines[i]))
  }

  return (
    <div className="day-box">
      <h3>{day}</h3>
      {currTimeOfDay}
    </div>
  )
}

export default Day;