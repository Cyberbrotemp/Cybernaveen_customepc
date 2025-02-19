
import React from 'react';
import { Github, Instagram, Globe, Send } from 'lucide-react';

export default function Developer() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative h-64 rounded-lg overflow-hidden mb-8">
        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97"
          alt="Developer workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Meet the Developer</h1>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="https://media.licdn.com/dms/image/v2/C4D03AQGqUl231d6gJQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1660921925294?e=2147483647&v=beta&t=NLM96HjTEHrpk2ArgaivuI3xqRqpFa51Q3depnqvRoI"
            alt="Developer"
            className="w-48 h-48 rounded-full object-cover"
          />
          <div>
            <h2 className="text-2xl font-bold mb-4">Cybernaveen</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Cybernaveen is an ethical hacker, Python developer, and penetration tester.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/naveenhacking"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/kgf_kgf_hackers"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="https://kgfhacker.blogspot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
