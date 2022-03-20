import React from 'react';

const Navbar = ({
  addMedicine,
  showSchedule,
  firstName
}) => (
  <div className="navbar">
    <div className="navbar-buttons">
      <a href="/home">Home</a>
      <a onClick={() => { showSchedule() }}>My Schedule</a>
      <a onClick={() => { addMedicine() }}>Add Medications</a>
    </div>
    <div className="profile">
      <p>Hi, {firstName}</p>
    </div>
  </div>
);

export default Navbar;