export interface CardProps {
    title: string;
    description: string;
    imageUrl?: string;
    price?: number;
  }
  
  export interface ButtonProps {
    label: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
  }

  export interface Address {
    city: string;
    country: string;
  }
  
  export interface Review {
    name: string;
    avatar: string;
    rating: number;
    comment: string;
  }
  
  export interface PropertyProps {
    id: string;
    name: string;
    description: string;
    price: number;
    rating: number;
    image: string;
    category: string[];
    address: Address;
    reviews: Review[];
  }