import React, { useState } from 'react';
import { Download, Share2, Check } from 'lucide-react';
import { speak } from '../utils/speech';
import type { Component, UserInfo } from '../types';
import { components } from '../data/components';

interface ComponentSelection {
  processor?: Component;
  motherboard?: Component;
  ram?: Component;
  storage?: Component;
  gpu?: Component;
  psu?: Component;
  case?: Component;
}

export default function CustomPC() {
  const [selection, setSelection] = useState<ComponentSelection>({});
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const calculateTotal = () => {
    const subtotal = Object.values(selection).reduce((sum, component) => 
      sum + (component?.price || 0), 0);
    const gst = subtotal * 0.18;
    return { subtotal, gst, total: subtotal + gst };
  };

  const { subtotal, gst, total } = calculateTotal();

  const handleComponentSelect = (category: keyof ComponentSelection, component: Component) => {
    setSelection(prev => ({ ...prev, [category]: component }));
    speak(`Selected ${component.name} for ${category}`);
  };

  const generatePDF = () => {
    // PDF generation logic will be implemented here
    console.log('Generating PDF...');
  };

  const shareOnWhatsApp = () => {
    const message = `New PC Build Order from ${userInfo.name}:\n` +
      Object.entries(selection).map(([category, component]) => 
        `${category}: ${component?.name} - ₹${component?.price}`
      ).join('\n') +
      `\nTotal: ₹${total}`;
    
    window.open(`https://wa.me/xxxxx?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Build Your Custom PC</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="space-y-6">
            {Object.entries(components).map(([category, items]) => (
              <div key={category} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4 capitalize">{category}</h2>
                <div className="space-y-4">
                  {items.map((component) => (
                    <div
                      key={component.id}
                      className={`relative p-4 rounded-lg border-2 transition-colors cursor-pointer ${
                        selection[category as keyof ComponentSelection]?.id === component.id
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
                      }`}
                      onClick={() => handleComponentSelect(category as keyof ComponentSelection, component)}
                    >
                      <div className="flex items-start gap-4">
                        <img
                          src={component.image}
                          alt={component.name}
                          className="w-24 h-24 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold">{component.name}</h3>
                          <ul className="mt-2 space-y-1 text-sm text-gray-600 dark:text-gray-300">
                            {component.specs.map((spec, index) => (
                              <li key={index}>{spec}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-bold">₹{component.price.toLocaleString()}</span>
                          {selection[category as keyof ComponentSelection]?.id === component.id && (
                            <div className="absolute top-2 right-2">
                              <Check className="w-5 h-5 text-blue-500" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sticky top-4 h-fit">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {Object.entries(selection).map(([category, component]) => (
                component && (
                  <div key={category} className="flex justify-between text-sm">
                    <span className="capitalize">{category}</span>
                    <span>₹{component.price.toLocaleString()}</span>
                  </div>
                )
              ))}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (18%)</span>
                  <span>₹{gst.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-bold text-lg mt-2">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <button
                onClick={generatePDF}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </button>
              <button
                onClick={shareOnWhatsApp}
                className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Share on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}