 import React from 'react';
 import {ComponentRender} from './TestUtils'
import '@testing-library/jest-dom/extend-expect';
import {cleanup, render, screen, fireEvent} from '@testing-library/react'
import { TestApp} from './TestUtils'
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import Help from '../Help'


afterEach(cleanup)


it("Help renders without crashing", ()=>{
    ComponentRender(<Help />)
});


test('Help route name is correct', () => {
    const history = createMemoryHistory()
    const route = '/help'
    history.push(route)
    ComponentRender(<Router history={history}><Help/></Router>)
})





test('Help is navigating to the correct route with Link', () => {
    const history = createMemoryHistory();

    render(
        <Router history = {history}>
            <TestApp/>
        </Router>)

    expect(screen.getByText(/you are home/i)).toBeInTheDocument()

    const leftClick = { button: 0 }
    fireEvent.click(screen.getByText(/Help Page/i), leftClick)

    render(
        <Router history = {history}>
            <TestApp/>
        </Router>)
    
    expect(screen.getByText('You are in Help page')).toBeInTheDocument()
})
