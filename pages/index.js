import Head from "next/head";
import { css } from "lightwindcss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MagoloveのLP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div
          className={css`
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          `}
        >
          <h1
            className={css`
              color: pink;
              margin: 0;
            `}
          >
            MagoloveのLPはNext.jsで記述します
          </h1>
          <a href='https://mago-love.com/' className={css`
            color: blue;
            text-decoration: underline;
          `}>まごラブ</a>
        </div>
      </main>
    </div>
  );
}
