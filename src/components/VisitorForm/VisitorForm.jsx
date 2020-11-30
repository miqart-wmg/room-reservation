import React, { useState, useEffect } from 'react';

const initialState = { personName: "", personId: "", cardNumber: "", createdDate: "" };

const VisitorForm = ({ create, edit, cancelEdit, data }) => {
  const [template, setTemplate] = useState(initialState);

  useEffect(() => {
    setTemplate(data.initialState);
  }, [data]);

  const onHandleSubmit = (template) => {
    const { personName, personId, cardNumber, createdDate } = template;
    if (personName && personId && cardNumber && createdDate) {
      create({ ...template, createdDate: new Date(createdDate).toLocaleDateString('en-GB') });
      setTemplate(initialState);
    }
  }

  const onHandleChange = (e) => {
    const { name, value } = e.target
    setTemplate({ ...template, [name]: value })
  }

  return (
    <div className="room-form">
      <h2>Add New Person</h2>
      <label htmlFor="personName">Person Name</label>
      <input type="text" onChange={onHandleChange} value={template.personName} name="personName" />
      <label htmlFor="personId">Person ID</label>
      <input type="text" onChange={onHandleChange} value={template.personId} name="personId" />
      <label htmlFor="cardNumber">Card Number</label>
      <input type="text" onChange={onHandleChange} value={template.cardNumber} name="cardNumber" />
      <label htmlFor="createdDate">Date</label>
      <input type="date" onChange={onHandleChange} value={template.createdDate} name="createdDate" />
      {data.editing ?
        <div className="btn-group">
          <button className="create-b" onClick={cancelEdit}>Cancel</button>
          <button className="create-b" onClick={() => {edit(template); cancelEdit()}}>Save</button>
        </div>
        :
        <button className="create-b" onClick={() => onHandleSubmit(template)}>Save</button>}
    </div>
  )
}

export default VisitorForm;
