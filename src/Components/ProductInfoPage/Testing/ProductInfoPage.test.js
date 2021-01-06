import React from 'react'
// import ReactDOM from 'react-dom'
import ProductInfoPage from '../productInfoPage'
// import {} from '@testing-library/jest-dom'
import { render, screen, cleanup } from '@testing-library/react'
// import { act } from 'react-dom/test-utils';
import {productPageRender, productContainerRender} from './ProductTestUtils';

afterEach(cleanup);


//RENDERING TESTS
test('Page renders correctly with Redux', () => {
    productPageRender(<ProductInfoPage/>)
})

test('Product container Grid renders correctly', () => {
    let dom = productPageRender(<ProductInfoPage/>)
    const productInfoGridContainer = dom.container.querySelector("productInfoPage");
    productContainerRender(productInfoGridContainer)
})






