import React from 'react';

// individual medicine element for delete medicine list
const Medicine = ({
    medicineName,
    removeMedicine,
    medicineId,
}) => (
  <div className="medicine-list-item">
    <div className='remove-medicine-button add-medicine-button'>
      <button onClick={() => {removeMedicine(medicineId)}}>Remove</button>
    </div>
    <div>
      {medicineName}
    </div>
  </div>
);

export default Medicine;