


/*
import React, { useState, useEffect } from "react";
const AddtoCart = () => {
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const items = [
        {
            id: 1,
            name: "overwatch",
            price: 20,
        },
        {
            id: 2,
            name: "minecraft",
            price: 32,
        },
        {
            id: 3,
            name: "fortnite",
            price: 51,
        },
    ];

    useEffect(() => {
        total();
    }, [cart]);

    const total = () => {
        let totalVal = 0;
        for (let i = 0; i < cart.length; i++) {
            totalVal += cart[i].price;
        }
        setCartTotal(totalVal);
    };

    const addToCart = (el) => {
        setCart([...cart, el]);
    };

    const removeFromCart = (el) => {
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
        setCart(hardCopy);
    };

    const listItems = items.map((el) => (
        <div key={el.id}>
            {`${el.name}: $${el.price}`}
            <input type="submit" value="add" onClick={() => addToCart(el)} />
        </div>
    ));

    const cartItems = cart.map((el) => (
        <div key={el.id}>
            {`${el.name}: $${el.price}`}
            <input type="submit" value="remove" onClick={() => removeFromCart(el)} />
        </div>
    ));

    return (
        <div>
            STORE
            <div>{listItems}</div>
            <div>CART</div>
            <div>{cartItems}</div>
            <div>Total: ${cartTotal}</div>
        </div>
    );
};



export default AddtoCart;
*/
/*
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

const AddtoCart = () => {
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    const  userId  = '1';
    console.log("usrid ", userId);

    useEffect(() => {
        if (userId) {
            fetchCartItems(userId); // Call fetchCartItems only if userId is available
        }
    }, [userId]); // Trigger fetchCartItems whenever userId changes

    const fetchCartItems = async (e) => {
        try {
            const response = await axios.get(`http://localhost:9078/cart/user/${userId}`);
            console.log("usridinside ",userId);
            setCart(response.data.cartItems);
            calculateTotal(response.data.cartItems);
        } catch (error) {
            console.error("Error fetching cart items:", error);
        }
    };

    const calculateTotal = (items) => {
        let total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setCartTotal(total);
    };

    return (
        <div className="cart-page">
            <h2>Shopping Cart</h2>
            {cart.length == 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cart.map((item) => (
                            <div key={item.id} className="cart-item">
                                <div>
                                    <h3>{item.name}</h3>
                                    <p>Price: ${item.price}</p>
                                    <label>Quantity: {item.quantity}</label>
                                </div>
                                <div>
                                    <p>Subtotal: ${item.price * item.quantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-total">
                        <h3>Total: ${cartTotal}</h3>
                        <button>Proceed to Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default AddtoCart;

*/

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";

const AddToCart = () => {
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);



    // Provide userId as a hardcoded value for testing
    //const userId = '1';

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get(`http://localhost:9078/cart/all`);
                console.log("Cart result:", response.data);
                response.data.map(cartItem => {
                    let id = response.data.length;
                    console.log("id", id);
                    
                })

                for (let i = 0; i < response.data.length; i++) {
                    console.log("cart item: ",response.data[i].user.cartItems);
                }

                console.log("Cart result:", response.data);

                console.log("Cart item:",);

                // Check if the response contains cart items
                if (response.data && response.data.cartItems) {
                    const cartItems = response.data.cartItems;
                    // Set the cart state with the fetched cart items
                    setCart(cartItems);
                    // Calculate cart total
                    //calculateTotal(cartItems);
                }
                else {
                  //  console.error('Cart items not found in the response:', response.data);
                }
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };



        fetchCartItems(); // Call fetchCartItems when the component mounts
    }, []); // Empty dependency array to run the effect only once when the component mounts

    // Render items and cart total
    return (
        <div>
            <h2>Shopping Cart</h2>
            <div>
                { cart.id}
                {cart.map((item) => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <p>Price: ${item.productPrice}</p>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddToCart;

/*<div className="cart-page">
    <h2>Shopping Cart</h2>
    {cart.length === 0 ? (
        <p>Your cart is empty.</p>
    ) : (
        <>
            <div className="cart-items">
                {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                        <div>
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                            <label>Quantity: {item.quantity}</label>
                        </div>
                        <div>
                            <p>Subtotal: ${item.price * item.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-total">
                <h3>Total: ${cartTotal.toFixed(2)}</h3>
                <button>Proceed to Checkout</button>
            </div>
        </>
    )}
</div>*/






