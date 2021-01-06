import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import RootReducer from '../../../Redux/Reducers/index';
import {Container, Row, Col, Button} from 'react-bootstrap';

function productPageRender(
    component,
    {
        store = createStore(RootReducer),
        ...renderOptions
    } = {}
) {
    function Wrapper({children}) {
        return (<Provider store={store}>{children}</Provider>)
    }
    return render(component, { wrapper: Wrapper, ...renderOptions})
}

const productContainerGrid = ({children}) => {
    return(
        <div>
            <Container>
                <Row>
                    <Col>{children}</Col>
                    <Col>
                        <Row>{children}</Row>
                        <Row>{children}</Row>
                        <Row>{children}</Row>
                    </Col>
                </Row>
            </Container>
            <Container>{children}</Container>
            <Container>{children}</Container>
        </div>
    )
}

const productContainerRender = (component) => {
    return render(component, {wrapper: productContainerGrid})
}

const BuyNowContainer = ({children}) => {
    return(
        <div>
            {children}
        </div>
    )
}

const buyNowContainerRender = (component) => {
    return render(component, {wrapper: BuyNowContainer})
}

const OutOfStockContainer = ({children}) => {
    return(
        <div>
            <header></header>
            <Button></Button>
            <div></div>
        </div>
    )
}

const outOfStockContainerRender = (component) => {
    return render(component, {wrapper: OutOfStockContainer})
}

export {
    productPageRender,
    productContainerRender,
    buyNowContainerRender,
    outOfStockContainerRender
}