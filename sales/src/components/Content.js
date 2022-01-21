import React from 'react'
import ProductInfo from './ProductInfo';
import ProductView from './ProductView';
import {ProductPage} from './styles/content.styled'
export default function Content() {
    return (
        <>
        <ProductPage>
        <ProductView/>
        <ProductInfo />
        </ProductPage>
        </>
    )
}
