import React from 'react';
import Day from './Day.jsx';

// const initialState = {
//   userId: 123,
//   firstName: 'Trey',
//   lastName: 'Lewis',
//   email: 'treylewis@gmail.com',
//   userMedicines: [{medicineId: 1, medicineName: 'Sentret', medicineSchedule: {breakfast: true, lunch: false, dinner: false, beforeBed: true}}]
// };

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// function creates day elements for display
const dayMaker = (userMedicines, day) => (
  <Day
    day={day}
    userMedicines={userMedicines}
  />
);

const Schedule = ({
  userMedicines,
  }) => {
  let days=[]; // array for day elements
  for (let i = 0; i < daysOfWeek.length; i++) {
    days.push(dayMaker(userMedicines, daysOfWeek[i]))
  }
  return (
    <div className="schedule-box">
      <div className="schedule-box-header">
        <h2>This Week</h2>
      </div>
      <div className="week-box">
        {days}
      </div>
    </div>
  )
}

export default Schedule;