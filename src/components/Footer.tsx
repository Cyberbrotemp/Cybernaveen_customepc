import React from 'react';
import { Github, Instagram, Send, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-lg mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Quantum Build</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your ultimate destination for custom PCs and premium laptops.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Email: info@quantumbuild.com<br />
              Phone: +1 234 567 890
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                <Send className="w-5 h-5" />
              </a>
              <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Quantum Build. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}