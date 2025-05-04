import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light border-t-2 border-gray-200 py-16 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <Link to="/" className="flex items-center mb-4">
            <div className="text-xl font-serif">
              Still <span className="text-primary">+</span> Online (Serenispace)
            </div>
          </Link>
          <p className="text-sm opacity-70 mb-4">
            Spaces designed to bring stillness into your everyday life through
            mindful rituals and peaceful environments.
          </p>
        </div>

        <div>
          <h4 className="font-medium mb-4">Pages</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-primary">
                Products
              </Link>
            </li>
            <li>
              <Link to="/journal" className="hover:text-primary">
                Journal
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/privacy" className="hover:text-primary">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-primary">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link to="/cookies" className="hover:text-primary">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>hello@stillonline.com</li>
            <li>(+234) 8168671730</li>
            <li>123 Peaceful St, Mindful City</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-12 pt-6 text-sm opacity-70">
        <p>© 2025 Still + Online. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
