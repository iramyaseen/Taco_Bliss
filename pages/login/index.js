import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    let loggedIn = false;

    for (let i = 0; i < users.length; i++) {
      const userData = users[i];

      if (userData.email === userEmail && userData.password === userPassword) {
        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          transition: Bounce,
        });
        loggedIn = true;
        router.push("/");
        break;
      }
    }

    if (!loggedIn) {
      toast.error("Invalid email or password.");
    }
  };

  return (
    <div className="login-box">
      <div className="container login-screen">
        <form className="login-form" onSubmit={handleSubmit}>
          <h3>Join Nopal Das Rewards</h3>
          <div className="input-field">
            <p>Email</p>
            <input
              type="email"
              placeholder="123@gmail.com"
              required
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className="input-password-field">
            <p>Password</p>
            <input
              type="password"
              placeholder="**********"
              required
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <button className="continue-btn" type="submit">
            Continue
          </button>
          <p style={{ marginBottom: "10px" }}>Don’t have an account yet? </p>
          <span className="sign-up">
            <Link href="/signup">Sign up</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Index;
