import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const initialState = { personName: "", roomNumber: "", roomId: "", personId: "", bookedAt: "" };

const BookingForm = ({ create, edit, cancelEdit, data, visitors, rooms }) => {
  const [template, setTemplate] = useState(initialState);

  useEffect(() => {
    setTemplate(data.initialState);
  }, [data]);

  const onHandleSubmit = (template) => {
    const { personName, personId, roomNumber, bookedAt } = template;
    if (personName && personId && roomNumber && bookedAt) {
      create({ ...template, bookedAt: new Date(bookedAt).toLocaleDateString('en-GB') });
      setTemplate(initialState);
    }
  }

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    let { roomId } = template;
    if(name === "roomNumber") {
      roomId = rooms.find(item => item.roomId === parseInt(value)).id
    }
    setTemplate({ ...template, [name]: value, roomId: roomId });
  }

  return (
    <div className="room-form">
      <h2>New Booking</h2>
      <label htmlFor="personName">Person Name</label>
      <select onChange={onHandleChange} value={template.personName || "default"} name="personName">
      <option disabled value="default"> -- select person name -- </option>
        {visitors.map((item, index) => {
          return <option key={`option-${index}`} value={item.personName}>{item.personName}</option>
        })}
      </select>
      <label htmlFor="personId">Person ID</label>
      <select onChange={onHandleChange} value={template.personId || "default"} name="personId">
      <option disabled value="default"> -- select person id -- </option>
        {visitors.map((item, index) => {
          return <option key={`option-${index}`} value={item.personId}>{item.personId}</option>
        })}
      </select>
      <label htmlFor="roomNumber">Room ID</label>
      <select onChange={onHandleChange} value={template.roomNumber || "default"} name="roomNumber">
      <option disabled value="default"> -- select room id -- </option>
        {rooms.map((item, index) => {
          return <option key={`option-${index}`} value={item.roomId}>{item.roomId}</option>
        })}
      </select>
      <label htmlFor="bookedAt">Date</label>
      <input type="date" onChange={onHandleChange} value={template.bookedAt} name="bookedAt" />
      {data.editing ?
        <div className="btn-group">
          <button className="create-b" onClick={cancelEdit}>Cancel</button>
          <button className="create-b" onClick={() => {edit(template); cancelEdit()}}>Save</button>
        </div>
        :
        <button className="create-b" onClick={() => onHandleSubmit(template)}>Create</button>}
    </div>
  )
}

const mapStateToProps = (state) => {
  const {
    visitors: { visitors },
    rooms: { rooms }
  } = state;
  return {
    visitors,
    rooms
  }
}

export default connect(
  mapStateToProps
)(BookingForm);

