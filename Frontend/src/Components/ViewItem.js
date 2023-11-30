import React, { useEffect, useState } from "react";
import { getProduct } from "../Service/api";

function ViewItem() {
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

  return (
    <div>
      <h2>Items List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Description</th>
            <th>Image</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((item) => (
            <tr key={item.productId}>
              <td>{item.productId}</td>
              <td>{item.productTitle}</td>
              <td>{item.productDescription}</td>
              <td>
                <div className="card" style={{ width: "120px", height: "120px", overflow: "hidden" }}>
                  <img
                    src={item.image}
                    alt={item.productTitle}
                    className="card-img-top"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              </td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewItem;
