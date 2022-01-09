// import React from "react";
// import { shallow } from "enzyme";
// import AddProduct from "./AddProduct";
// beforeAll(() => {
//   global.fetch = jest.fn();
//   //window.fetch = jest.fn(); if running browser environment
// });
// let wrapper;
// beforeEach(() => {
//    wrapper = shallow(<Hello />, { disableLifecycleMethods: true });
// });
// afterEach(() => {
//    wrapper.unmount();
// });

// it("must show the p.user and hide the loading span after api call success", 
// (done) => {
// // here we are spying on componentDidMount to know that it has been called
// const spyDidMount = jest.spyOn(Hello.prototype,"componentDidMount");
// fetch.mockImplementation(() => {
//    return Promise.resolve({
//      status: 200,
//      json: () => {
//      return Promise.resolve({
//         userName: "manas",
//         userId: 1
//       });
//     }
//   });
// });
// const didMount = wrapper.instance().componentDidMount();
// // expecting componentDidMount have been called
// expect(spyDidMount).toHaveBeenCalled();
// didMount.then(() => {
//    // updating the wrapper
//    wrapper.update();
   
//    spyDidMount.mockRestore();
//    fetch.mockClear();
//    done();
// });
// });