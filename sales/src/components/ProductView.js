import React from "react"
import imageProduct from "../images/image-product-1.jpg"
// import mobileimg2 from "../images/image-product-2.jpg"
// import mobileimg3 from "../images/image-product-3.jpg"
// import mobileimg4 from "../images/image-product-4.jpg"

import imageProduct1 from "../images/image-product-1-thumbnail.jpg"
import imageProduct2 from "../images/image-product-2-thumbnail.jpg"
import imageProduct3 from "../images/image-product-3-thumbnail.jpg"
import imageProduct4 from "../images/image-product-4-thumbnail.jpg"
import { ProductViewer } from "./styles/ProductView.styled"

import iconPrevious from "../images/icon-previous.svg"

import iconNext from "../images/icon-next.svg"

export default function ProductView() {
    return (
        <ProductViewer>
            <div className="desktop">
            <div className="img-product" ><img className="img" src={imageProduct}></img></div>
            <div className="img-product1 grid-item"><img className="img" src={imageProduct1} alt="item-1"></img></div>
            <div className="img-product2 grid-item"><img className="img" src={imageProduct2} alt="item-2"></img></div>
            <div className="img-product3 grid-item"><img className="img" src={imageProduct3} alt="item-3"></img></div>
            <div className="img-product4 grid-item"><img className="img" src={imageProduct4} alt="item-4"></img></div>
            </div>
            <div  className="slider-mob">
                <div className="slider-mob__bar">
            <div className="slider-mob__item" ><img className="img" src={imageProduct}></img></div>
            {/* <div className="slider-mob__item"><img className="img" src={mobileimg2} alt="item-1-mbl"></img></div>
            <div className="slider-mob__item"><img className="img" src={mobileimg3} alt="item-2-mbl"></img></div>
            <div className="slider-mob__item"><img className="img" src={mobileimg4} alt="item-3-mbl"></img></div> */}
            </div>
            <div className="slider-mob__control">

                    <div className="slider-mob__prev-btn">
                        <img src={iconPrevious} alt="previous product" />
                    </div>

                    <div className="slider-mob__next-btn">
                        <img src={iconNext} alt="next product" />
                    </div>
            </div>
            </div>
            
        </ProductViewer>
    )
}
