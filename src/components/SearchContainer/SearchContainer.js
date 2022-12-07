import React from 'react'
import SearchItem from '../SearchItem/SearchItem'

const SearchContainer = ({ storeItems }) => {
    const storeItemCards = storeItems.map(item => {
            return (
                <SearchItem 
                    name={item}
                    // storeName={store.name}
                    key={item.id}
                />
            )
        // })
    })
    return (
        <div>
            {storeItemCards}
        </div>
    )
}

export default SearchContainer
