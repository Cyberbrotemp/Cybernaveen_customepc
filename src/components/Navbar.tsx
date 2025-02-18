import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Laptop2, Bell, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { speak } from '../utils/speech';

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
}

export default function Navbar() {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: 'New RTX 4080 SUPER in Stock!',
      message: 'The latest NVIDIA RTX 4080 SUPER is now available for custom builds.',
      time: '2 hours ago'
    },
    {
      id: 2,
      title: 'Special Offer',
      message: 'Get 10% off on all gaming laptops this week.',
      time: '1 day ago'
    }
  ]);

  useEffect(() => {
    speak('Welcome to Quantum Build - Your Ultimate PC and Laptop Store');
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg relative">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Monitor className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold">Quantum Build</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/custom-pc" className="hover:text-blue-600 transition-colors">
              Custom PC
            </Link>
            <Link to="/laptops" className="hover:text-blue-600 transition-colors">
              Laptops
            </Link>
            <Link to="/developer" className="hover:text-blue-600 transition-colors">
              Developer
            </Link>
            <div className="relative">
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="relative hover:text-blue-600 transition-colors"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  {notifications.length}
                </span>
              </button>

              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 z-50">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold">Notifications</h3>
                    <button
                      onClick={() => setIsNotificationsOpen(false)}
                      className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.map(notification => (
                      <div
                        key={notification.id}
                        className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
                      >
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium text-sm">{notification.title}</h4>
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            {notification.time}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                          {notification.message}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <ThemeToggle />
          </div>

          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}