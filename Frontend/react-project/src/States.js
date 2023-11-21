import { useState } from "react";

function States(){
  const product = [
    { Id: 1, Name: 'Iphone', Price: 250000 },
    { Id: 2, Name: 'Realme', Price: 54000 }
  ];

  const [productList,setProductList] = useState(product);

  const handleIphoneChange =() => {
    // Update the state of the Iphone product
    // const updatedProductList = [...productList];
    // updatedProductList[0].Name = "iPhone 14 Pro";
    // setProductList(updatedProductList);

    // product[0].Price = 230000;
    alert();
    product[0].Name = "Iphone 13 Pro Max";
    setProductList(product);
   
  }

  const handleRealmeChange = ()=>{
    product[1].Price = 48000;
    setProductList(product);
  }

  return(
    <div>
      <h1>Products List</h1>
      <ul>
        {productList.map((product) => (
          <li key={product.Id}>
            <strong>Name: {product.Name}</strong>
            <p>Price: {product.Price}</p>
          </li>
        ))}
      </ul>
      <button className="bg-primary text-light" onClick={handleIphoneChange} style={{marginLeft:"20px"}}>Update Iphone</button>
      <button className="bg-danger text-warning "style={{marginLeft:"10px"}} onClick={handleRealmeChange}>Change Realme</button>
    </div>
  )
}
export default States;