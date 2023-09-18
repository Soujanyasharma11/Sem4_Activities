import React from 'react';
import "./Signup.css";

const Signup = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100" id="b-img">
      <div className="border border-3 border-success p-3 bg-light">
        <form>
          <h2>Signup</h2>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            name="Email"
            className="form-control"
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            name="Password"
            className="form-control"
          />
           <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            name="Password"
            className="form-control"
          />
          <div className="mb-3">
            <input type="checkbox" />
            <label htmlFor="Checkbox" className="ms-2">
              Remember Your Password
            </label>
          </div>
          <div className="d-grid">
            <button className="btn btn-danger">Signup</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
