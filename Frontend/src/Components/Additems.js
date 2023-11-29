  import React, { useState } from 'react';
  import { sendMessageViaAxios } from '../Service/api';

  function Additems() {
    const [formData, setFormData] = useState({
      productId: '',
      productName: '',
      description: '',
      imagePath: '',
      price: '',
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log('Form Data:', formData);
      await sendMessageViaAxios(formData);
      // Here you can perform actions with the form data like sending it to an API, etc.
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

  export default Additems;
