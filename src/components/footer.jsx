import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <Image
                src="/logo.svg"
                alt="Squirrel Logo"
                width={32}
                height={32}
                className="mr-2"
              />
              <span className="text-white text-xl font-semibold">Squirrel</span>
            </div>
            <p className="text-squirrel-neutral-100 text-sm mb-4 text-center md:text-left">
              Accelerating search experiences with intelligent retrieval
              technology.
            </p>
            {/* <div className="flex space-x-4">
              <a
                href="#"
                className="text-squirrel-neutral-100 hover:text-squirrel-primary-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="#"
                className="text-squirrel-neutral-100 hover:text-squirrel-primary-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-squirrel-neutral-100 hover:text-squirrel-primary-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                className="text-squirrel-neutral-100 hover:text-squirrel-primary-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div> */}
          </div>
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <h3 className="text-white font-medium text-lg mb-4 text-center md:text-left">
              Quick Links
            </h3>
            <ul className="space-y-3 text-center md:text-left">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-squirrel-neutral-100 hover:text-squirrel-primary-500 transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <h3 className="text-white font-medium text-lg mb-4 text-center md:text-left">
              Products
            </h3>
            <ul className="space-y-3 text-center md:text-left">
              <li>
                <Link
                  href="#"
                  className="text-squirrel-neutral-100 hover:text-squirrel-primary-500 transition-colors text-sm"
                >
                  AI Chatbot
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-squirrel-neutral-100 hover:text-squirrel-primary-500 transition-colors text-sm"
                >
                  AI Social Media Management Platform
                </Link>
              </li>
            </ul>
          </div> */}

          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <h3 className="text-white font-medium text-lg mb-4 text-center md:text-left">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start text-sm justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 mt-0.5 text-squirrel-primary-500 flex-shrink-0"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="text-squirrel-neutral-100">
                  +91 94496 10077
                </span>
              </li>
              <li className="flex items-start text-sm justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 mt-0.5 text-squirrel-primary-500 flex-shrink-0"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="text-squirrel-neutral-100">
                  info@thesquirrel.tech
                </span>
              </li>

              {/* <li className="flex items-start text-sm justify-center md:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 mt-0.5 text-squirrel-primary-500 flex-shrink-0"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-squirrel-neutral-100 text-center md:text-left">
                  456 Tech Park Road,
                  <br />
                  Bangalore, Karnataka 560103
                </span>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
            <p className="text-squirrel-neutral-200 text-sm mb-4 md:mb-0 text-center md:text-left">
              © {currentYear} Squirrel. All rights reserved.
            </p>
            {/* <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6 items-center">
              <Link
                href="#"
                className="text-squirrel-neutral-200 hover:text-squirrel-primary-500 transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-squirrel-neutral-200 hover:text-squirrel-primary-500 transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-squirrel-neutral-200 hover:text-squirrel-primary-500 transition-colors text-sm"
              >
                Sitemap
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
