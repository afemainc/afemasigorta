import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #ff6b00;
    --secondary: #1d1d1f;
    --light: #f5f5f7;
    --gray: #86868b;
    --white: #ffffff;
    --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-family);
    color: var(--secondary);
    background-color: var(--white);
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .section {
    padding: 4rem 0;
  }

  @media (max-width: 768px) {
    .section {
      padding: 3rem 0;
    }
  }
`;

export default GlobalStyles;