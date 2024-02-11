import Link from "next/link";
import React, { useState } from "react";
import { MdDarkMode } from "react-icons/md";

const Header = () => {
  const [switchTheme, setSwitchTheme] = useState(false);
  const toggleTheme = () => {
    setSwitchTheme(!switchTheme);
  };
  return (
    <>
      <div className="header-bg-color">
        <div className="container header-box">
          <div className="header-left-box">
            <div>
              <Link href="/">
                <img src="/header_logo.png" alt="Logo" height={50} />
              </Link>
            </div>
            <div className="header-list">
              <ul>
                <li>
                  {" "}
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/menu">Menu</Link>
                </li>
                <li>
                  <Link href="/location">Location</Link>
                </li>
                <li>Our Story</li>
                <li>Events</li>
                <li>
                  More {""}{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                  >
                    <path
                      d="M4.11035 5.25L7.61035 8.75L11.1104 5.25"
                      stroke="white"
                      stroke-width="1.05"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </li>
              </ul>
            </div>
          </div>
          <div className="header-right-box">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 10.8181 20.7672 9.64778 20.3149 8.55585C19.8626 7.46392 19.1997 6.47177 18.364 5.63604C17.5282 4.80031 16.5361 4.13738 15.4442 3.68508C14.3522 3.23279 13.1819 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12C3 14.3869 3.94821 16.6761 5.63604 18.364C7.32387 20.0518 9.61305 21 12 21Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 6.75V12H17.25"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="closed">
              <span> Closed</span> {""}{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
              >
                <path
                  d="M4.11035 5.25L7.61035 8.75L11.1104 5.25"
                  stroke="white"
                  stroke-width="1.05"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </p>
            <button className="cart-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M20.25 6.75H3.75C3.55109 6.75 3.36032 6.82902 3.21967 6.96967C3.07902 7.11032 3 7.30109 3 7.5V19.5C3 19.914 3.336 20.25 3.75 20.25H20.25C20.4489 20.25 20.6397 20.171 20.7803 20.0303C20.921 19.8897 21 19.6989 21 19.5V7.5C21 7.30109 20.921 7.11032 20.7803 6.96967C20.6397 6.82902 20.4489 6.75 20.25 6.75Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.25 9.75V6.75C8.25 5.75544 8.64509 4.80161 9.34835 4.09835C10.0516 3.39509 11.0054 3 12 3C12.9946 3 13.9484 3.39509 14.6517 4.09835C15.3549 4.80161 15.75 5.75544 15.75 6.75V9.75"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Cart</span>
            </button>
            <img src="/user.png" className="user-avatar" />
            <div
              className={`${
                switchTheme === true ? "white-theme" : "dark-theme"
              }`}
              onClick={toggleTheme}
            >
              <MdDarkMode />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
