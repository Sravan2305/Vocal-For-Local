
//  import React from 'react';
//  import ReactDOM from 'react-dom';
//  import { BrowserRouter } from 'react-router-dom';
//  import Addproduct from '../Addproduct';
//  import { unmountComponentAtNode } from "react-dom";
//  import {ComponentsRender}  from '../../../Shared/Testutils';
//  let container = null;
//  beforeEach(() => {
//      // setup a DOM element as a render target
//      container = document.createElement("div");
//      document.body.appendChild(container);
//  });
 
//  afterEach(() => {
//      // cleanup on exiting
//      unmountComponentAtNode(container);
//      container.remove();
//      container = null;
//  });
 
//  it("Add Product renders without crashing", () => {
//     ComponentsRender(<Addproduct/>)
         
             
//  })




import React from "react";
import { shallow } from "enzyme";
import AddProduct from "../Addproduct";
import {ComponentsRender}  from '../../../Shared/Testutils';
let wrapper;
beforeEach(() => {
   wrapper = shallow(<AddProduct />, { disableLifecycleMethods: true });
});
afterEach(() => {
   wrapper.unmount();
});
it("must render a loading span before api call success", () => {
    
});