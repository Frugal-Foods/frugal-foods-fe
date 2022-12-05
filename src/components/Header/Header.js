import React from 'react'
import headerImage from '../../assetts/headerImage.jpeg'
import './Header.css'

const Header = () => {

    return (
        <header>
            <img 
                className='header-image'
                src={headerImage}
            />
            <h1>Frugal Foods</h1>
        </header>
    )
}

export default Header