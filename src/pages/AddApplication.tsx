import { useState } from "react";
import "./LoginSignup.css";
import { useNavigate } from "react-router-dom";
const AddApplication = () => {
  const navigate = useNavigate();
  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <div>
      <div>
        <section>
          <h2 className="heading">Add Job Application</h2>
        </section>
        <form onSubmit={handleClick}>
          <div>
            <label className="input-label">Username</label>
            <input
              className="input-field"
              id="username"
              name="username"
              type="username"
              placeholder="Enter your username"
              required
            />
          </div>

          <label className="input-label">Email</label>
          <input
            className="input-field"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <label className="input-label">Password</label>
          <input
            className="input-field"
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </form>
      </div>
    </div>
  );
};

export default AddApplication;
