import { Layout } from '@/layouts';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pixellab Ecom App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main>this is main</main>
      </Layout>
    </>
  );
}
