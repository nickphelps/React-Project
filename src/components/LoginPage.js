import React from 'react'
import NavBar from '../containers/NavBarContainer'
import LoginForm from '../containers/LoginFormContainer';
import DashboardContainer from '../containers/DashboardContainer'


const LoginPage = ({ store }) => {
  const stateLength = store.length - 1
  return (
            <div>
              <NavBar />
               <LoginForm />
               {store[stateLength].showDashboard ? <DashboardContainer store={store[stateLength]} /> : false}
              
           </div>

  )
}

export default LoginPage
