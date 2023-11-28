import React, { useEffect, useState } from 'react';
import { getProduct, sendMessageViaAxios } from '../Service/api';

function Test() {
    const [productData, setProductData] = useState({
        productId: 130,
        productName: "T-Shirts",
        productDescription: "High Quality T-Shirt",
        price: 1500,
        image: "Dummy Path"
    });

    const [retrievedData, setRetrievedData] = useState([]);

    useEffect(() => {
        getProductDetails();
    }, []);

    const getProductDetails = async () => {
        try {
            const result = await getProduct(); // Make sure getProduct returns a Promise
            setRetrievedData(result.data);
        } catch (error) {
            console.error("Error fetching product data:", error);
        }
    }

    const handleMessageSend = () => {
        console.log("button clicked");
        sendMessageViaAxios(productData);
    }

    return (
        <div>
            <button onClick={handleMessageSend}>Send Message</button>
            <h2>Hello {retrievedData.productDescription}</h2>
        </div>
    );
}

export default Test;
