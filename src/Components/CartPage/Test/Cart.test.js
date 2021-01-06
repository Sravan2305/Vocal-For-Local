import {cleanup , render, waitFor, fireEvent} from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'
import Address from '../Address'
import AddToCart from '../AddToCart'
import Cart from '../Cart'
import CartError from '../CartError'
import CartImage from '../CartImage'
import CartItem from '../CartItem'
import Checkout from '../Checkout'
import DeleteItem from '../DeleteItem'
import Quantity from '../Quantity'
import {ComponentRender} from './TestUtils'
import axiosMock from 'axios'

jest.mock('axios')

it('should change the quantity', async () => {
    
    const { getByTestId } = ComponentRender(<DeleteItem/>)
  
    axiosMock.post.mockResolvedValueOnce({
        data: { message: 'deleted' },
      })
    fireEvent.click(getByTestId('delete-button'))
    
    const apiData = await waitFor(() => getByTestId('delete-button'))
  
    expect(axiosMock.post).toHaveBeenCalledTimes(1)
    expect(apiData).toHaveTextContent("Product deleted from the  cart successfully!!")
  })

afterEach(cleanup)


it("AddToCart renders without crashing", ()=>{
    ComponentRender(<AddToCart />)
});

it("CartError renders without crashing", ()=>{
    ComponentRender(<CartError />)
});

it("Checkout renders without crashing", ()=>{
    ComponentRender(<Checkout />)
});

it("DeleteItem renders without crashing", ()=>{
    ComponentRender(<DeleteItem />)
});

it("Quantity renders without crashing", ()=>{
    ComponentRender(<Quantity />)
});

it("CartImage renders without crashing", ()=>{
    ComponentRender(<CartImage />)
});

it("Cart renders without crashing", ()=>{
    ComponentRender(<Cart />)
});

it("CartItem renders without crashing", ()=>{
    ComponentRender(<CartItem />)
});

it("Address renders without crashing", ()=>{
    ComponentRender(<Address />)
});

it("Cart renders without crashing", ()=>{
    ComponentRender(<Cart />)
});
