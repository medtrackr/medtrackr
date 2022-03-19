import React from 'react';
import TimeOfDay from './TimeOfDay.jsx';
const userMedicines = [{medicineId: 1, medicineName: 'Sentret', medicineSchedule: {breakfast: true, lunch: false, dinner: false, beforeBed: true}}]

const timesOfDay = ['Breakfast', 'Lunch', 'Dinner', 'Before Bed'];
let currTimeOfDay = []

const breakfast = [];
const lunch = [];
const dinner = [];
const beforeBed = [];

userMedicines.forEach(medicine => {
  if (medicine.medicineSchedule.breakfast === true) breakfast.push(medicine.medicineName);
  if (medicine.medicineSchedule.lunch === true) lunch.push(medicine.medicineName);
  if (medicine.medicineSchedule.dinner === true) dinner.push(medicine.medicineName);
  if (medicine.medicineSchedule.beforeBed === true) beforeBed.push(medicine.medicineName);
})

const medicines = [breakfast, lunch, dinner, beforeBed];

const timeOfDayMaker = (userMedicines, time, medicines) => (
  <TimeOfDay
    userMedicines={userMedicines}
    timeOfDay={time}
    medicines={medicines}
  />
);

for (let i = 0; i < timesOfDay.length; i++) {
    currTimeOfDay.push(timeOfDayMaker(userMedicines, timesOfDay[i], medicines[i]))
}

const Day = ({
    day,
    userMedicines
}) => (
  <div className="dayBox">
    <h3>{day}</h3>
    {currTimeOfDay}
  </div>
);

export default Day;