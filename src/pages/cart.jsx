import { CartControls } from '@/components/cart';
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
          <header className="flex justify-between">
            <div>
              {/* add components/ui|common/ContinueShopping.jsx sau Link */}
            </div>

            <div className="border-l border-zinc-200">
              <CartControls></CartControls>
            </div>
          </header>
        </main>
      </Layout>
    </>
  );
};

export default CartPage;
