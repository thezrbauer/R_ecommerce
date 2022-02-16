import React from "react"
import {Product, CompanyName} from './styles/ProductInfo.styled'
import cartLogoWhite from "../images/icon-cart-white.svg"
import minusIcon from "../images/icon-minus.svg"
import plusIcon from "../images/icon-plus.svg"
      
export default function ProductInfo() {
    return (
      
      <Product>
        <CompanyName>SNEAKER COMPANY</CompanyName>
        <div className='mobile-action'>
        <h2 className="product-name">Fall Limited Edition Sneakers</h2>
        <p className="product-description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
        <div className="mob__inline">
        <div className="markdown-box">
        <h3 className="markdown">$125.00</h3>
        <p className="markdown-percent">50%</p>
        </div>
        <p className="original-price">$250.00</p>
        </div>
        </div>
        <div className="desk_btns">
          <div className="gray-btn" ><button className="minus"><img  src={minusIcon} alt="minus"></img></button></div>
          <div className="gray-btn"><button className="quantity">4</button></div>
          <div className="gray-btn"><button className="plus"><img alt="plus" src={plusIcon}></img></button></div>
          <div className="add-to-cart"><button className="add-cart-btn"><img alt="cart" className="cart-img" src={cartLogoWhite}></img><span className="btn-txt">Add to cart</span></button></div>
        </div>
        <div className="mob_btns">
          <div className="mob_grid-help">
          <div className="mob_gray-btn" ><button className="mob_minus"><img alt="mob_minus" src={minusIcon}></img></button></div>
          <div className="mob_gray-btn"><button className="mob_quantity">4</button></div>
          <div className="mob_gray-btn"><button className="mob_plus"><img  alt="mob_plus"src={plusIcon}></img></button></div>
          </div>
          <div className="mob_add-to-cart"><button className="mob_add-cart-btn"><img alt="mob_cart" className="cart-img" src={cartLogoWhite}></img><span className="btn-txt">Add to cart</span></button></div>
            </div>
           
      </Product>
    )
} 