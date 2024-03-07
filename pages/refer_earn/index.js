import React, { useRef, useState, useEffect } from "react";

const Index = () => {
  const [inputValue, setInputValue] = useState("sdkmcacaj79i867nj");
  const inputRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Generate a new random code
      const newCode = generateRandomCode();
      setInputValue(newCode);
    }, 10000); // 10 seconds interval

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const generateRandomCode = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = 16;
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  const handleCopy = () => {
    inputRef.current.select();
    inputRef.current.setSelectionRange(0, 99999);

    document.execCommand("copy");

    inputRef.current.blur();
    const copyButton = document.querySelector(".social-search button");
    copyButton.textContent = "Copied!";
    setTimeout(() => {
      copyButton.textContent = "Copy";
    }, 2000);
  };

  return (
    <div className="custom-bg text-white">
      <div className="container ">
        <h3 className="text-white">Refer and Earn</h3>
        <img src="./refer.png" alt="refer" />
        <h5>Invite Friend and Businesses</h5>
        <p>Copy your code, share it with your friends</p>
        <p>Your Personal Code</p>
        <div className="social-search w-100 mt-4 copy-search">
          <input
            ref={inputRef}
            type="text"
            placeholder="sdkmcacaj79i867nj"
            value={inputValue}
            readOnly
          />
          <button onClick={handleCopy}>Copy</button>
        </div>
        <div>
          <h4>How you it works?</h4>
          <ol type="1" className="m-0">
            <li>Invite your friends and businesses.</li>
            <li>
              They register kasbah with special offers. Once they spend their
              first 25$ order both of you will get 5$ coupon.
            </li>
            <li>You made your earning!</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Index;
