import react, { useState } from 'react';
import { sendMessageViaAxios } from '../Service/api';

function Test(){
    const name = "Muhammad Usman";
    const id = 130;    

    function handleMessageSend(){
        console.log("button clicked");
        sendMessageViaAxios(name,id);
    }
    return(
    <div>
           <button onClick={handleMessageSend}> Send Message </button>
    </div>
    );

}
export default Test;