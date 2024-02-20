import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-toastify";

import Helmet from "../components/Helmet";
import "../style/auth.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);
      setLoading(false);
      toast.success("Successfully logged in");
      navigate("/checkout");
    } catch (error) {
      toast.error(`Create user error: ${error.message}`);
      setLoading(false);
      console.error("Error during signup:", error);
    }
  };

  return (
    <Helmet title="Login">
      <section className="auth">
        <div className="container">
          {loading ? (
            <h3 className="section__title">Loading.....</h3>
          ) : (
            <form className="auth__form" onSubmit={signin}>
              <h3 className="auth__title section__title">Login</h3>
              <input
                className="auth__input"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="auth__input"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="auth__btn btn-bay" type="submit">
                Login
              </button>
              <p className="auth__text">
                Don't have an account?{" "}
                <span>
                  <Link to="/signup">Create an account</Link>
                </span>
              </p>
            </form>
          )}
        </div>
      </section>
    </Helmet>
  );
};

export default Login;
