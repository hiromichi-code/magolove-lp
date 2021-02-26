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
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
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
        </div>
      </main>
    </div>
  );
}
