
import './App.css';

import ProductView from './components/ProductView';
import Header from './components/Header';
import {GlobalStyle} from "./components/styles/global.styled.js"
import { ThemeProvider } from 'styled-components';
import ProductInfo from './components/ProductInfo';

const theme = {
  colors: { 
    "regularOrange":"hsl(26, 100%, 55%)",
  "pale-orange": "hsl(25, 100%, 94%)",
  "very-dark-blue": "hsl(220, 13%, 13%)",
  "dark-grayish-blue":"hsl(219, 9%, 45%)",
  "grayish-blue":"hsl(220, 14%, 75%)",
  "light-grayish-blue":"hsl(223, 64%, 98%)",
  "white": "hsl(0, 0%, 100%)",
   "lightbox-black":"hsl(0, 0%, 0%)"
}

}


function App() {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
     <Header />
      <div className="content">
        <ProductView/>
        <ProductInfo />
        </div>
    </ThemeProvider>
  );
}

export default App;
