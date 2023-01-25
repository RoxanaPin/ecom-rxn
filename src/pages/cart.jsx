import { Layout } from '@/layouts';
import Head from 'next/head';

const CartPage = () => {
  return (
    <>
      <Head>
        <title>Cart - Pixellab Ecom App</title>
      </Head>

      <Layout>
        <main className="container px-4 mx-auto">
          <h1>Welcome to the cart page</h1>
        </main>
      </Layout>
    </>
  );
};

export default CartPage;
