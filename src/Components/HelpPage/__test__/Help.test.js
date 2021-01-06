 import React from 'react';
 import ReactDOM from 'react-dom';
 import {Help} from '../Help';
 import { unmountComponentAtNode } from "react-dom";
 
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
 
 it("Help Page renders without crashing", () => {
     ReactDOM.render(
         
             <Help/>
         , container);
 })