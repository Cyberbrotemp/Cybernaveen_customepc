export const components = {
  processor: [
    {
      id: 'cpu-1',
      category: 'processor',
      name: 'AMD Ryzen 7 7800X3D',
      price: 42999,
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea',
      specs: [
        '8 Cores, 16 Threads',
        '4.2 GHz Base, 5.0 GHz Boost',
        '96MB Cache',
        'AM5 Socket'
      ]
    },
    {
      id: 'cpu-2',
      category: 'processor',
      name: 'Intel Core i7-14700K',
      price: 39999,
      image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086',
      specs: [
        '20 Cores (8P + 12E), 28 Threads',
        '3.4 GHz Base, 5.6 GHz Boost',
        '33MB Cache',
        'LGA 1700 Socket'
      ]
    },
    {
      id: 'cpu-3',
      category: 'processor',
      name: 'AMD Ryzen 5 7600X',
      price: 27999,
      image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea',
      specs: [
        '6 Cores, 12 Threads',
        '4.7 GHz Base, 5.3 GHz Boost',
        '32MB Cache',
        'AM5 Socket'
      ]
    }
  ],
  motherboard: [
    {
      id: 'mb-1',
      category: 'motherboard',
      name: 'ASUS ROG STRIX X670E-E GAMING',
      price: 49999,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      specs: [
        'AMD X670E Chipset',
        'AM5 Socket',
        'DDR5 Memory',
        'PCIe 5.0',
        'WiFi 6E'
      ]
    },
    {
      id: 'mb-2',
      category: 'motherboard',
      name: 'MSI MPG Z790 EDGE WIFI',
      price: 39999,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      specs: [
        'Intel Z790 Chipset',
        'LGA 1700 Socket',
        'DDR5 Memory',
        'PCIe 5.0',
        'WiFi 6E'
      ]
    }
  ],
  ram: [
    {
      id: 'ram-1',
      category: 'ram',
      name: 'G.SKILL Trident Z5 RGB 32GB',
      price: 19999,
      image: 'https://images.unsplash.com/photo-1562976540-1502c2145186',
      specs: [
        'DDR5-6000',
        '32GB (2x16GB)',
        'CL30',
        'RGB Lighting'
      ]
    },
    {
      id: 'ram-2',
      category: 'ram',
      name: 'Corsair Vengeance RGB 32GB',
      price: 15999,
      image: 'https://images.unsplash.com/photo-1562976540-1502c2145186',
      specs: [
        'DDR5-5600',
        '32GB (2x16GB)',
        'CL36',
        'RGB Lighting'
      ]
    }
  ],
  storage: [
    {
      id: 'storage-1',
      category: 'storage',
      name: 'Samsung 990 PRO 2TB',
      price: 24999,
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b',
      specs: [
        'NVMe PCIe 4.0',
        '2TB Capacity',
        '7,450 MB/s Read',
        '6,900 MB/s Write'
      ]
    },
    {
      id: 'storage-2',
      category: 'storage',
      name: 'WD Black SN850X 1TB',
      price: 12999,
      image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b',
      specs: [
        'NVMe PCIe 4.0',
        '1TB Capacity',
        '7,300 MB/s Read',
        '6,300 MB/s Write'
      ]
    }
  ],
  gpu: [
    {
      id: 'gpu-1',
      category: 'gpu',
      name: 'NVIDIA RTX 4080 SUPER',
      price: 104999,
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7',
      specs: [
        '16GB GDDR6X',
        '9,728 CUDA Cores',
        '2.5 GHz Boost Clock',
        'Ray Tracing'
      ]
    },
    {
      id: 'gpu-2',
      category: 'gpu',
      name: 'AMD RX 7900 XTX',
      price: 89999,
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7',
      specs: [
        '24GB GDDR6',
        '6,144 Stream Processors',
        '2.5 GHz Game Clock',
        'Ray Tracing'
      ]
    }
  ],
  psu: [
    {
      id: 'psu-1',
      category: 'psu',
      name: 'Corsair RM1000x',
      price: 19999,
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7',
      specs: [
        '1000W',
        '80+ Gold Efficiency',
        'Fully Modular',
        'Zero RPM Fan Mode'
      ]
    },
    {
      id: 'psu-2',
      category: 'psu',
      name: 'be quiet! Dark Power 13',
      price: 24999,
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7',
      specs: [
        '1000W',
        '80+ Titanium Efficiency',
        'Fully Modular',
        'Silent Wings Fan'
      ]
    }
  ],
  case: [
    {
      id: 'case-1',
      category: 'case',
      name: 'Lian Li O11 Dynamic EVO',
      price: 18999,
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7',
      specs: [
        'Mid Tower',
        'Tempered Glass Panels',
        'Excellent Airflow',
        'Tool-free Design'
      ]
    },
    {
      id: 'case-2',
      category: 'case',
      name: 'Fractal Design Torrent',
      price: 21999,
      image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7',
      specs: [
        'High Airflow Design',
        'Tempered Glass Panel',
        '180mm Fans Included',
        'Tool-less Construction'
      ]
    }
  ]
};