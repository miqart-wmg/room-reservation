import React from 'react';
import { ReactComponent as EditIcon } from "../../images/edit.svg";
import { ReactComponent as RemoveIcon } from "../../images/remove.svg";

const DataTable = ({ type, tableNames, items, remove, update }) => {
  return (
    <table id="customers">
      <thead>
        <tr>
          {tableNames.map((name, index) => {
            return <th key={index}>{name}</th>
          })}
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => {
          return (
            <tr key={item.id}>
              {
              [type === "rooms" &&
                [<td key="room-id">{index + 1}</td>,
                <td key="room-bookedAt">{item.bookedAt}</td>,
                <td key="room-floor">{item.floor}</td>,
                <td key="room-beds">{item.beds}</td>,
                <td key="room-balcony">{item.balcony ? "Yes" : "No"}</td>,
                <td key="room-roomId">{item.roomId}</td>],
              type === "bookings" &&
                [<td key="booking-id">{index + 1}</td>,
                <td key="booking-personName">{item.personName}</td>,
                <td key="booking-roomNumber">{item.roomNumber}</td>,
                <td key="booking-bookedAt">{item.bookedAt}</td>,
                <td key="booking-personId">{item.personId}</td>],
              type === "visitors" &&
                [<td key="visitors-id">{index + 1}</td>,
                <td key="visitors-personName">{item.personName}</td>,
                <td key="visitors-personId">{item.personId}</td>,
                <td key="visitors-createdDate">{item.createdDate}</td>,
                <td key="visitors-cardNumber">{item.cardNumber}</td>]]
              }
              <td>
                <button className="deledit-b edit-b" onClick={() => update(item)} >
                  <EditIcon className="svg-edit" />
                </button>
              </td>
              <td>
                <button className="deledit-b del-b" onClick={() => remove(item.id)} >
                  <RemoveIcon className="svg-remove" />
                </button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default DataTable;
