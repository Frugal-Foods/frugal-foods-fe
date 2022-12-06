import React, { useState } from 'react'
import { getStores } from '../../hooks/useStores'

const ZipcodeSearch = () => {
    const [searchValue, setSearchValue] = useState('')
    const [stores, setStores] = useState([])
    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if(searchValue) {
        const { data } = getStores(searchValue)
        setStores(data.stores)
        clearInputs();
        } else {
            setError('Enter a 5 digit zipcode')
        }
      }

    const clearInputs = () => {
        setSearchValue('')
        setError('')
    }

    return (
        <div>
            <h3>Find Grocery Stores Near You: </h3>
            <input 
                type='text'
                placeholder='Enter zipcode'
                name='zipcode'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button onClick={(event) => handleSubmit(event)}>Find Stores</button>
            {error && <h4 className="error-message">{error}</h4>}
            <section className='store-container'>{stores.map(store => {
                return <div>
                    <h2>Store Name: {store.name}</h2>
                    <h3>Store Address: {store.address}</h3>
                    </div>
            })}</section>
            {/* // {data.stores.length && <button></button>} */}
        </div>
    )
}

export default ZipcodeSearch