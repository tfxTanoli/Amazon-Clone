import react, { useState } from 'react';
import { sendMessageViaAxios } from '../Service/api';

function Test(){
    const [productData , setProductData] = useState ({
        productId : 130,
        productName : "T-Shirts",
        productDescription : "High Quality T-Shirt",
        price : 1500,
        image : "Dummy Path"
    });

    function handleMessageSend(){
        console.log("button clicked");
        sendMessageViaAxios(productData);
    }
    return(
    <div>
           <button onClick={handleMessageSend}> Send Message </button>
    </div>
    );

}
export default Test;