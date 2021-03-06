import { css } from "lightwindcss";

export default function Top(){
  const mixinMain = css`
    margin: 0;
  `;
  const mainStyle = css`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 0 24px 24px 0;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    background-image: url('image/main-image.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-color:rgba(255,255,255,0.5);
    background-blend-mode:lighten;
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
  const imgStyle = css`
    margin-bottom: 16px;
    width: 124px;
    @media screen and (min-width:1024px) {
        width: 208px;
    }
  `;
  const container = css`
    height: 100vh;
  `;
  return (
    <div className={container}>
      <main>
        <div
          className={mainStyle}>
          <img src='image/logo.png' className={imgStyle}/>
          <h2 className={mixinMain}>2021年4月1日</h2>
          <h2 className={mixinMain}>まごラブのモバイルアプリから</h2>
          <h1 className={mixinMain}>ポストカレンダーと</h1>
          <h1 className={mixinMain}>ハードカバーの</h1>
          <h1 className={mixinMain}>フォトブックを</h1>
          <h2 className={mixinMain}>贈れるようになります</h2>
        </div>
      </main>
    </div>
  );
} 