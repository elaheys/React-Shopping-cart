import React, { useContext } from 'react';

//components
import Product from '../Shared/Product';

//context
import { ProductsContext } from '../context/ProductContextProvider';

//style
import styles from './Store.module.css'

const Store = () => {


    const products = useContext(ProductsContext);

    return (
        <div className={styles.container}>
            {
                
            products.map(product => <Product key={product.id} productData={product}/>)
            
            }
        </div>
    );
};

export default Store;