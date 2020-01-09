import React, { useState } from 'react';

const initialState = { personName: "", roomNumber: 0, roomId: "", personId: "", bookedAt: "", id: "" };

const BookingForm = ({ create }) => {
  const [template, setTemplate] = useState(initialState);

  const onHandleSubmit = (template) => {
    const { personName, roomNumber, roomId } = template;
    if (personName && roomNumber && roomId) {
      create({ ...template, bookedAt: (new Date()).toLocaleDateString('en-GB') });
      setTemplate(initialState);
    }
  }

  const onHandleChange = (e) => {
    const { name, value } = e.target
    setTemplate({ ...template, [name]: value })
  }

  return (
    <div className="room-form">
      <h2>Add New Room</h2>
      <label htmlFor="floor">Floor</label>
      <input type="number" id="floor" onChange={onHandleChange} value={template.personName} name="floor" />
      <label htmlFor="beds">Beds</label>
      <input type="number" id="beds" onChange={onHandleChange} value={template.roomNumber} name="beds" />
      <label className="checkbox-container">Balcony
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
      <label htmlFor="roomId">Room Number</label>
      <input type="number" id="roomId" onChange={onHandleChange} value={template.roomId} name="roomId" />
      <button className="create-b" onClick={() => onHandleSubmit(template)}>Create</button>
    </div>
  )
}

export default BookingForm;
