import React, {useState} from 'react'
// import { mockData } from

const ZipcodeSearch = () => {
    const [searchValue, setSearchValue] = useState('')

    handleNameChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      }
    
      handleSubmit = e => {
        e.preventDefault();
        const newZipcode = {
          title: this.state.title,
          long_url: this.state.urlToShorten
        }
        this.props.addUrl(newUrl)
        this.clearInputs();
      }
    return (
        <div>
            <input 
                type='text'
                placeholder='Enter Zipcode'
                name='zipcode'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button>Search Stores</button>
        </div>
    )
}

export default ZipcodeSearch