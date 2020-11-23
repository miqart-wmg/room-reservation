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
      <h2>New Booking</h2>
      <label htmlFor="floor">Person Name</label>
      <select onChange={onHandleChange} value={template.personName} name="personName">
        <option value="person">Person</option>
      </select>
      <label htmlFor="beds">Person ID</label>
      <input type="number" id="beds" onChange={onHandleChange} value={template.roomNumber} name="beds" />
      <label htmlFor="beds">Room ID</label>
      <select onChange={onHandleChange} value={template.roomNumber} name="personName">
        <option value="person">Room ID</option>
      </select>
      <label htmlFor="roomId">Date</label>
      <input type="number" id="roomId" onChange={onHandleChange} value={template.roomId} name="roomId" />
      <button className="create-b" onClick={() => onHandleSubmit(template)}>Book</button>
    </div>
  )
}

export default BookingForm;
