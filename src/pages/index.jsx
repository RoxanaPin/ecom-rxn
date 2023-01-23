import { Layout } from '@/layouts';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, [setProducts]);

  return (
    <>
      <Head>
        <title>Pixellab Ecom App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main>
          {products.map((product) => {
            return <span key={product.id}>{product.title}</span>;
          })}
        </main>
      </Layout>
    </>
  );
}
