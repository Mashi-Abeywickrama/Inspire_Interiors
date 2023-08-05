import { MDBCol, MDBIcon } from "mdbreact";
import React, { useState } from "react";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState("");

    return (
      <MDBCol >
        <form className="form-inline d-flex align-items-center gap-3 rounded" >
          {/* Search Field */}
        <div className="d-flex rounded align-items-center justify-content-between px-2 w-75" style={{ background: 'rgba(3, 92, 148, 0.22)' }}>
          <MDBIcon icon="search" />
          <input
            className="search form-control form-control-sm flex-grow-1"
            style={{ background: 'none', border: 'none', outline: 'none', boxShadow: 'none' }}
            type="text"
            placeholder="Search"
            aria-label="Search"
            value={searchValue}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </div>
          
          {/* Filter Field */}
         
        <div className="d-flex bg-light rounded justify-content-center align-self-stretch align-items-center px-2 w-25" style={{ border: '1px solid #C2CFDE' }}>
          <MDBIcon icon="filter" />
          <span className="ml-2">Filter</span>
        </div>
        </form>
        
      </MDBCol>
      
    );
  }
 
  
  export default SearchPage;