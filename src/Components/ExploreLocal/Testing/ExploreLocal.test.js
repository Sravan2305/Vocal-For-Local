import React from 'react';
import {cleanup, render} from '@testing-library/react';
import {ExploreLocalPage} from '../exploreLocalPage';

afterEach(cleanup);

test('Explore local page renders correctly', ()=> {
    render(<ExploreLocalPage/>)
})