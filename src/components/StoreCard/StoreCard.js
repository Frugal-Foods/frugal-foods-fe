import React, {useState} from 'react';
import './StoreCard.css';

const StoreCard = ({name, address}) => {
    const [checked, setChecked] = useState(false)

    const handleChecked = () => {
        setChecked(!checked);
    };

    return (
        <section className="individual-store-card">
            <input type="checkbox" checked={checked} onChange={handleChecked}/>
            <p>{name}</p>
            <p>{address}</p>
        </section>
    )
}

export default StoreCard;