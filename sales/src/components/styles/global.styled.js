import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle` 
*,
*::before,
*::after {
  margin:0;
  padding:0;
  box-sizing: border-box;
}

body {
font-family: 'Kumbh Sans', sans-serif;



h1 {
    display:inline;
  }
  
  li{
    display:inline;
    margin:1rem;
    
  }
  
  a {
    text-decoration: none;
    color:gray;
  }
  

}

`
