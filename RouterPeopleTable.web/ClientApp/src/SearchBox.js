import React from 'react'

function SearchBox(props) {

    const { onSearchTextChange, clearSearchClick, searchText } = props

    return (
        <div className='col-md-8 col-md-offset-2'>
            <input type="text" className="form-control col-md-4" placeholder="SearchText" onChange={onSearchTextChange} value={searchText} />
            <button className='btn btn-primary' onClick={clearSearchClick}>Clear Search</button>
        </div>
    )
}

export default SearchBox