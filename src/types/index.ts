export interface Address {
  id: number;
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Notification {
  id: number;
  title: string;
  message: string;
  isRead: boolean;
}

export interface Order {
  id: string;
  status: "Ожидается" | "В пути" | "Доставлен";
  address: string;
  createdAt: Date;
  total: number;
};

export interface PaymentMethod {
  id: number;
  cardNumber: string;
  expiryDate: string;
  cardHolder: string;
}

export interface ProfileData {
  name: string,
  email: string,
  phone: string,
  avatar: string,
}