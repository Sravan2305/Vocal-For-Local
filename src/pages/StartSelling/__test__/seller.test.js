import React from 'react';
import { unmountComponentAtNode } from "react-dom";
import ComponentRender from './Testutils';

import Seller from '../seller.js';


let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container)
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("StartSelling Page renders without crashing", () => {
    ComponentRender(<Seller />);
})
