import styled from "styled-components"


export const ProductPage = styled.div` 
display:grid;
justify-content: center;
grid-template-columns: repeat(2, 400px);
width:auto;
gap:7rem;
}

@media only screen and (max-width: 600px) { 
  grid-template-columns: 1fr;
  gap:0rem;
  
}


`