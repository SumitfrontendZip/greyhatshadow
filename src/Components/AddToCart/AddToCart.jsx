import { useState, useEffect } from "react";
import './AddToCart.css'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import img1 from '../CourseList/1.jpg'
import { v4 as uuidv4 } from 'uuid';

const AddToCart = () => {
    const [basketItems, setBasketItems] = useState([
        {
            id: uuidv4(),
            name: 'Android Pentesting Tool v7.1 Latest Version For 2024 Lifetime',
            productCode: "5465458",
            price: 8300,
            quantity: 1,
            imageUrl: img1
        }
    ]);

    const [promoCode, setPromoCode] = useState("");
    const [promoPrice, setPromoPrice] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    const [total, setTotal] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        updateSumItems();
        recalculateCart();
    }, [basketItems, promoPrice]);

    const handlePromoCodeChange = (event) => {
        setPromoCode(event.target.value);
    };

    const handlePromoCodeApply = () => {
        if (promoCode === "10off" || promoCode.toLowerCase() === "10off") {
            setPromoPrice(10);
        } else {
            alert("Invalid Promo Code");
            setPromoPrice(0);
        }
    };

    const updateQuantity = (id, quantity) => {
        setBasketItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: Number(quantity) } : item
            )
        );
    };

    const removeItem = (id) => {
        setBasketItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const updateSumItems = () => {
        setTotalItems(basketItems.reduce((sum, item) => sum + item.quantity, 0));
    };

    const recalculateCart = () => {
        const newSubtotal = basketItems.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );
        let newTotal = newSubtotal;
        if (promoPrice && newSubtotal >= 10) {
            newTotal -= promoPrice;
        }
        setSubtotal(newSubtotal);
        setTotal(newTotal);
    };

    return (
        <>
            <Navbar />
            <div className="add-to-cart">
                <main>
                    <div className="basket">
                        <div className="basket-module">
                            <label htmlFor="promo-code">Enter a promotional code</label>
                            <input
                                id="promo-code"
                                type="text"
                                value={promoCode}
                                onChange={handlePromoCodeChange}
                                maxLength="5"
                                className="promo-code-field"
                            />
                            <button className="promo-code-cta" onClick={handlePromoCodeApply}>
                                Apply
                            </button>
                        </div>
                        <div className="basket-labels">
                            <ul>
                                <li className="item item-heading">Item</li>
                                <li className="price">Price</li>
                                <li className="quantity">Quantity</li>
                                <li className="subtotal">Subtotal</li>
                            </ul>
                        </div>
                        {basketItems.map((item) => (
                            <BasketItem
                                key={item.id}
                                item={item}
                                updateQuantity={updateQuantity}
                                removeItem={removeItem}
                            />
                        ))}
                    </div>
                    <Summary
                        totalItems={totalItems}
                        subtotal={subtotal}
                        promoPrice={promoPrice}
                        total={total}
                    />
                </main>
                <Header />
            </div>
        </>
    );
};

const BasketItem = ({ item, updateQuantity, removeItem }) => {
    const handleQuantityChange = (event) => {
        updateQuantity(item.id, event.target.value);
    };

    return (
        <div className="basket-product">
            <div className="item">
                <div className="product-image">
                    <img src={item.imageUrl} alt="Product" className="product-frame" />
                </div>
                <div className="product-details">
                    <h1>
                        <strong>
                            <span className="item-quantity">{item.quantity}</span> x {item.name}
                        </strong>
                    </h1>
                    <p>Product Code - {item.productCode}</p>
                </div>
            </div>
            <div className="price">{item.price}</div>
            <div className="quantity">
                <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={handleQuantityChange}
                    className="quantity-field"
                />
            </div>
            <div className="subtotal">{(item.price * item.quantity)}</div>
            <div className="remove">
                <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
        </div>
    );
};

const Summary = ({ totalItems, subtotal, promoPrice, total }) => (
    <aside>
        <div className="summary">
            <div className="summary-total-items">
                <span className="total-items">{totalItems}</span> Items in your Bag
            </div>
            <div className="summary-subtotal">
                <div className="subtotal-title">Subtotal</div>
                <div className="subtotal-value final-value" id="basket-subtotal">
                    {subtotal}
                </div>
                {promoPrice > 0 && (
                    <div className="summary-promo">
                        <div className="promo-title">Promotion</div>
                        <div className="promo-value final-value" id="basket-promo">
                            {promoPrice}
                        </div>
                    </div>
                )}
            </div>
            <div className="summary-total">
                <div className="total-title">Total</div>
                <div className="total-value final-value" id="basket-total">
                    {total}
                </div>
            </div>
            <div className="summary-checkout">
                <button className="checkout-cta">Go to Secure Checkout</button>
            </div>
        </div>
    </aside>
);

export default AddToCart;
