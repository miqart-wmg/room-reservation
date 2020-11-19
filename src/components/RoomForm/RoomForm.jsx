import React, { useState, useEffect } from 'react';

const initialState = { floor: "", beds: "", balcony: false, roomId: "", bookedAt: "" };

const RoomsForm = ({ create, edit, data, cancelEdit }) => {
  const [template, setTemplate] = useState(initialState);

  const onHandleSubmit = (template) => {
    const { floor, beds, roomId } = template;
    if (floor && beds && roomId) {
      create({ ...template, bookedAt: (new Date()).toLocaleDateString('en-GB') });
      setTemplate(initialState);
    }
  }
 
  useEffect(() => {
    setTemplate(data.initialState);
  }, [data]);

  const onHandleChange = (e) => {
    const { name, value } = e.target
    setTemplate({ ...template, [name]: value })
  }

  const checkboxChange = (e) => {
    setTemplate({ ...template, balcony: e.target.checked })
  }

  return (
    <div className="room-form">
      <h2>Add New Room</h2>
      <label htmlFor="floor">Floor</label>
      <input type="number" id="floor" onChange={onHandleChange} value={template.floor} name="floor" />
      <label htmlFor="beds">Beds</label>
      <input type="number" id="beds" onChange={onHandleChange} value={template.beds} name="beds" />
      <div className="checkboxDiv" >
        <label htmlFor="balcony">Balcony</label>
        <input onChange={checkboxChange} type="checkbox" />
      </div>
      <label htmlFor="roomId">Room Number</label>
      <input type="number" id="roomId" onChange={onHandleChange} value={template.roomId} name="roomId" />
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

export default RoomsForm;
