import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Company</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Building innovative solutions to empower businesses and individuals. Let’s make a difference together!
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Quick Links</h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Resources</h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.1 3.66 9.32 8.44 10v-7.1H8.31v-2.9h2.13V9.87c0-2.1 1.27-3.25 3.22-3.25.93 0 1.9.17 1.9.17v2.1h-1.07c-1.06 0-1.4.66-1.4 1.33v1.6h2.39l-.38 2.9h-2.01v7.1c4.78-.68 8.44-4.9 8.44-10z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                aria-label="Twitter"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.64 7.12c.01.15.01.3.01.45 0 4.57-3.48 9.83-9.83 9.83-1.95 0-3.76-.57-5.29-1.55.27.03.55.05.83.05 1.62 0 3.11-.55 4.29-1.47a3.45 3.45 0 0 1-3.22-2.4c.22.04.44.06.67.06.33 0 .66-.04.97-.13a3.43 3.43 0 0 1-2.76-3.37v-.04c.46.26.99.42 1.56.44a3.44 3.44 0 0 1-1.07-4.6 9.78 9.78 0 0 0 7.1 3.6c-.32-1.56.81-3.1 2.38-3.1.7 0 1.34.29 1.79.75a6.87 6.87 0 0 0 2.19-.83 3.44 3.44 0 0 1-1.51 1.89 6.84 6.84 0 0 0 1.97-.53 7.35 7.35 0 0 1-1.72 1.79z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.75 8c-1.56 0-2.5.79-2.92 1.35v-.35H12V20h1.83v-5.22c0-1.25.5-2.09 1.75-2.09s1.83 1 1.83 2.11V20h1.83v-5.47c0-2.46-1.33-3.53-3.49-3.53zM9 20H7V10h2v10zM8 9H7c-.33 0-.66-.33-.66-.66s.33-.66.66-.66h.33c.33 0 .66.33.66.66s-.33.66-.66.66z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-300 dark:border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2024 Brand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
