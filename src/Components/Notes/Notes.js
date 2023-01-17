import React, { useState } from 'react'
import Addnote from './Addnote'
import Individualnote from './Individualnote'
import "./Notes.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



function Notes() {
  const [search, setSearch] = useState('');

  return (
    <div className='Note-app'>
      <div className="main-heading-div">
        <h2 className='heading'>Notes</h2>
        <button className='btn'>Toggle Mode</button>
      </div>
      <div className="search-box">
        <FontAwesomeIcon icon={faSearch} />
        <input type="search" name="search" id="search" className='search' placeholder='Type to search' autoComplete='off' value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="content-section">
        <Individualnote query={search} />
        <Addnote />
      </div>
      <footer className='footer'>
        © Ritik Mishra | 2023
      </footer>
    </div>
  )
}

export default Notes