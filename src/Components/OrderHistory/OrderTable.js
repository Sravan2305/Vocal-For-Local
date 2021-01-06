import React from 'react';
import { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';
import OrderHistory from './OrderHistory';
import Rating from './RatingUser/Rating';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { updateOrderDataAction } from '../../Redux/Actioncreators/UpdateOrderCancelActions';
import { updateOrderHistory } from '../../Redux/Actioncreators/Actions';
import swal from 'sweetalert';
import './ordertabled.scss';
import EmptyOrder from '../../SVG/order/EmptyOrder';
import CircularProgress from "@material-ui/core/CircularProgress";
const axios = require('axios');

const OrderTable = (props) => {
  let user = {}
  let responseData = {};
  const history = useHistory()
  let userEmail = props.user.data.userdata.userEmail
  let orderItems = [];
  let today = new Date();
  const [isCancelledFlag, setCancelled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [order, setorder] = useState({})
  useEffect(() => {
    axios.get('/getOrder/' + userEmail)
      .then((response) => {
        setLoading(false);
        let res = response.data[0].userOrderHistory
        setorder(response.data[0].userOrderHistory)
        res.map((res) => {
          let isdeliveredObject = {
            email: userEmail,
            id: res._id

          }
          {
            ((((Math.abs(today.getTime() - new Date(res.dateOfOrder).getTime()) / (1000)) / 86400)) > 3)
              &&
              axios.patch("/updateDelivery/", isdeliveredObject)
                .then(res => { })
                .catch()
          }
        })

      })

      .catch()
    setLoading(false)

  }, [])

  if (props.user.data && props.user.data.userdata)
    user = props.user.data.userdata
  if (Object.keys(user).length === 0 && user.constructor === Object) { history.push('/signin'); return null }

  const cancelHandler = (order) => {

    const canceledObject =
    {
      productId: order.productId,
      productQuantity: order.productQuantity
    }

    const isCancelledObject = {
      email: props.user.data.userdata.userEmail,
      orderId: order._id
    }

    if (window.confirm("Do you really want to cancel this order?")) {

      axios.patch('/orderCancelUpdateQuantity', canceledObject)
        .then()
        .catch()

      axios.patch('/orderCancelled', isCancelledObject)
        .then(res => {
          setCancelled(true);
          responseData = res.data.data;

          props.updateOrderData(responseData);
          props.UpdateOrderDataInSigninData(responseData.userOrderHistory);
          swal("Order cancelled successfully", "Thank you ");
        })
    }
    else {
      swal('Ok thanks!')
    }

  }




  return (


    <div className="ordertable">
      {
        (order.length > 0 && loading === true) && <CircularProgress
          style={{ marginLeft: "47%", color: "blue", marginTop: "2%" }}
        ></CircularProgress>
      }
      {
        (order.length <= 0 && loading === false) && <EmptyOrder />
      }
      {(order.length > 0 && loading === false) &&
        <div  >

          <div >

            <p className="header-order" >Order History</p>
            <Divider style={{ width: "90%", margin: "auto", backgroundColor: "#FBAF00", padding: "1px" }} />
          </div>


          <Box display={{ xs: "none", sm: "none", md: "block", lg: "block" }}>
            <Grid container style={{ width: '90%', margin: "auto" }}>
              <Grid sm={6} >
                <p className="subheader-order">Product</p>
                <Divider style={{ backgroundColor: "black", width: "50%", paddingRight: "30%", paddingBottom: "1px", backgroundColor: "#FBAF00" }} />
              </Grid>



              <Grid sm={2} >
                <Grid style={{ width: '40%', margin: "auto" }}>
                  <p className="subheaderprice-order">Price</p>
                  <Divider style={{ backgroundColor: "#FBAF00", padding: "1px" }} />
                </Grid>
              </Grid>

              <Grid sm={2} >
                <Grid style={{ width: '40%', margin: "auto" }}>
                  <p className="subheaderprice-order">Quantity</p>
                  <Divider style={{ backgroundColor: "#FBAF00", padding: "1px" }} />
                </Grid>
              </Grid>

              <Grid sm={2} >
                <Grid style={{ width: '40%', margin: "auto" }}>
                  <p className="subheaderprice-order">Total</p>
                  <Divider style={{ backgroundColor: "#FBAF00", padding: "1px" }} />
                </Grid>
              </Grid>

            </Grid>


          </Box>
          <div style={{ marginLeft: "5%", marginRight: "5%", marginBottom: "2%" }}>

            {order.map((order) => (
              <div className="contain">
                <div>
                  <OrderHistory key={order.productId} product={order} />
                  <div className="function-block">
                    <div style={{ margin: "0% 0% 0% 50%" }}> Order Placed on {order.dateOfOrder.slice(0, 10)}</div>

                    <div style={{ margin: "0% 0% 0% 50%" }}>

                      {order.isCancelled || isCancelledFlag ? null : (((((Math.abs(today.getTime() - new Date(order.dateOfOrder).getTime()) / (1000)) / 86400)) > 3) ? "Status: Delivered  " : "Status: Pending  ")}
                    </div>
                    <div style={{ margin: "0% 0% 1% 50%" }}>
                      {((((Math.abs(today.getTime() - new Date(order.dateOfOrder).getTime()) / (1000)) / 86400)) > 3) ? <Rating data={order} />
                        : (order.isCancelled || isCancelledFlag ? <div>Product Cancelled</div> : <Button className="card-btn"
                          onClick={() => {

                            cancelHandler(order)
                          }}>Cancel Order</Button>)}</div></div>
                </div>
              </div>





            ))}

          </div>
        </div >}


    </div>
  )
};
const mapStateToProps = (state) => ({
  user: state.signin.data,
  updated: state.updateOrder
});
const mapDispatchToProps = (dispatch) => {
  return {

    //Updating redux store for states >> SignIn and UpdateOrder
    updateOrderData: (updatedOrderData) => dispatch(updateOrderDataAction(updatedOrderData)),
    UpdateOrderDataInSigninData: (updatedOrderData) => dispatch(updateOrderHistory(updatedOrderData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderTable);










