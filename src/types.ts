export interface Component {
  id: string;
  category: string;
  name: string;
  price: number;
  image: string;
  specs: string[];
}

export interface Laptop {
  id: string;
  brand: string;
  model: string;
  category: string;
  price: number;
  image: string;
  specs: string[];
}

export interface UserInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export interface Order {
  items: (Component | Laptop)[];
  userInfo: UserInfo;
  totalPrice: number;
  gst: number;
  finalPrice: number;
  paymentMethod: string;
}