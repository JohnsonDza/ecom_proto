"use client"
import React, { useEffect, useState } from 'react';
import { fetchProductData } from '@/lib/fetchProductData';
import { Product } from '@/lib/productData';
import Image from "next/image";

const ProductDetailsPage = ({params,cart,setCart}:any) => {
  console.log(params.product)
  const id = params.product

  const  productId  = id;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductData();
        const selectedProduct = data.find((product) => product.id === Number(productId));
        setProduct(selectedProduct || null);
      } catch (error) {
        console.error(error);
        setProduct(null);
      }
    };

    if (productId) {
      fetchData();
    }
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <Image src={product.imageUrl} alt={product.name} width={500} height={500} className="bg-white"/>
      <p>{product.description}</p>
      Additional product details
 
      <p>
  
      </p>
    </div>
  );
};

export default ProductDetailsPage;
