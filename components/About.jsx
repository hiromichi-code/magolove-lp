import { css } from "lightwindcss";

export default function Top(){
    const logoStyle = css`
        width: 256px;
        margin: 32px 0 0 32px;
    `;
    return(
        <div className={css`
            height: 200vh;
        `}>
            <div className={css`
                height: 100vh;
            `}>
                <img src='logo.png' className={logoStyle} />
            </div>
            <div className={css`
                height: 100vh;
            `}>
                <img src='logo.png' className={logoStyle} />
            </div>
        </div>
    );
}