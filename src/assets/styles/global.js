import "react-toastify/dist/ReactToastify.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
 body {
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 }

 a {
   color: #000;
   text-decoration: none;
 }
 a:hover{
   color:blue;
   text-decoration: underline;
 }
`;

export default GlobalStyle;
