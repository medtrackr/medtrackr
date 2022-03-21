import React from 'react';

const Navbar = ({
  addMedicine,
  showSchedule,
  firstName
}) => (
  <div className="navbar">
    <div className="navbar-buttons">
      <div className="navbar-single-button">
        <a href="/home"> 
          <div className="menu-icons">
            <svg color="primary" viewBox="0 0 24 21" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px"><path d="M23.767 9.967L20.25 6.919v-4.75c0-.37-.3-.669-.67-.669h-1.66c-.37 0-.67.3-.67.67v2.148L12.47.174a.718.718 0 0 0-.938 0L.234 9.967a.665.665 0 0 0-.054.961l.784.846c.259.28.703.304.992.053L12 3.12l10.044 8.707c.29.25.733.227.992-.053l.784-.846a.666.666 0 0 0-.053-.961zM12 4.411l9 7.8v6.54c0 .828-.67 1.5-1.5 1.5h-5.25v-6.36a.39.39 0 0 0-.39-.39h-3.72a.39.39 0 0 0-.39.39v6.36H4.5c-.83 0-1.5-.672-1.5-1.5v-6.539l9-7.801z" fill-rule="evenodd"></path></svg>
          </div>
          <div className="menu-text">
            <h3>Home</h3>
          </div>
        </a>
      </div>
      <div className="navbar-single-button">
        <a onClick={() => { showSchedule() }}>
          <div className="menu-icons">
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="30px" height="30px"><path d="M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32zM424 688c0 4.4-3.6 8-8 8H232c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48zm0-136c0 4.4-3.6 8-8 8H232c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48zm374.5-91.3l-165 228.7a15.9 15.9 0 0 1-25.8 0L493.5 531.2c-3.8-5.3 0-12.7 6.5-12.7h54.9c5.1 0 9.9 2.5 12.9 6.6l52.8 73.1 103.7-143.7c3-4.2 7.8-6.6 12.9-6.6H792c6.5.1 10.3 7.5 6.5 12.8z"/></svg>
          </div>
          <div className="menu-text">
            <h3>My Schedule</h3>
          </div>
        </a>
      </div>
      <div className="navbar-single-button">
        <a onClick={() => { addMedicine() }}>
          <div className="menu-icons">
          <svg viewBox="0 0 512 512"  xmlns="http://www.w3.org/2000/svg"  width="24px" height="24px"><path d="m465.6,294.9l-108.7-108.8-170.8,170.8 108.8,108.8c22.8,22.8 93.7,68 170.8,0 49.8-44.1 47-123.7-0.1-170.8z"/><path d="M217.7,46.7c-22.8-22.8-93.7-68-170.8,0C-3,90.7-0.2,170.3,46.9,217.4l108.8,108.8l170.8-170.8L217.7,46.7z"/></svg>
          </div>
          <div className="menu-text">
            <h3>Add Medications</h3>
          </div>
        </a>
      </div>
    </div>
    <div className="profile">
      <p>Hi, {firstName}</p>
    </div>
  </div>
);

export default Navbar;