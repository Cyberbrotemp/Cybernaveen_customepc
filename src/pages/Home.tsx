import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Laptop2 } from 'lucide-react';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to Quantum Build</h1>
      <p className="text-xl mb-12">Your Ultimate Destination for Custom PCs and Premium Laptops</p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Link
          to="/custom-pc"
          className="p-8 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
        >
          <Monitor className="w-16 h-16 mx-auto mb-4 text-blue-600" />
          <h2 className="text-2xl font-bold mb-4">Build Your Custom PC</h2>
          <p>Create your dream PC with our component selector</p>
        </Link>

        <Link
          to="/laptops"
          className="p-8 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
        >
          <Laptop2 className="w-16 h-16 mx-auto mb-4 text-blue-600" />
          <h2 className="text-2xl font-bold mb-4">Browse Laptops</h2>
          <p>Explore our collection of premium laptops</p>
        </Link>
      </div>
    </div>
  );
}