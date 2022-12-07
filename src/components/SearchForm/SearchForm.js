import React, { useState } from 'react'

const SearchForm = ({ queryStoreItems }) => {
    const [searchValue, setSearchValue] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if(searchValue) {
            queryStoreItems(searchValue)
            clearInputs()
        } else {
            setError('Please Enter an Item')
        }
    }

    const clearInputs = () => {
        setSearchValue('')
        setError('')
    }

    return(
        <div>
            <h3>Find Grocery Items: </h3>
            <input 
                type='text'
                placeholder='Enter Grocery Item'
                name='groceryItem'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button onClick={(event) => handleSubmit(event)}>Search</button>
            {error && <h4 className='error-message'>{error}</h4>}
        </div>
    )
}

export default SearchForm