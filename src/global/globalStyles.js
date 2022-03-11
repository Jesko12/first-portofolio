import { createGlobalStyle } from "styled-components";
import PoppinsMediumWoff from "../assets/fonts/poppins/Poppins-Medium.woff";
import PoppinsMediumWoff2 from "../assets/fonts/poppins/Poppins-Medium.woff2";
import PoppinsBoldWoff from "../assets/fonts/poppins/Poppins-Bold.woff";
import PoppinsBoldWoff2 from "../assets/fonts/poppins/Poppins-Bold.woff2";
import PoppinsRegularWoff from "../assets/fonts/poppins/Poppins-Regular.woff";
import PoppinsRegularWoff2 from "../assets/fonts/poppins/Poppins-Regular.woff2";

const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: 'Poppins';
      src: url('${PoppinsMediumWoff2}') format('woff2'),
      url('${PoppinsMediumWoff}') format('woff');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'Poppins';
      src: url('${PoppinsBoldWoff2}') format('woff2'),
      url('${PoppinsBoldWoff}') format('woff');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
    }
    
    @font-face {
      font-family: 'Poppins';
      src: url('${PoppinsRegularWoff2}') format('woff2'),
      url('${PoppinsRegularWoff}') format('woff');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
    }
    
    * {
      font-family: 'Poppins', sans-serif;
    }
    
    h1,h2,h3,h4 {
        margin: 0;
    }
    
    /* Typography */
    h1 {
      color: #646464;
      font-weight: bold;
      font-size: 3rem;
    }
    
    h2 {
      font-weight: 800;
      margin: 0;
      font-size: 24px;
    }

    table {
      background: #fff;
      border-collapse: collapse;
      width: 100%;
    }
    
    th {
      font-size: 11px;
      color: black;
      font-weight: 500;
      text-transform: uppercase;
      padding: 1rem 0.5rem 1rem 1rem;
      border-bottom: 1px solid #f4eee8;
    }
    
    td {
      font-size: 12px;
      padding: 0.5rem 0.5rem 0.5rem 1rem;
      white-space: wrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
`;

export default GlobalStyles;
