import React from 'react'
import headerImage from '../../assetts/headerImage.jpeg'
import './Header.css'

const Header = () => {
// const [home, setHome] = useState(true)
    return (
        <header className='header-container'>
            <img 
                className='header-image'
                src={headerImage} alt={''}
            />
            <h1>Frugal Foods</h1>
            <button className='home'>Home</button>
            <button className='list'>Grocery List</button>
            <button className='search'>Search</button>
        </header>
    )
}

export default Header