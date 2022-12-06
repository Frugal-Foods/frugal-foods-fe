import React from 'react'
import { Link } from 'react-router-dom'
import headerImage from '../../assetts/headerImage.jpeg'
import { BsCart4 } from 'react-icons/bs';
import './Header.css'

const Header = () => {

    return (

        <header className='header-container'>
            <img
                className='header-image'
                src={headerImage} alt={''}
            />
            <h1>Frugal Foods</h1>
            <Link to='/' className='home'>Home</Link>
            <button className='list'>Grocery List</button>
            <Link to='/search' className='search'>Search</Link>
            <Link to='/cart'>
                <div className='header-openBasket'>
                    <BsCart4 size={25} />
                    <span className='header-basketCount'>5</span>
                </div>
            </Link>
        </header>

    )
}

export default Header