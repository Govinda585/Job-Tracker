import { useState } from "react";
import "./LoginSignup.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [login, setLogin] = useState<Boolean>(false);
  const navigate = useNavigate();
  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  return (
    <div className="login-container">
      <div className="login-card">
        <section>
          <h2 className="heading">
            {login ? "Welcome Back" : "Create account"}
          </h2>
          <p className="sub-heading">
            {" "}
            {`Sign ${login ? "in" : "up"} to your JobTracker account`}
          </p>
        </section>
        <form onSubmit={handleClick}>
          {login ? (
            ""
          ) : (
            <div>
              {" "}
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
          )}
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
          <br />
          <button className="login-button" type="submit">{`Sign ${
            login ? "in" : "up"
          }`}</button>

          {login ? (
            <p className="sub-heading">
              Don't have an account?{" "}
              <span
                className="span-link"
                onClick={() => setLogin((prev) => !prev)}
              >
                {" "}
                Sign up
              </span>
            </p>
          ) : (
            <p className="sub-heading">
              Already have an account?{" "}
              <span
                className="span-link"
                onClick={() => setLogin((prev) => !prev)}
              >
                {" "}
                Sign in
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
