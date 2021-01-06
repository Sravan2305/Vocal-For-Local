
 import React from 'react';
 import ReactDOM from 'react-dom';
 import { BrowserRouter } from 'react-router-dom';
 import OrderTable from '../OrderTable';
 import { unmountComponentAtNode } from "react-dom";
 import {ComponentsRender}  from '../../../Shared/Testutils';
 let container = null;
 beforeEach(() => {
     // setup a DOM element as a render target
     container = document.createElement("div");
     document.body.appendChild(container);
 });
 
 afterEach(() => {
     // cleanup on exiting
     unmountComponentAtNode(container);
     container.remove();
     container = null;
 });
 
 it("Order History renders without crashing", () => {
    ComponentsRender(<BrowserRouter>
        <OrderTable/>
    </BrowserRouter>)
         
             
 })