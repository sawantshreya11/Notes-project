import React from 'react';
import {MdSearch} from 'react-icons/md';
const Search = ({ handleSearchNote }) => {
  return (
  <div className="search">
    <MdSearch className="search-icons" size="2.2em" />
      <input onChange={(event)=>
        handleSearchNote(event.target.value)
      }
        type="text" placeholder="Type to search" className='search-bar'></input>
     </div>
     );
};
export default Search;