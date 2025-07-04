export interface CardProps {
  id: string;
  title: string;
  brand: string;
  price: number;
  imgSrc: string;
}

export interface ProductDetail extends CardProps {
  description: string;
  specifications: string[];
  images: string[];
  category: string;
  inStock: boolean;
  sku: string;
}
