
import './App.css';
import Header from './components/Header';
import {GlobalStyle} from "./components/styles/global.styled.js"
import { ThemeProvider } from 'styled-components';
import ProductInfo from './components/ProductInfo';
import ProductView from './components/ProductView';



const theme = {
  colors: { 
    "regularOrange":"hsl(26, 100%, 55%)",
  "paleOrange": "hsl(25, 100%, 94%)",
  "veryDarkBlue": "hsl(220, 13%, 13%)",
  "darkGrayishBlue":"hsl(219, 9%, 45%)",
  "grayishBlue":"hsl(220, 14%, 75%)",
  "lightGrayishBlue":"hsl(223, 64%, 98%)",
  "white": "hsl(0, 0%, 100%)",
   "lightboxBlack":"hsl(0, 0%, 0%)"
}

}




function App() {

  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
     <Header />
      <div className="content">
        <ProductView />
        <ProductInfo />
        </div>
    </ThemeProvider>
  );
}

export default App;
