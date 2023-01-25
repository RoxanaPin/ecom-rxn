import { CartControls } from '@/components/cart';
import { GridControls, ProductGrid } from '@/components/catalog';
import { Layout } from '@/layouts';
import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [perRow, setItemsPerRow] = useState('4/row');

  console.log('render home');

  return (
    <>
      <Head>
        <title>Home - Pixellab Ecom App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className="container px-4 mx-auto">
          <header className="flex justify-end">
            <GridControls set={setItemsPerRow}></GridControls>
            <CartControls></CartControls>
          </header>

          <section className="mt-16">
            <ProductGrid perRow={perRow}></ProductGrid>
          </section>
        </main>
      </Layout>
    </>
  );
}
