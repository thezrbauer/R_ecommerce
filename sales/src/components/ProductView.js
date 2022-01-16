import React from "react"
import imageProduct from "../images/image-product-1.jpg"
import imageProduct1 from "../images/image-product-1-thumbnail.jpg"
import imageProduct2 from "../images/image-product-2-thumbnail.jpg"
import imageProduct3 from "../images/image-product-3-thumbnail.jpg"
import imageProduct4 from "../images/image-product-4-thumbnail.jpg"
import { ProductViewer } from "./styles/ProductView.styled"

export default function ProductView() {
    return (
        <ProductViewer>
            <div className="img-product grid-item" ><img className="img" src={imageProduct}></img></div>
            <div className="img-product1 grid-item"><img className="img" src={imageProduct1} alt="item-1"></img></div>
            <div className="img-product2 grid-item"><img className="img" src={imageProduct2} alt="item-2"></img></div>
            <div className="img-product3 grid-item"><img className="img" src={imageProduct3} alt="item-3"></img></div>
            <div className="img-product4 grid-item"><img className="img" src={imageProduct4} alt="item-4"></img></div>
        </ProductViewer>
    )
}
