// pages/products/[id].js
import React from 'react';
import DetailSec from '@/components/DetailSec';
import CommentSec from '@/components/CommentSec';
import Head from 'next/head';

const ProductDetails = ({ product }) => {
  return (
<>
    <Head>
        <title>{product.name}</title>
        <meta name="description" content="Description of the product" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content="description" />
        <meta property="og:image" content={product.img} />
    </Head>
    <DetailSec product={product} />
    <CommentSec />

</>
    );
};

// in this pages i will use SSG

export async function getStaticPaths() {
  // Fetch the list of products from  API
  const res = await fetch('http://localhost:3000/api/products');
  const products = await res.json();

  // Generate paths for each product ID
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch the product data based on the ID from API 
  const res = await fetch(`http://localhost:3000/api/products/${params.id}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}

export default ProductDetails;
