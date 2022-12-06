import React, {useState} from 'react';
import './StoreCard.css';

const StoreCard = ({storeName, address}) => {
    const [checked, setChecked] = useState(false)

    return (
        <section className="store-card">
            <input type="checkbox" checked={checked} onChange=/>
            <p>{storeName}</p>
            <p>{address}</p>
        </section>
    )
}

export default StoreCard