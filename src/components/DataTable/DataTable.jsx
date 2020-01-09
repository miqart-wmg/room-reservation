import React from 'react';
import { ReactComponent as EditIcon } from "../../images/edit.svg";
import { ReactComponent as RemoveIcon } from "../../images/remove.svg";

const DataTable = ({ rooms, remove, update }) => {
  return (
    <table id="customers">
      <thead>
        <tr>
          <th>#ID</th>
          <th>Booked</th>
          <th>Floor</th>
          <th>Beds</th>
          <th>Balcony</th>
          <th>Number</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {rooms.map((room, index) => {
          return (
            <tr key={room.id}>
              <td>{index + 1}</td>
              <td>{room.bookedAt}</td>
              <td>{room.floor}</td>
              <td>{room.beds}</td>
              <td>{room.balcony ? "Yes" : "No"}</td>
              <td>{room.roomId}</td>
              <td>
                <button className="deledit-b edit-b" onClick={() => update({ floor: room.floor, beds: room.beds, balcony: room.balcony, roomId: room.roomId })} >
                  <EditIcon className="svg-edit" />
                </button>
              </td>
              <td>
                <button className="deledit-b del-b" onClick={() => remove(room.id)} ><img src="" alt="" />
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
