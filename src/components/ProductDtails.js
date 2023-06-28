import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


//context
// import {ProductsContext}  from '../context/ProductContextProvider';

//style
import styles from '../components/ProductDtail.module.css'




const ProductDtails = (props) => {

    const id = props.match.params.id;
    const [item, setItem] = useState([]);
    const BASE_URL = `https://fakestoreapi.com/products/${id}`

    const getProducts1 = async () =>{
        const response = await axios.get(BASE_URL); 
        return response.data;
    }
    
    useEffect(() => {
        const fetchAPI = async () => {   
            setItem(await getProducts1());    
    }
        fetchAPI();
    },[]); 

    
    // const data = useContext(ProductsContext);
    // const product = data[id - 1];
    // console.log(product)
    const {image,category,title,description,price} = item;

    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt='product' />
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.category}><span>Category: </span>{category}</p>
                <h5 className={styles.describtion}>{description}</h5>
            <div className={styles.buttonContainer}>
                <span className={styles.price}>{price} $</span>
                <Link to='/products'>Go back to shop</Link>
            </div>
           </div> 
        </div>
    );
};

export default ProductDtails;  