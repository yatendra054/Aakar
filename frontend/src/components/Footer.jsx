import React from "react";
import { assets } from "../assets/assets"; // Adjust the path to your assets folder

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-10">
      <div className="container mx-auto grid grid-cols-4 gap-9 text-center pl-20 ">
        {/* Logo & Social Icons */}
        <div className="flex flex-col items-start">
          <img
            src={assets.logo_white}
            alt="Aakar Logo"
            className="w-[4rem] mb-8 ml-20 "
          />
          <div className="flex space-x-4 ml-10">
            {/* Social Media Icons */}
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <img
                src={assets.twitter}
                alt="X"
                className="w-8 opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out"
              />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <img
                src={assets.Github}
                alt="GitHub"
                className="w-8 opacity-60 hover:opacity-90 transition-opacity duration-300 ease-in-out"
              />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img
                src={assets.instagram}
                alt="Instagram"
                className="w-8 opacity-60 hover:opacity-90 transition-opacity duration-300 ease-in-out"
              />
            </a>
          </div>
        </div>

        {/* Company Section */}
        <div>
          <h4 className="font-semibold text-xl mb-4 text-gray-100 ">Company</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:underline hover:text-blue-200"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:underline hover:text-blue-200"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:underline hover:text-blue-200"
              >
                Security
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:underline hover:text-blue-200"
              >
                Status
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:underline hover:text-blue-200"
              >
                Terms & privacy
              </a>
            </li>
          </ul>
        </div>

        {/* Download Section */}
        <div>
          <h4 className="font-semibold text-xl mb-4 text-gray-100">Download</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:underline hover:text-blue-200"
              >
                iOS & Android
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:underline hover:text-blue-200"
              >
                Mac & Windows
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:underline hover:text-blue-200"
              >
                Calendar
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:underline hover:text-blue-200"
              >
                Web Clipper
              </a>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h4 className="font-semibold text-xl mb-4 text-gray-100">
            Resources
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:underline hover:text-blue-200"
              >
                Help center
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:underline hover:text-blue-200"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:underline hover:text-blue-200"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:underline hover:text-blue-200"
              >
                Community
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:underline hover:text-blue-200"
              >
                Integrations
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:underline hover:text-blue-200"
              >
                Templates
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:underline hover:text-blue-200"
              >
                Affiliates
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
