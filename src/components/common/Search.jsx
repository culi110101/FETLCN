import React from 'react'

const Search = () => {
    return (
        <div className='transform-for-serch p-2'>
            <div className='search-component container'>
                <div className='d-flex justify-content-between'>
                    <div className='search-component__input'>
                        <input type="text" placeholder='Type Job title, keywords' />
                    </div>
                    <button className='search-component__btn'>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Search
