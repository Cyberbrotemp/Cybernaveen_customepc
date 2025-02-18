import React, { useState } from 'react';
import { Search, Download, Share2 } from 'lucide-react';
import { speak } from '../utils/speech';
import type { Laptop } from '../types';

const laptops = [
  {
    id: '1',
    brand: 'ASUS',
    model: 'ROG Strix G16',
    category: 'Gaming Laptops',
    price: 149999,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
    specs: [
      'Intel Core i9-14900HX',
      'NVIDIA RTX 4080 16GB',
      '32GB DDR5 RAM',
      '2TB NVMe SSD',
      '16" QHD+ 240Hz'
    ]
  },
  {
    id: '2',
    brand: 'Dell',
    model: 'XPS 17',
    category: 'Professional',
    price: 229999,
    image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6',
    specs: [
      'Intel Core i9-13900H',
      'NVIDIA RTX 4070 8GB',
      '32GB DDR5 RAM',
      '1TB NVMe SSD',
      '17" 4K Touch Display'
    ]
  },
  {
    id: '3',
    brand: 'Lenovo',
    model: 'ThinkPad X1 Carbon',
    category: 'Professional',
    price: 139999,
    image: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5',
    specs: [
      'Intel Core i7-1360P',
      'Intel Iris Xe Graphics',
      '16GB LPDDR5 RAM',
      '1TB NVMe SSD',
      '14" 2.8K OLED'
    ]
  },
  {
    id: '4',
    brand: 'MSI',
    model: 'Creator Z17',
    category: 'Creator Edition',
    price: 189999,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed',
    specs: [
      'Intel Core i9-13900H',
      'NVIDIA RTX 4070 8GB',
      '32GB DDR5 RAM',
      '2TB NVMe SSD',
      '17" QHD+ Touch 165Hz'
    ]
  },
  {
    id: '5',
    brand: 'HP',
    model: 'Pavilion 15',
    category: 'Student',
    price: 54999,
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed',
    specs: [
      'AMD Ryzen 5 7535U',
      'AMD Radeon Graphics',
      '16GB DDR4 RAM',
      '512GB NVMe SSD',
      '15.6" FHD IPS'
    ]
  }
];

const categories = [
  'All Laptops',
  'Gaming Laptops',
  'Professional',
  'Student',
  'Creator Edition'
];

const brands = ['All Brands', 'ASUS', 'Dell', 'HP', 'Lenovo', 'MSI'];

export default function Laptops() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Laptops');
  const [selectedBrand, setSelectedBrand] = useState('All Brands');

  const filteredLaptops = laptops.filter(laptop => {
    const matchesSearch = laptop.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         laptop.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All Laptops' || laptop.category === selectedCategory;
    const matchesBrand = selectedBrand === 'All Brands' || laptop.brand === selectedBrand;
    return matchesSearch && matchesCategory && matchesBrand;
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    speak(`Searching for ${e.target.value}`);
  };

  const generatePDF = (laptop: Laptop) => {
    // PDF generation logic will be implemented here
    console.log('Generating PDF for laptop:', laptop);
  };

  const shareOnWhatsApp = (laptop: Laptop) => {
    const message = `Interested in ${laptop.brand} ${laptop.model}\n` +
      `Price: ₹${laptop.price}\n` +
      `Specs:\n${laptop.specs.join('\n')}`;
    
    window.open(`https://wa.me/xxxxx?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Browse Laptops</h1>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search laptops..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
            />
          </div>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2"
          >
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLaptops.map(laptop => (
          <div key={laptop.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
              src={laptop.image}
              alt={`${laptop.brand} ${laptop.model}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-semibold">{laptop.brand} {laptop.model}</h2>
                <span className="px-2 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded">
                  {laptop.category}
                </span>
              </div>
              <ul className="text-gray-600 dark:text-gray-300 mb-4 space-y-1">
                {laptop.specs.map((spec, index) => (
                  <li key={index} className="text-sm">{spec}</li>
                ))}
              </ul>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold">₹{laptop.price.toLocaleString()}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => generatePDF(laptop)}
                    className="p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    <Download className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => shareOnWhatsApp(laptop)}
                    className="p-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}