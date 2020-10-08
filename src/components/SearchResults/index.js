import React from "react";
import "./style.css";
import dateformat from "dateformat";

function SearchResults(props) {
  return (
    <table className="table table-striped table table-striped table-dark">
      <thead>
        <tr>
          <th scope="col">No.</th>
          <th scope="col">Name</th>
          <th scope="col">Image</th>
          <th scope="col">DOB</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((emp, index)=>(
          <tr key={emp.dob.date}>
            <th scope="row">{index+1}</th>
            <td>
              {emp.name.first} {emp.name.last}
            </td>
            <td>
              <img src={emp.picture.medium} alt="employee img"></img>
            </td>
            <td>
              {dateformat(emp.dob.date,"mm-dd-yyyy")}
            </td>
            <td>
              {emp.phone}
            </td>
            <td>
              {emp.email}
            </td>
          </tr>
        ))};
      </tbody>
    </table>
  );
}

export default SearchResults;