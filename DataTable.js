// //Data Table
// Given a list of users, build a users data table that displays users in a paginated format.

// Requirements
// Table requirements
// The users data table should display the following columns: Id, Name, Age, Occupation
// Each row in the table represents a single user
// Pagination requirements
// The pagination controls should allow the user to navigate to previous and next pages
// The pagination controls should display the current page number and the total number of pages
// The table should update dynamically when the user navigates to a different page
// Provide an option to select the number of users displayed per page (e.g., 5, 10, 20)

// https://www.greatfrontend.com/questions/user-interface/data-table/react?format=user-interface

import { useState,useEffect } from 'react';
import users from './data/users';

export default function DataTable() {
  const [message, setMessage] = useState('Data Table');
  const [itemsPerPage,setItemsPerPage] = useState(5);
  const [currentPage,setCurrentPage] = useState(1);
  const lastIndex = currentPage*itemsPerPage;
  const firstIndex = lastIndex-itemsPerPage;
  const filteredData = users.slice(firstIndex,lastIndex);
  const totalPage = Math.ceil(users.length/itemsPerPage);
    useEffect(()=>{
        setCurrentPage(1)
    },[itemsPerPage])
   return (
    <div>
      <h1>{message}</h1>
      <table>
        <thead>
          <tr>
            {[
              { label: 'ID', key: 'id' },
              { label: 'Name', key: 'name' },
              { label: 'Age', key: 'age' },
              { label: 'Occupation', key: 'occupation' },
            ].map(({ label, key }) => (
              <th key={key}>{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map(({ id, name, age, occupation }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{display:"flex",gap:"8px",marginTop:"10px",borderTop:"1px solid black",paddingTop:"10px"}}>
      <label>
        Items per page:{" "}
        <select
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
      </label>
      <button disabled={currentPage === 1} onClick={()=>{setCurrentPage(currentPage-1)}}>
        prev
      </button>
      <div>
          page {currentPage} of {totalPage}
      </div>
      <button disabled={currentPage === totalPage} onClick={()=>{setCurrentPage(currentPage+1)}}>
          next
      </button>
      </div>
    </div>
  );
}
