// import react, { useState } from 'react';
import { sendMessageViaAxios } from '../Service/api';

function Test(){
    const productName = "T-Shirts";  

    function handleMessageSend(){
        console.log("button clicked");
        sendMessageViaAxios(productName);
    }
    return(
    <div>
           <button onClick={handleMessageSend}> Send Message </button>
    </div>
    );

}
export default Test;