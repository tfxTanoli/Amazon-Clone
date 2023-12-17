import React, { useState } from "react";
import { addUser } from "../Service/api";
import { GoogleLogin } from "react-google-login";

const onSuccess =(res) => {
  console.log("Login Successful", res.profileObj);
  alert("Success");
}

const onFailure = (res) => {
    if (res.error === "popup_closed_by_user") {
      console.log("User closed the popup");
    } else {
      console.log("Login Failed", res);
    }
    alert("Failed");
  };

const SignUpForm = () => {
  const ClientId =
    "245710499192-erdq10a4b4hsps773m0i4nkmorl6n3je.apps.googleusercontent.com";
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addUser(formData);
    // You can add your form submission logic here, such as sending data to the server
    console.log("Form submitted with data:", formData);
    // Reset the form after submission
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form
        className="signup-form p-4 rounded"
        style={{
          backgroundColor: "#ffffff",
          color: "#495057",
          width: "400px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
        onSubmit={handleSubmit}
      >
        <h2 className="mb-4 text-center">Sign Up</h2>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirm-password" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="form-control"
            placeholder="Confirm your password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block w-100">
          Sign Up
        </button>
        <GoogleLogin
          clientId={ClientId}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      </form>
    </div>
  );
};

export default SignUpForm;
