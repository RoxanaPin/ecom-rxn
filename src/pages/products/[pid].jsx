// /products/2  /products/5  products/22

import { CartControls } from '@/components/cart';
import { ProductDisplay } from '@/components/catalog/ProductDisplay';
import { Layout } from '@/layouts';
import Head from 'next/head';
import { useRouter } from 'next/router';

const ProductPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <>
      <Head>
        <title>Product - Pixellab Ecom App</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>

      <Layout>
        <main>
          <header className="flex justify-end container mx-auto px-4">
            <div className="border-l border-zinc-200">
              <CartControls></CartControls>
            </div>
          </header>

          <section className="mt-16">
            <ProductDisplay productId={pid}></ProductDisplay>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default ProductPage;
