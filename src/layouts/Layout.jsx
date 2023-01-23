import { Footer, Header } from '@/components/common';
import { css } from '@emotion/css';

export const black = '#101010';
export const white = '#fff';
export const gray = '#f2f2f2';
const mobileHeaderHeight = 60;

export const Layout = ({ children }) => {
  const gridCss = css`
    display: grid;
    grid-template-areas:
      'header'
      'main-area';
    grid-template-rows: ${mobileHeaderHeight}px 1fr;
    min-height: 100vh;

    @media (min-width: 1024px) {
      grid-template-areas: 'header main-area';
      grid-template-columns: 80px 1fr;
      grid-template-rows: 1fr;
    }
  `;

  const headerCss = css`
    background-color: ${black};
    color: ${white};
    grid-area: header;
    padding: 0 16px;
  `;

  const mainAreaCss = css`
    grid-area: main-area;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - ${mobileHeaderHeight});
    justify-content: space-between;
  `;

  const footerCss = css`
    background-color: ${gray};
  `;

  return (
    <div className={gridCss}>
      <header className={headerCss}>
        <Header></Header>
      </header>

      <div className={mainAreaCss}>
        {children}

        <footer className={footerCss}>
          <Footer></Footer>
        </footer>
      </div>
    </div>
  );
};
