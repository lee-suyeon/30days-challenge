import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;

      }
      body{
        background-color: #f7f8fa;
        font-family: 'Montserrat', 'Noto-sans', sans-serif;
        font-size: 1.2rem;
        font-weight: 400;
        color: #333;
      }
      ol, ul, li {
        list-style: none;
      }
      img {
        display: block;
        width: 100%;
        height: 100%;
      }
      input, label {
        display: block;
      }
      textarea, button,input[type="date"] {
        font-family: 'Montserrat', 'Noto Sans KR', sans-serif;
      }
      button {
        border: none;
        background-color: transparent;
      }

`
export default GlobalStyle;