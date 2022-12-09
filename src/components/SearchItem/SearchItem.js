import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import "./SearchItem.css";
import { MdAddShoppingCart } from "react-icons/md"

const SearchItem = ({ id, itemName, photoUrl, price, storeName }) => {
  const userId = useContext(UserContext)
  const [quantity, setQuantity] = useState('')
  const [addCart] = useMutation(ADD_CART_MUTATION, {
    variables: {
      userId,
      storeItemId: id,
      quantity,
    }
  })

  return (
    <section className="store-item-container">
      <div className="store-item-card">
        <h4 className="add-icon"> <MdAddShoppingCart size={22} onClick={() => addCart()} /> </h4>
        <img src={photoUrl} alt="grocery item" />
        <h3>${price} (est.)</h3>
        <h3>{itemName}</h3>
        <h3>{storeName}</h3>
        <p>in stock</p>
    </div>
    </section>
  );
};

export default SearchItem;
