import Head from "next/head";
import Top from '../components/Top';
import About from '../components/About';

export default function Home() {
  return (
    <div>
      <Head>
        <title>まごラブ</title>
        <link rel="icon" href="image/icon.png" />
      </Head>
       <Top />
       <About />
    </div>
  );
}
