import React from 'react'
import './Search.css'

const Search=({ searchValue, setSearchValue })=> {

return (
    <div className='search' >
    <form className="search__Form">
       
            <input className='search__Input'
            value ={searchValue} 
            onChange={(e) => setSearchValue(e.target.value)}
            type='text'
            placeholder='Search Champion'
        
           />       
    </form>    
    </div>  
    )
}

export default Search
