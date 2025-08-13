import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 px-4">
      <div
        className="
          container py-10 grid gap-8
          vsm:grid-cols-1
          xmd:grid-cols-2
          lg:grid-cols-4
        "
      >
        <div>
          <div className="flex items-center gap-2">
            <img src="/logo.svg" alt="DemoClean" className="h-8 w-8" />
            <span className="font-semibold">DemoClean</span>
          </div>
          <p className="muted mt-3">Clean spaces. Clear minds.</p>
        </div>
        <div>
          <p className="font-semibold">Company</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a className="hover:text-brand" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-brand" href="#process">
                Process
              </a>
            </li>
            <li>
              <a className="hover:text-brand" href="#pricing">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Support</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a className="hover:text-brand" href="#faq">
                FAQ
              </a>
            </li>
            <li>
              <a className="hover:text-brand" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <p className="text-sm mt-3">Lagos, Nigeria</p>
          <p className="text-sm mt-1">
            <a className="text-brand" href="tel:+2348000000000">
              +234 800 000 0000
            </a>
          </p>
          <p className="text-sm mt-1">
            <a className="text-brand" href="mailto:hello@DemoClean.com.ng">
              hello@DemoClean.com.ng
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-gray-100 px-4">
        <div className="container py-6 text-xs text-gray-500 flex flex-wrap items-center justify-between gap-2">
          <span>
            © {new Date().getFullYear()} DemoClean. All rights reserved.
          </span>
          <a href="#top" className="hover:text-brand">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
