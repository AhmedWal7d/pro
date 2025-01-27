import React, { useState } from "react";
function TableRow(props) {
  
  return (
    <tr>
      <th scope="row" key={props.id}>
        {props.id}
      </th>
      <td>{props.name}</td>
      <td>{props.amount}</td>
      <td>{props.date}</td>
      <td>
        <button
          className="btn btn-info"
          btnid={props.btnId}
          onClick={props.fun}
        >
           View
        </button>
      </td>
    </tr>
    
  );
}

export default TableRow;
