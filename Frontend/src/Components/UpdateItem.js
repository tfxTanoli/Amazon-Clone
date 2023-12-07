import React, { useState } from 'react';

export default function UpdateItem() {
  const [formData, setFormData] = useState({
    productId: '',
    productName: '',
    description: '',
    imagePath: '',
    price: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="productId" className="form-label">Enter ID:</label>
          <input
            type="text"
            className="form-control"
            id="productId"
            name="productId"
            value={formData.productId}
            onChange={handleChange}
          />
        </div>
        <button className='btn btn-primary ' style={{marginLeft:"450px"}}>Fetched Product Data</button>
        <div className="mb-3">
          <label htmlFor="productName" className="form-label">Enter Product Name:</label>
          <input
            type="text"
            className="form-control"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
          />
        </div>
        {/* Add other input fields following the same structure */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Enter Description:</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imagePath" className="form-label">Enter Image Path:</label>
          <input
            type="text"
            className="form-control"
            id="imagePath"
            name="imagePath"
            value={formData.imagePath}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Enter Price:</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
