"use client";
import React, { useState } from "react";
import styles from "./header.module.css";
import mobileStyles from "./mobile-nav.module.css";

const Header: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setMobileNavOpen((prev) => !prev);
  };

  return (
    <>
      <header>
        <nav
          role="navigation"
          aria-label="Main navigation"
          className={styles.header__nav}
        >
          <a className={styles.header__logo} href="#home">
            <svg
              width="134.000000"
              height="40.000000"
              viewBox="0 0 134 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs>
                <clipPath id="clip23_435">
                  <rect
                    id="Frame"
                    rx="0.000000"
                    width="31.000000"
                    height="31.000000"
                    transform="translate(8.500000 4.500000)"
                    fill="white"
                    fillOpacity="0"
                  />
                </clipPath>
                <clipPath id="clip23_437">
                  <rect
                    id="Logotype"
                    rx="0.000000"
                    width="133.000000"
                    height="39.000000"
                    transform="translate(0.500000 0.500000)"
                    fill="white"
                    fillOpacity="0"
                  />
                </clipPath>
              </defs>
              <g clipPath="url(#clip23_437)">
                <path
                  id="Estatery"
                  d="M45.44 13.26L45.44 28.16L55.34 28.16L55.34 25.76L48.16 25.76L48.16 21.88L54.94 21.88L54.94 19.48L48.16 19.48L48.16 15.66L55.34 15.66L55.34 13.26L45.44 13.26ZM69.48 27.28C70.16 27.94 71.12 28.28 72.34 28.28C72.54 28.28 72.76 28.26 73 28.24Q73.36 28.2 73.64 28.16L73.64 25.92C73.52 25.93 73.4 25.94 73.26 25.96C73.14 25.97 73.04 25.98 72.94 25.98C72.52 25.98 72.16 25.91 71.88 25.78C71.62 25.64 71.42 25.45 71.28 25.2C71.16 24.94 71.1 24.64 71.1 24.28L71.1 19.62L73.6 19.62L73.6 17.28L71.1 17.28L71.1 14.8L68.48 14.8L68.48 15.64Q68.48 16.35 68.13 16.77Q68.09 16.81 68.04 16.86C67.75 17.14 67.34 17.28 66.8 17.28L66.6 17.28L66.6 19.62L68.48 19.62L68.48 24.42C68.48 25.64 68.82 26.6 69.48 27.28ZM89.11 27.28C89.79 27.94 90.75 28.28 91.97 28.28C92.17 28.28 92.39 28.26 92.63 28.24Q92.99 28.2 93.27 28.16L93.27 25.92C93.15 25.93 93.03 25.94 92.89 25.96C92.77 25.97 92.67 25.98 92.57 25.98C92.15 25.98 91.79 25.91 91.51 25.78Q91.27 25.65 91.1 25.47Q90.99 25.34 90.91 25.2C90.79 24.94 90.73 24.64 90.73 24.28L90.73 19.62L93.23 19.62L93.23 17.28L90.73 17.28L90.73 14.8L88.11 14.8L88.11 15.64C88.11 16.17 87.97 16.58 87.67 16.86C87.38 17.14 86.97 17.28 86.43 17.28L86.23 17.28L86.23 19.62L88.11 19.62L88.11 24.42C88.11 25.64 88.45 26.6 89.11 27.28ZM58.21 27.58C59.08 28.12 60.09 28.4 61.25 28.4Q62.49 28.4 63.41 27.98C64.02 27.7 64.5 27.31 64.85 26.82C65.2 26.31 65.37 25.73 65.37 25.08C65.37 24.3 65.12 23.65 64.63 23.12Q63.91 22.32 62.57 21.92L60.83 21.4C60.58 21.32 60.35 21.23 60.15 21.14C59.96 21.04 59.82 20.92 59.71 20.78C59.6 20.63 59.55 20.45 59.55 20.26Q59.55 20.02 59.64 19.83Q59.74 19.63 59.93 19.48C60.18 19.28 60.53 19.18 60.97 19.18Q61.46 19.18 61.89 19.33Q62.18 19.44 62.45 19.62C62.89 19.91 63.2 20.3 63.39 20.8L65.39 19.86C65.06 18.96 64.5 18.27 63.71 17.78C62.92 17.28 62.02 17.04 60.99 17.04Q59.81 17.04 58.89 17.45Q58.2 17.78 57.73 18.3Q57.59 18.46 57.47 18.64C57.14 19.13 56.97 19.71 56.97 20.37Q56.97 21.02 57.2 21.57Q57.38 21.97 57.67 22.32C58.15 22.86 58.85 23.27 59.77 23.54L61.55 24.04C61.78 24.1 61.98 24.19 62.17 24.3C62.37 24.39 62.52 24.51 62.63 24.66C62.75 24.79 62.81 24.96 62.81 25.18C62.81 25.52 62.67 25.8 62.39 26.02C62.11 26.23 61.73 26.34 61.25 26.34C60.64 26.34 60.08 26.16 59.57 25.82C59.08 25.47 58.69 24.99 58.41 24.38L56.45 25.32C56.77 26.26 57.36 27.02 58.21 27.58ZM76.93 28.02C77.49 28.27 78.15 28.4 78.91 28.4C79.51 28.4 80.05 28.32 80.55 28.16C81.04 27.98 81.48 27.74 81.87 27.44C82.02 27.31 82.17 27.17 82.31 27.01L82.31 28.16L84.79 28.16L84.79 20.92C84.79 20.14 84.59 19.47 84.21 18.9C83.83 18.31 83.31 17.86 82.63 17.54C81.95 17.2 81.16 17.04 80.27 17.04C79.53 17.04 78.85 17.16 78.23 17.4C77.6 17.64 77.05 17.97 76.59 18.4C76.13 18.81 75.8 19.3 75.59 19.87L77.73 20.92C77.93 20.42 78.24 20.03 78.67 19.74C79.11 19.43 79.61 19.28 80.17 19.28C80.77 19.28 81.25 19.44 81.61 19.76C81.98 20.06 82.17 20.45 82.17 20.92L82.17 21.27L78.93 21.8C78.07 21.93 77.37 22.16 76.81 22.48C76.25 22.8 75.83 23.2 75.57 23.68C75.3 24.14 75.17 24.68 75.17 25.28C75.17 25.9 75.32 26.46 75.63 26.94C75.93 27.4 76.37 27.76 76.93 28.02ZM82.17 23.27L79.43 23.74C78.91 23.83 78.52 24 78.27 24.24Q78.14 24.36 78.05 24.5Q77.89 24.79 77.89 25.18C77.89 25.55 78.03 25.85 78.31 26.08Q78.35 26.11 78.4 26.14Q78.81 26.4 79.39 26.4C79.93 26.4 80.41 26.28 80.83 26.06C81.25 25.82 81.58 25.49 81.81 25.08C82.05 24.66 82.17 24.21 82.17 23.72L82.17 23.27ZM97.4 27.64C98.24 28.14 99.22 28.4 100.34 28.4Q101.46 28.4 102.38 28.06C103 27.83 103.54 27.52 104 27.12C104.45 26.72 104.78 26.26 105 25.74L102.88 24.7C102.64 25.12 102.3 25.46 101.88 25.72C101.46 25.97 100.96 26.1 100.36 26.1C99.76 26.1 99.22 25.96 98.76 25.68C98.3 25.4 97.96 25 97.72 24.5C97.58 24.18 97.49 23.83 97.46 23.46L105.3 23.46C105.35 23.31 105.38 23.14 105.4 22.94C105.42 22.74 105.44 22.54 105.44 22.36Q105.44 21.26 105.08 20.32C104.84 19.68 104.49 19.11 104.04 18.62C103.58 18.12 103.03 17.74 102.38 17.45C101.74 17.18 100.99 17.04 100.14 17.04C99.12 17.04 98.2 17.28 97.38 17.78C96.56 18.27 95.92 18.94 95.44 19.79Q95.42 19.82 95.41 19.84Q94.74 21.08 94.74 22.7Q94.74 23.92 95.16 24.98Q95.28 25.29 95.44 25.58C95.9 26.44 96.56 27.13 97.4 27.64ZM97.51 21.46C97.55 21.23 97.62 21.01 97.7 20.82C97.92 20.28 98.25 19.88 98.68 19.62C99.1 19.34 99.59 19.2 100.14 19.2C100.71 19.2 101.2 19.34 101.6 19.62C102.01 19.9 102.3 20.28 102.48 20.76C102.56 20.97 102.62 21.21 102.64 21.46L97.51 21.46ZM107.42 17.28L107.42 28.16L110.04 28.16L110.04 22.1Q110.04 20.99 110.59 20.32Q110.65 20.25 110.72 20.18Q110.91 19.98 111.14 19.84Q111.72 19.48 112.52 19.48L113.46 19.48L113.46 17.16L112.82 17.16C112.06 17.16 111.41 17.32 110.86 17.64C110.45 17.88 110.13 18.27 109.88 18.81L109.88 17.28L107.42 17.28ZM115.36 32.5Q115.78 32.58 116.22 32.58Q117.24 32.58 118.02 32.18C118.56 31.92 119.02 31.55 119.42 31.06C119.82 30.56 120.16 29.96 120.44 29.26L125.18 17.28L122.34 17.28L119.54 24.78L116.72 17.28L113.9 17.28L118.21 28.16L117.96 28.74Q117.64 29.42 117.22 29.84C116.96 30.12 116.52 30.26 115.92 30.26C115.71 30.26 115.48 30.24 115.22 30.2C114.98 30.16 114.78 30.12 114.6 30.08L114.6 32.28C114.83 32.38 115.08 32.46 115.36 32.5Z"
                  fill="#100A55"
                  fillOpacity="1.000000"
                  fillRule="evenodd"
                />
                <rect
                  id="Frame"
                  rx="0.000000"
                  width="31.000000"
                  height="31.000000"
                  transform="translate(8.500000 4.500000)"
                  fill="#FFFFFF"
                  fillOpacity="0"
                />
                <g clipPath="url(#clip23_435)">
                  <path
                    id="Vector"
                    d="M33.33 15.61L26.22 10.08C25.59 9.59 24.83 9.33 24.04 9.33C23.24 9.33 22.48 9.59 21.85 10.08L14.74 15.61C14.31 15.94 13.97 16.37 13.73 16.85C13.49 17.34 13.37 17.87 13.37 18.42L13.37 28.02C13.37 28.72 13.65 29.4 14.15 29.9C14.65 30.4 15.33 30.68 16.04 30.68L32.04 30.68C32.74 30.68 33.42 30.4 33.92 29.9C34.42 29.4 34.7 28.72 34.7 28.02L34.7 18.42C34.7 17.32 34.2 16.28 33.33 15.61Z"
                    fill="#7065F0"
                    fillOpacity="1.000000"
                    fillRule="nonzero"
                  />
                  <path
                    id="Vector"
                    d="M26.22 10.08C25.59 9.59 24.83 9.33 24.04 9.33C23.24 9.33 22.48 9.59 21.85 10.08L14.74 15.61C14.31 15.94 13.97 16.37 13.73 16.85C13.49 17.34 13.37 17.87 13.37 18.42L13.37 28.02C13.37 28.72 13.65 29.4 14.15 29.9C14.65 30.4 15.33 30.68 16.04 30.68L32.04 30.68C32.74 30.68 33.42 30.4 33.92 29.9C34.42 29.4 34.7 28.72 34.7 28.02L34.7 18.42C34.7 17.32 34.2 16.28 33.33 15.61L26.22 10.08Z"
                    stroke="#7065F0"
                    strokeOpacity="1.000000"
                    strokeWidth="3.000000"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector"
                    d="M29.33 24C26.38 25.77 21.61 25.77 18.66 24"
                    stroke="#F9FAFB"
                    strokeOpacity="1.000000"
                    strokeWidth="3.000000"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </g>
              </g>
            </svg>
          </a>
          <ul className={styles.header__menu}>
            <li className={styles.header__link}>
              <a href="#rent">Rent</a>
            </li>
            <li className={styles.header__link}>
              <a href="#buy">Buy</a>
            </li>
            <li className={styles.header__link}>
              <a href="#sell">Sell</a>
            </li>
            <li className={styles.header__link}>
              <a href="#property">Manage Property</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clipRule="evenodd"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            </li>
            <li className={styles.header__link}>
              <a href="#resources">Resources</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clipRule="evenodd"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </svg>
            </li>
          </ul>
          <div className={styles.header__auth}>
            <a href="/login" className={`btn ${styles.button__login}`}>
              Login
            </a>
            <a href="/signup" className={`btn ${styles.button__signup}`}>
              Sign Up
            </a>
          </div>
          <button
            className={`${styles.header__bars} ${
              mobileNavOpen ? styles.isOpen : ""
            }`}
            onClick={toggleMobileNav}
            aria-label="Toggle mobile navigation"
          >
            {/* Hamburger Menu Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </nav>
      </header>

      <div
        className={`${mobileStyles["mobile-nav"]} ${
          mobileNavOpen ? mobileStyles["mobile-nav--active"] : ""
        }`}
      >
        <nav role="navigation" aria-label="Mobile navigation">
          <ul className={mobileStyles["mobile-nav__menu"]}>
            <li>
              <a
                href="#buy"
                className={mobileStyles["mobile-nav__link"]}
                onClick={toggleMobileNav}
              >
                Buy
              </a>
            </li>
            <li>
              <a
                href="#sell"
                className={mobileStyles["mobile-nav__link"]}
                onClick={toggleMobileNav}
              >
                Sell
              </a>
            </li>
            <li>
              <a
                href="#property"
                className={mobileStyles["mobile-nav__link"]}
                onClick={toggleMobileNav}
              >
                Manage Property
              </a>
            </li>
            <li>
              <a
                href="#resources"
                className={mobileStyles["mobile-nav__link"]}
                onClick={toggleMobileNav}
              >
                Resources
              </a>
            </li>
            <li>
              <a
                href="/login"
                className={`btn ${styles.button__login} ${mobileStyles["mobile-nav__btn"]}`}
                onClick={toggleMobileNav}
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/signup"
                className={`btn ${styles.button__signup} ${mobileStyles["mobile-nav__btn"]}`}
                onClick={toggleMobileNav}
              >
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
