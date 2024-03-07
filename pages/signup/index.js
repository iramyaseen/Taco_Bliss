import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const generateToken = () => {
  return Math.random().toString(36).substr(2);
};

const Index = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return;
    }

    const token = generateToken();

    const userData = {
      firstName,
      email,
      password,
      confirmPassword,
      agreeToTerms,
    };

    // Get existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Add new user data to the array
    existingUsers.push(userData);

    // Save updated array back to localStorage
    localStorage.setItem("users", JSON.stringify(existingUsers));

    toast.success("Your account has been created.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      transition: Bounce,
    });

    router.push("/login");
  };

  const handleCheckboxChange = (e) => {
    setAgreeToTerms(e.target.checked);
  };

  return (
    <div className="login-box" style={{ height: "unset" }}>
      <div
        className="container login-screen"
        style={{ marginBottom: "50px", marginTop: "40px" }}
      >
        <form className="login-form" onSubmit={handleSubmit}>
          <h3>Create Account</h3>
          <div className="input-field">
            <p>First Name</p>
            <input
              type="text"
              placeholder="John"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>

          <div className="input-password-field">
            <p>Email </p>
            <input
              type="email"
              placeholder="123@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-password-field">
            <p>Password </p>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-password-field">
            <p>Confirm Password </p>
            <input
              type="password"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <input
              type="checkbox"
              className="custom-checbox"
              onChange={handleCheckboxChange}
              required
            />
            <p style={{ paddingLeft: "10px" }}>
              By creating an account, you agree to our terms and <br />
              conditions and privacy policy?{" "}
            </p>
          </div>
          <button className="continue-btn" type="submit">
            Sign Up
          </button>
          <p style={{ marginBottom: "10px" }}>
            Don’t have an account yet?
            <span className="sign-up" style={{ marginLeft: "10px" }}>
              <Link href="/login">Login</Link>
            </span>{" "}
          </p>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Index;
