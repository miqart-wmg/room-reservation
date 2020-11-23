import React from 'react';
import { ReactComponent as EditIcon } from "../../images/edit.svg";
import { ReactComponent as RemoveIcon } from "../../images/remove.svg";

const DataTable = ({ tableNames, items, remove, update }) => {
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
          console.log(item);
          return (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.bookedAt}</td>
              <td>{item.floor}</td>
              <td>{item.beds}</td>
              <td>{item.balcony ? "Yes" : "No"}</td>
              <td>{item.roomId}</td>
              <td>
                <button className="deledit-b edit-b" onClick={() => update(item)} >
                  <EditIcon className="svg-edit" />
                </button>
              </td>
              <td>
                <button className="deledit-b del-b" onClick={() => remove(item.id)} ><img src="" alt="" />
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
