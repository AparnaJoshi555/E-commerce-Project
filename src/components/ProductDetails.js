

import React from 'react';
import { useState, useEffect } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import ProductPage from './ProductPage';
import './ProductDetails.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:9078/api/${id}`)
            .then(response => response.json())
            .then(data => {
                console.log('Product data:', data);
                setProduct(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
                setLoading(false);
            });
    }, [id]);

    console.log('Data:', product.name);

    const addToCart = () => {
        if (!addedToCart) {
            alert('Item added to cart');
            setAddedToCart(true);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!product) {
        return <div>No product found</div>;
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const increment = () => {
        setQuantity(quantity + 1);
    };

    return (
        <section className="container-section">
            <div className="container-image">
                <img src={product.imageurl} alt={product.name} style={{ width: '100%', height: '100%' }} />
            </div>

            <div className="container-details">
                <h2 className="title">{product.name}</h2>
                <div className="mt-1">
                    <div className="rating">
                        <Rater style={{ fontSize: '20px' }} total={5} interactive={false} rating={product.rating} />
                    </div>
                    <p className="review">{product.description}</p>
                </div>

                <p className="Brand">Brand: {product.brand}</p>
                <p className="Category">Time Period: {product.timePeriod}</p>

                <p className="price">Rs.{product.productPrice}</p>
                <p className="description">{product.description}</p>
                <div className="size">
                    <p>Dimension: {product.size}</p>
                </div>

                <div className="quantity">
                    <p>Qty </p>
                    <button className="plusMinuceButton" onClick={decrement}> - </button>
                    {quantity}
                    <button className="plusMinuceButton" onClick={increment}> + </button>
                </div>

                <div className="buttonbox">
                    <Link to={`/${id}/cart`} onClick={addToCart} className="cart">
                        <BiShoppingBag className="mx-2" />
                        {addedToCart ? "Go to Cart" : "Add to Cart"}
                    </Link>
                    <button className="wishlist">
                        <AiOutlineHeart className="mx-2" />
                        Wishlist
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;

