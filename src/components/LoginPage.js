import React from 'react'
import NavBar from '../containers/NavBarContainer'
import LoginForm from '../containers/LoginFormContainer';
import DashboardContainer from '../containers/DashboardContainer'


const LoginPage = ({ store }) => {
  return (
            <div style={{ height: '100vh'}}>
              <NavBar />
              <br></br>
              <br></br>
              <br></br>
               <LoginForm />
               {store.showDashboard ? <DashboardContainer store={store} /> : false}
              
           </div>

  )
}

export default LoginPage
