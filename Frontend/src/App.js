import { Route, Routes } from "react-router-dom";
import Landingpage from "./Components/LandingPage"; 
import AdminPanel from "./Components/AdminPanel";
import AddItems from "./Components/Additems";
import Cart from "./Components/Cart";
import DeleteItem from "./Components/DeleteItem";
import UpdateItem from "./Components/UpdateItem";
import ViewItem from "./Components/ViewItem";
import BadgeState from "./Context/BadgeState";
import ContentState from "./Context/ContentState";
import CustomerService from "./Components/CustomerService";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import PrivacyPolicy from "./Components/PrivacyPolicy";

// import Test from "./Components/Test";





function App() {

  return (

    
    <div>
      {/* <Test/> */}

    
    <ContentState>
    <BadgeState>
      <Routes> 
         <Route path="/landingpage" element={<Landingpage />} /> 
         <Route path = "/" element = {<AdminPanel/>}>
        </Route>
        <Route path = "/addItems" element = {<AddItems/>}></Route>
        <Route path = "/update" element = {<UpdateItem/>}></Route>
        <Route path = "/customer-service" element={<CustomerService/>}></Route>
        <Route path = "/About" element={<About/>}></Route>
        <Route path = "/contact" element={<Contact/>}></Route>
        <Route path = "/sign-in" element={<Login/>}></Route>
        <Route path = "/privacy-policies" element={<PrivacyPolicy/>}></Route>
       </Routes> 
      <Routes>
        
        <Route path = "/cart" element = {<Cart/>}></Route>
        
        <Route path = "/delete" element = {<DeleteItem/>}></Route>
        
        <Route path = "/view" element = {<ViewItem/>}></Route>
      </Routes>
      </BadgeState>
      </ContentState>
    </div>
  );
}

export default App;