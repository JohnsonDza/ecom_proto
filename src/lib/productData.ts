export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  availability: boolean;
  rating: number;
  brand: string;
  color: string;
}

export const productData: Product[] = [
  {
    id: 1,
    name: "Product 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 9.99,
    imageUrl: "/vercel.svg",
    category: "Electronics",
    availability: true,
    rating: 4.5,
    brand: "Example Brand",
    color: "Black"
  },
  {
    id: 2,
    name: "Product 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 19.99,
    imageUrl: "/vercel.svg",
    category: "Electronics",
    availability: true,
    rating: 3.8,
    brand: "Example Brand",
    color: "Silver"
  },
  // Add the rest of the products here...
];
