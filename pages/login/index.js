import React from "react";

const Index = () => {
  return (
    <div className="login-box">
      <div className="container login-screen">
        <form className="login-form">
          <h3>Join Nopal Das Rewards</h3>
          <div className="input-field">
            <p>Email</p>
            <input type="text" placeholder="123@gmail.com" required />
          </div>
          <div>
            <p>Password</p>
            <input type="password" placeholder="**********" required />
          </div>
          <button className="continue-btn">Continue</button>
          <p>Don’t have an account yet? </p>
          <span>Sign up</span>
        </form>
      </div>
    </div>
  );
};

export default Index;
