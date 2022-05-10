import React from 'react'
import {FaSearch} from 'react-icons/fa'
const Search = ({handleSearchNote}) =>{
    return(

        <div className = "search">
            <FaSearch className = "search-icons" size = "1.3em"/>
            <input type = "text" placeholder = "type to search..." onChange = {(e) => handleSearchNote(e.target.value)} />
        </div>
    )
}

export default Search