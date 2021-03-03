import Head from "next/head";
import Top from '../components/Top';

export default function Home() {
  return (
    <div>
      <Head>
        <title>まごラブ</title>
        <link rel="icon" href="/icon.png" />
      </Head>
       <Top />
    </div>
  );
}
