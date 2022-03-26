import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const Search = (props) => {
    return (
        <>
            <div className='search_Container'>
                <div className='search'>
                    <SearchIcon className='magnified' />
                    <input type="text" placeholder='Search or start a new chat' onChange={(e) => { return (props.updateText(e.target.value)); }} />
                </div>
            </div>

        </>
    )
}
export default Search;