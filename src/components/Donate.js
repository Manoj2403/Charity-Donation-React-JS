import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './styles/donate.css';

const Donate = () => {
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [selectedProduct, setSelectedProduct] = useState('');
    const [quantity, setQuantity] = useState('');
    const [amount, setAmount] = useState('');
    const navigate = useNavigate('');
    // const [flag,setFlag] = useState(0);
    const [showPopup, setShowPopup] = useState(false);

    // Your donation handling logic here
    const submit = (e) => {
        
        e.preventDefault();
        axios.post('http://localhost:3000/donate', {
            name: name,
            mobileNumber: mobileNumber,
            selectedProduct: selectedProduct,
            quantity: quantity,
            amount: amount,
        }).then(() => {
            // setFlag(1);
            // goto();
            setShowPopup(true);
            alert("Donate Successful");         
            
        }).catch(error => {
            console.error("Database Error..Contact Admin");
            alert("Database Error...Contact Admin");
            // Handle error here, e.g., show an error message to the user
        });
    }
    
    // const goto = () => {
    //     if (flag === 1) {
    //         const buttonElement = document.getElementById('next');
    //         if (buttonElement) {
    //             buttonElement.style.display = 'block';
    //         }
    //     }
    // }
    
    

    return (
        <div className="donate-container">
            
            <div className="donate-form">
            <h2>Donate</h2>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="mobile">Mobile Number:</label>
                <input
                    type="text"
                    id="mobile"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                />

                <label htmlFor="product">Select Product:</label>
                <select
                    id="product"
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                >
                    <option value="">Select a product</option>
                    <option value="Amount">Amount</option>
                    <option value="Clothes">Clothes</option>
                    
                </select>

                <label htmlFor="quantity">Quantity:</label>
                <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />

                <label htmlFor="amount">Amount:</label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />

                <button onClick={submit}>Donate</button>
                {/* <button id="next">Click</button> */}
            </div>
            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Donation Successful!</h2>
                        <p>Thank you for your generous donation.</p>
                        <button onClick={() => setShowPopup(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
        
        
    );
    
};

export default Donate;
