// pages/index.js
import React from 'react';
import ProductCard from '@/components/productCard';
import ProductSec from '@/components/ProductSec';
import Head from 'next/head';

const Home = ({ products }) => {
  return (
    <>
      <Head>
        <title>nextShop</title>
        <meta name="description" content="Description of the Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Nextshop" />
        <meta property="og:description" content="description" />
        <meta property="og:image" content="" />
      </Head>

      <ProductSec>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductSec>

    </>
  );
};


// in this page i will use SSR
export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/products');
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

export default Home;
