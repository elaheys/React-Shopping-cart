import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Components
import Cart from '../components/Cart';

// Context
import { CartContext } from '../context/CartContextProvider';

//style
import styles from '../components/ShopCart.module.css';

const ShopCart = () => {

    const { state, dispatch } = useContext(CartContext);

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>

            {
                state.itemsCounter > 0 && <div className={styles.payment}>
                    <p><span>Total Items:</span> {state.itemsCounter}</p>
                    <p><span>Total Payments:</span> {state.total} $</p>
                    <div className={styles.buttonCounter}>
                        <button className={styles.checkOut} onClick={() => dispatch({type: "CHECKOUT"})}>Check Out</button>
                        <button className={styles.clear} onClick={() => dispatch({type: "CLEAR"})}>Clear</button>
                    </div>
                </div>
            }

            {
                state.checkout && <div className={styles.complete}>
                    <h3>Checked Out Successfully</h3>
                    <Link to="/products">Buy More</Link>
                </div>
            }

            {
                !state.checkout && state.itemsCounter === 0 && <div className={styles.complete}>
                    <h3>Want to Buy?</h3>
                    <Link to="/products">Go to Shop</Link>
                </div>
            }
        </div>
    );
};

export default ShopCart;