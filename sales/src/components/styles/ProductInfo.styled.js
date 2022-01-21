import styled from "styled-components"


export const Product = styled.div`  
width:auto;
height:auto;
padding-top:3rem;


  
  .product-name {
    color:black;
    font-size:38px;
    line-height: 40px;
  }
  
  .product-description {
    margin:1rem auto;
    color:${({theme})=> theme.colors.darkGrayishBlue};
  }
  
  
  .markdown {
   
  }
  
  .markdown-box {
   display:flex;
   width:auto;
   
  }
  
  .markdown-percent{
    color:orange;
    background-color:${({theme})=> theme.colors.paleOrange};
    margin: auto 1rem;
    font-size:14px;
    font-weight: bold;
    padding:2px;
  }
  
  
  
  .original-price {
    color:${({theme})=> theme.colors.darkGrayishBlue};
    margin:.5rem auto;
    text-decoration: line-through;
    font-weight: bold;
  }
  
  /*  Button container styles */
  
  .btn-box {
    display:flex;
   
    margin-top:2rem;
  }
  
  
  
  .minus, .plus, .quantity{
    background-color: whitesmoke;
    border:1px whitesmoke solid;
    padding:1rem;
  }
  
  .minus {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  
  .plus {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  
  
  .add-to-cart {
    grid-column: 1/10;
    width:auto;
    
   }
  
   .add-cart-btn {
    width:250px;
    padding:.9rem;
    margin: auto 1rem;
    color:white;
    background-color: orange;
    border-radius: 10px;
    border:1px orange solid;
    display:flex;
    justify-content: center;
    align-items: center;
    gap:14px;
   }
  
   .btn-txt {
    font-size:14px;
    font-weight: bold;
   }
  
   .cart-img {
     width:18px;
     height:18px;
  
   }
`

export const CompanyName = styled.h3`
color:${({theme})=> theme.colors.regularOrange};
font-size:12px;
margin:1rem auto;  `