import React, {useState} from 'react'
import { useStores } from '../../hooks/useStores'

const ZipcodeSearch = () => {
    const [searchValue, setSearchValue] = useState('')
    // const [stores, setStores] = useState([])
    const { data, loading, error } = useStores(searchValue)
    // OR? const { data, loading, error } = useStores('64693')
    console.log({data, loading, error})
    // should this go in the submit function bc that's where we want this call to happen, once Find Stores button is clicked the call gets made stores should populate
    // we need to capture the search value (we are doing this currently)
        // that searchValue will inform what stores populate 
    
    const handleSubmit = (event) => {
        event.preventDefault()
        // setStores(data.stores)
        // const newZipcode = {
        //   searchValue
        // }
        // this.props.addUrl(newUrl)
        // the stores are displaying right now as soon as a matching zipcode is typed in, no need to click Find Stores
        // if i remember correctly we also need to POST the user? so that any stores selected becomes associated with the user, so maybe have a mutation put on the Find Stores button and the POST can happen then/there?
        clearInputs();
      }
      console.log(searchValue)

    const clearInputs = (event) => {
        event.preventDefault()
        setSearchValue('')
    }

    // from rick and morty tutorial I should be getting that data to console.log from line 6 but it remains undefined
    // if I was getting data back, the Find Stores button could trigger a new view (using <Link /> wrapped around the button) and then display the store that has that zipcode
    // right now we are successfully capturing the text box input, but we are getting a 404 Error 
    // data should console.log: {
        //   "id": "1",
        //   "name": "Jast, Upton and Barrows",
        //   "address": "Suite 456 823 Patricia Garden, East Corrina, CT 64693"
        // }

    return (
        <div>
            <h3>Search Zipcode: </h3>
            <input 
                type='text'
                placeholder='Enter Zipcode'
                name='zipcode'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button onClick={(event) => handleSubmit(event)}>Find Stores</button>
            <section className='store-container'>{data.stores.map(store => {
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