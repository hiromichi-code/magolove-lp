import Head from "next/head";
import { css } from "lightwindcss";

export default function Home() {
  const mixinPink = css`
    margin: 0;
  `;
  const mixinMain = css`
    margin: 0;
  `;
  const main = css`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 0 24px 24px 0;
    width: 100%;
    height: 90vh;
    flex-direction: column;
    background-image: url('main-image.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    // background-color:rgba(255,255,255,0.7);
    // background-blend-mode:lighten;
    h1 {
      font-size: 24px;
    }
    h2 {
      font-size: 20px;
    }
    @media screen and (min-width:1024px){
      justify-content: flex-start;
      align-items: flex-end;
      padding: 48px 48px 0 0;
      h1 {
        font-size: 40px;
      }
      h2 {
        font-size: 32px;
      }
    }
  `;
  const sub = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10vh;
    background-color: pink;
    color: #fff;
  `;
  return (
    <div
      className={css`
        height: 100vh;
      `}
    >
      <Head>
        <title>まごラブ</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <main>
        <div
          className={`
            ${main}
          `}
        >
          <img src='logo.png' className={css`
            margin-bottom: 16px;
            width: 124px;
            @media screen and (min-width:1024px) {
              width: 160px;
            }
          `}/>
          <h2 className={`${mixinPink}`}>2021年4月1日</h2>
          <h2 className={`${mixinPink}`}>まごラブのモバイルアプリから</h2>
          <h1 className={`${mixinMain}`}>ポストカレンダーと</h1>
          <h1 className={`${mixinMain}`}>ハードカバーの</h1>
          <h1 className={`${mixinMain}`}>フォトブックを</h1>
          <h2 className={`${mixinPink}`}>贈れるようになります</h2>
        </div>
        <div className={`
          ${sub}
        `}>
          <a
            href="https://mago-love.com/"
            className={css`
              &: hover {
                color: blue;
                text-decoration: underline;
              }
            `}
          >
            ご利用方法
          </a>
        </div>
      </main>
    </div>
  );
}
