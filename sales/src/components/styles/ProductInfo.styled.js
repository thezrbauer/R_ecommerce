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
    line-height: 26px;
    color:${({theme})=> theme.colors.darkGrayishBlue};
  }
  
  
  .markdown {
   font-size:28px;
  }
  
  .markdown-box {
   display:flex;
   width:auto;
   
  }
  
  .markdown-percent{
    color:${({theme})=> theme.colors.regularOrange};
    background-color:${({theme})=> theme.colors.paleOrange};
    margin: auto 1rem;
    font-size:12px;
    font-weight: bold;
    border-radius:4px;
    padding:4px;
  }
  
  
  
  .original-price {
    color:${({theme})=> theme.colors.grayishBlue};
    margin:.5rem auto;
    text-decoration: line-through;
    font-weight: bold;
  }
  
  /*  Button container styles */
  
  .desk_btns {
    display:flex;
    margin-top:2rem;
  }
  
  .mob_btns {
    display:none;
  }
  
  
  .minus, .plus, .quantity{
    background-color: ${({theme})=> theme.colors.lightGrayishBlue};
    border:1px ${({theme})=> theme.colors.lightGrayishBlue} solid;
    padding:1rem;
  }
  
  


  .minus {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .minus:hover {
    background-color:hsl(223, 64%, 98%, .8);
    border: hsl(223, 64%, 98%, .8);
  }

  .plus {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .plus:hover {
    background-color:hsl(223, 64%, 98%, .8);
    border: hsl(223, 64%, 98%, .8);
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
    background-color: ${({theme})=> theme.colors.regularOrange};
    border-radius: 10px;
    border:1px ${({theme})=> theme.colors.regularOrange} solid;
    display:flex;
    justify-content: center;
    align-items: center;
    gap:14px;
   }

   .add-cart-btn:hover {
     background-color:hsl(26, 100%, 55%, .8);
     border: hsl(26, 100%, 55%, .8);
   }
  
   .btn-txt {
    font-size:14px;
    font-weight: bold;
   }
  
   .cart-img {
     width:18px;
     height:18px;
  
   }

   @media only screen and (max-width: 600px) { 
    margin:0rem 4rem 4rem;
    
  

    .mob__inline {
      display:flex;
     
      align-items:center;
    }

    .mob__inline .original-price {
      margin-left:12rem;
      margin-top:-2px;
    }

    
  .product-name {
   padding:3px; 
 
  }
  
  .product-description {
    padding:8px;
    
  }
  
    .desk_btns, .minus, .plus, .quantity {
      display:none;
    }

    .mob_btns {
      display:grid;
      justify-content:center;
      align-items:center;
      grid-template-columns: 1, 1fr;
      grid-template-rows: 2, 1fr;
      gap:1rem;
      margin-top:1.5rem;
      width:auto;
    }

    .mob_grid-help {
      display:flex;
      justify-content:center;
      width:100%;
    }

    .mob_minus, .mob_plus, .mob_quantity {
        background-color: ${({theme})=> theme.colors.lightGrayishBlue};
        border:1px ${({theme})=> theme.colors.lightGrayishBlue} solid;
        padding:1rem;
        width:15vh;
    }

    .mob_minus {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    
    .mob_plus {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }

    .mob_quantity {
    
    }

    .mob_add-to-cart {
      width:100%;
    }

      
    .mob_add-cart-btn {
      width:45vh;
      padding:.9rem;
      margin: auto 1rem;
      color:white;
      background-color: ${({theme})=> theme.colors.regularOrange};
      border-radius: 10px;
      border:1px ${({theme})=> theme.colors.regularOrange} solid;
      display:flex;
      justify-content: center;
      align-items: center;
      gap:14px;
    }
   }

`

export const CompanyName = styled.h3`
color:${({theme})=> theme.colors.regularOrange};
font-size:12px;
margin:1rem auto;  `