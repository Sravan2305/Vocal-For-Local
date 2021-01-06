import React from 'react';
import {cleanup, render} from '@testing-library/react';
import OutOfStock from '../OutOfStock';
import {outOfStockContainerRender, productPageRender} from './ProductTestUtils';


afterEach(cleanup);

test('Out of Stock component renders correctly', () => {
    productPageRender(<OutOfStock/>)
})

test('Out of stock structure renders correctly', () => {
    let dom = productPageRender(<OutOfStock/>)
    const outOfStockContainer = dom.container.querySelector('div-outOfStock')
    outOfStockContainerRender(outOfStockContainer);
})