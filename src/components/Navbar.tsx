// src/components/Navbar.tsx
import React, { useState } from "react";

export default function Navbar() {
  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <img src="/logo.svg" alt="QMclean" className="h-10" />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 text-gray-700">
          <a href="#home" className="hover:text-brand">
            Home
          </a>
          <a href="#services" className="hover:text-brand">
            Services
          </a>
          <a href="#about" className="hover:text-brand">
            About
          </a>
          <a href="#contact" className="hover:text-brand">
            Contact
          </a>
        </nav>

        {/* CTA */}
        <button className="hidden lg:inline-block bg-brand text-white px-4 py-2 rounded hover:bg-brand-600">
          Get a Quote
        </button>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button aria-label="Open Menu">
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
