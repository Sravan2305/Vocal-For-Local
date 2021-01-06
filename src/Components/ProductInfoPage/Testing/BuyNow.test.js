import React from 'react'
import BuyNow from '../BuyNow';
import {productPageRender, buyNowContainerRender} from './ProductTestUtils';
import {cleanup} from '@testing-library/react';

afterEach(cleanup);

test('Buy now component renders with redux correctly', () => {
    productPageRender(<BuyNow/>);
})

test('Buy now renders correctly with its structure', ()=> {
    let dom = productPageRender(<BuyNow/>)
    const BuyNowContainer = dom.container.querySelector("div-buyNow");
    buyNowContainerRender(BuyNowContainer)
})

