import React from 'react';
import Day from './Day.jsx';

// const initialState = {
//   userId: 123,
//   firstName: 'Trey',
//   lastName: 'Lewis',
//   email: 'treylewis@gmail.com',
//   userMedicines: [{medicineId: 1, medicineName: 'Sentret', medicineSchedule: {breakfast: true, lunch: false, dinner: false, beforeBed: true}}]
// };
const userMedicines = [{medicineId: 1, medicineName: 'Sentret', medicineSchedule: {breakfast: true, lunch: false, dinner: false, beforeBed: true}}]
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

let days=[]
const dayMaker = (userMedicines, day) => (
  <Day
    day={day}
    userMedicines={userMedicines}
  />
);

for (let i = 0; i < daysOfWeek.length; i++) {
    days.push(dayMaker(userMedicines, daysOfWeek[i]))
}

const Schedule = ({
  userMedicines,
}) => (
  <div className="ScheduleBox">
    <h2 id="week">This Week</h2>
    {days}
  </div>
)

export default Schedule;