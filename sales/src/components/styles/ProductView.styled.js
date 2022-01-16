import styled from "styled-components"


export const ProductViewer = styled.div` 
display:grid;
grid-template-columns:repeat(4, 80px);
grid-auto-rows: 80px;
grid-gap:1rem;
margin:1rem;
width:auto;
height:auto;
  
  
  .img {
    width:100%;
    height:100%;
    border-radius:10px;
  }
  
  .img-product {
   grid-column: 1/5;
   grid-row:1/5
  }
`

