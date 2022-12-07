import React from 'react'

const SearchItem = ({ id, name, photoUrl, stores }) => {
    console.log(name)
    const getItems = name.items.map(item => {
        // if (item.name === search) {
            return(
                <section className='store-item-card' key={item.id}>
                    {/* <h2>{items.name}</h2> */}
                    <img src={item.image} alt={item.name}/>
                    <p>{name.name}</p>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    {/* <p>{stores.name}</p> */}
                </section>
            )
        // }
    })
    return (
        <div>
            {getItems}
        </div>
    )
}

export default SearchItem
