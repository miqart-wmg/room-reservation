import React, { useState } from 'react';

const initialState = { personName: "", roomNumber: 0, roomId: "", personId: "", bookedAt: "", id: "" };

const VisitorForm = ({ create }) => {
  // const [template, setTemplate] = useState(initialState);

  // const onHandleSubmit = (template) => {
  //   const { personName, roomNumber, roomId } = template;
  //   if (personName && roomNumber && roomId) {
  //     create({ ...template, bookedAt: (new Date()).toLocaleDateString('en-GB') });
  //     setTemplate(initialState);
  //   }
  // }

  // const onHandleChange = (e) => {
  //   const { name, value } = e.target
  //   setTemplate({ ...template, [name]: value })
  // }

  return (
    <div className="room-form">
      {/* <h2>Add New Person</h2>
      <label htmlFor="personName">Person Name</label>
      <input type="text" onChange={onHandleChange} value={template.personName} name="personName" />
      <label htmlFor="personId">Person ID</label>
      <input type="text" onChange={onHandleChange} value={template.personId} name="personId" />
      <label htmlFor="cardNumber">Card Number</label>
      <input type="text" onChange={onHandleChange} value={template.cardNumber} name="cardNumber" />
      <label htmlFor="createdDate">Date</label>
      <input type="number" onChange={onHandleChange} value={template.createdDate} name="createdDate" />
      <button className="create-b" onClick={() => onHandleSubmit(template)}>Save</button> */}
    </div>
  )
}

export default VisitorForm;
