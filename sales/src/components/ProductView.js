import React from "react"
import imageProduct from "../images/image-product-1.jpg"
import mobileimg2 from "../images/image-product-2.jpg"
import mobileimg3 from "../images/image-product-3.jpg"
import mobileimg4 from "../images/image-product-4.jpg"

import imageProduct1 from "../images/image-product-1-thumbnail.jpg"
import imageProduct2 from "../images/image-product-2-thumbnail.jpg"
import imageProduct3 from "../images/image-product-3-thumbnail.jpg"
import imageProduct4 from "../images/image-product-4-thumbnail.jpg"
import { ProductViewer } from "./styles/ProductView.styled"

import iconPrevious from "../images/icon-previous.svg"
import iconNext from "../images/icon-next.svg"




const ProductView =() => {
    return (
        <ProductViewer>
            <div className="desktop">
            <div className="img-product" ><img className="img" src={imageProduct} alt="item"></img></div>
            <div className="img-product1 grid-item"><img className="img" src={imageProduct1} alt="item-1"></img></div>
            <div className="img-product2 grid-item"><img className="img" src={imageProduct2} alt="item-2"></img></div>
            <div className="img-product3 grid-item"><img className="img" src={imageProduct3} alt="item-3"></img></div>
            <div className="img-product4 grid-item"><img className="img" src={imageProduct4} alt="item-4"></img></div>
            </div>
            <div className="slider-mob"> 
              <div className="slider-mob__carousel">
                <img src={imageProduct} className="sliderImg" alt="mobile shoe image1"  />,
                    {/* <img src={mobileimg2} className="sliderImg" alt="mobile shoe image2"  />,
                    <img src={mobileimg3} className="sliderImg" alt="mobile shoe image3"  />,
                    <img src={mobileimg4} className="sliderImg" alt="mobile shoe image4"  />  */}
                   
                   </div>   
               
             <div className="slider-mob__control">

                    <div className="slider-mob__prev-btn"><a className="prev" ><img src={iconPrevious} alt="previous product" /></a></div>
                    <div className="slider-mob__next-btn"><a className="next" ><img src={iconNext} alt="next product" /></a></div>

                </div> 
             </div> 
            
        </ProductViewer>
    )
}
export default ProductView;