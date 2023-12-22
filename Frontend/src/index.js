import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
<<<<<<< HEAD
  <GoogleOAuthProvider clientId='862283356474-vjmaofa7ut602067a0i6laihtntndnkp.apps.googleusercontent.com'>
=======
  <GoogleOAuthProvider clientId="862283356474-vjmaofa7ut602067a0i6laihtntndnkp.apps.googleusercontent.com">
>>>>>>> bdfb609cc4ad6053a25c77e546c3884553e7295f
  <App />
  </GoogleOAuthProvider>
  </BrowserRouter>
);



