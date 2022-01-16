import React from "react"
import {Product, CompanyName} from './styles/ProductInfo.styled'
import cartLogoWhite from "../images/icon-cart-white.svg"
import minusIcon from "../images/icon-minus.svg"
import plusIcon from "../images/icon-plus.svg"
      
export default function ProductInfo() {
    return (
      
      <Product>
        <CompanyName>SNEAKER COMPANY</CompanyName>
        <h2 className="product-name">Fall Limited Sneakers</h2>
        <p className="product-description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        
        <div className="markdown-box">
        <h3 className="markdown">$125.00</h3>
        <p className="markdown-percent">50%</p>
        </div>
        <p className="original-price">$250.00</p>
        
        <div className="btn-box">
          <div className="" ><button className="minus"><img  src={minusIcon}></img></button></div>
          <div className=""><button className="quantity">4</button></div>
          <div className=""><button className="plus"><img  src={plusIcon}></img></button></div>
         
          <div className="add-to-cart"><button className="add-cart-btn"><img className="cart-img" src={cartLogoWhite}></img><span className="btn-txt">Add to cart</span></button></div>


        </div>
     
     
      </Product>
    )
}