import React, {useState , useEffect} from 'react';
import { deleteProduct, getProduct } from '../Service/api';

const DeleteItem = () => {

    const [productData, setProductData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getProduct();
        setProductData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  const handleDeleteProduct = async (productId) =>{
    console.log(productId);
    await deleteProduct(productId);
  }

  return (
    <div>
    <h2>Items List</h2>
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
          {productData.map((item) => (
            <tr key={item.productId}>
              <td>{item.productId}</td>
              <td>{item.productTitle}</td>
              <td>{item.productDescription}</td>
              <td>{item.price}</td>

              <button className='btn btn-danger' onClick={() => handleDeleteProduct(item.productId)}>Delete Item</button>
            </tr>
          ))}
        </tbody>
    </table>
    </div>
  );
};

export default DeleteItem;