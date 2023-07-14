"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchProductData } from "@/lib/fetchProductData";
import { Product } from "@/lib/productData";
import Image from "next/image";
import Search from "@/components/Search";
import Cart from "@/components/Cart";



const ListingPage = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [productData, setProductData] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductData();
        setProductData(data);
      } catch (error) {
        console.error(error);
        setProductData([]);
      }
    };

    fetchData();
  }, []);

  const handleProductClick = (productId: number) => {
    router.push(`/${productId}`);
  };

  const handleAddToCart = (product: Product) => {
    // Check if the product already exists in the cart
    const isProductInCart = cart.some((item) => item.id === product.id);
    
    if (isProductInCart) {
      // Product already exists in the cart, do not add it again
      return;
    }
    
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div>
      <Search search={search} setSearch={setSearch} />
      <h1>Product Listing</h1>
      {productData
        .filter((data) => data.name.toLowerCase().includes(search.toLowerCase()))
        .map((product: Product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <Image src={product.imageUrl} alt={product.name} width={50} height={50} className="bg-white" />
            <button onClick={() => handleProductClick(product.id)}>View Details</button>
            <br />
            <button onClick={() => handleAddToCart(product)} className="bg-slate-700">
              Add to Cart
            </button>
            <button onClick={() => handleRemoveFromCart(product.id)}>Remove</button>

          </div>
        ))}
  <Cart cartItems={cart} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
};

export default ListingPage;