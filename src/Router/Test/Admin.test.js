import React from 'react'
import { Router } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import TestRouter from './AdminTestRoutes'

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import RootReducer from '../../Redux/Reducers/index'

export function renderWithRouter(component , {store=createStore(RootReducer),...renderOptions}={}){
    const history = createMemoryHistory()
    function Wrapper({children}){
        return (
            <Provider store={store}> 
               <Router history={history}>
                 {component}
                </Router>
            </Provider>
        )
    }
    return render(component , {wrapper:Wrapper  , ...renderOptions})
}

// const renderWithRouter = (component) => {
//     const history = createMemoryHistory()
//     return { 
//     ...render (
//     <Router history={history}>
//         {component}
//     </Router>
//     )
//   }
// }

it('should render the Admin', () => {

  const { container, getByTestId } = renderWithRouter(<TestRouter />) 
  const navbar = getByTestId('navbar')
  const link = getByTestId('admin-link')    

  expect(container.innerHTML).toMatch('Welcome User')
  expect(navbar).toContainElement(link)
})

// it('should navigate to Admin page', ()=> {
//     const { container, getByTestId } = renderWithRouter(<TestRouter />) 
  
//     fireEvent.click(getByTestId('admin-link'))
//     const comp = getByTestId('admin-component')
//     expect(container.innerHTML).toMatch(comp.innerHTML)
//   })
  
//   it('should navigate to the contact page with the params', ()=> {
//     const { container, getByTestId } = renderWithRouter(<TestRouter />) 
     
//     fireEvent.click(getByTestId('contact-link'))
     
//     expect(container.innerHTML).toMatch('John Doe')
//   })