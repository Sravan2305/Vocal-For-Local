import React from 'react'
import { Link, Route, Switch,  useParams } from 'react-router-dom'
import Admin from '../../Components/AdminPage/Admin'
import AddPromo from '../../Components/AdminPage/AddPromo'
import ShowPromos from '../../Components/AdminPage/ShowPromos'
import SidebarComponent from '../../Components/AdminPage/SidebarComponent'

const TestRouter = () => {
  
    return (
    <>
    <nav data-testid="navbar">
      <Link data-testid="admin-link" to="/admin">Admin</Link>

      </nav>
      
    
      <Switch>
        <Route path="/admin" component={Admin} />

      </Switch>
    </>
  )
}

export default TestRouter