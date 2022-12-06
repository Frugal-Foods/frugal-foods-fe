import React from 'react'
import headerImage from '../../assetts/headerImage.jpeg'
import frugalLogo from '../../assetts/frugal_logo.png'
import './Header.css'

const Header = () => {
// const [home, setHome] = useState(true)
    return (
        <header className='header-container'>
            <img 
                className='header-image'
                src={headerImage} alt='grocery produce'
            />
            <div className='logo-container'> 
                <img className='frugal-logo' src={frugalLogo} alt='frugal foods logo'/>
            </div>
            <button className='home'>Home</button>
            <button className='list'>Grocery List</button>
            <button className='search'>Search</button>
        </header>
    )
}

export default Header