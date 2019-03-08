import React from 'react'
import NavBar from '../components/NavBar'
import LoginForm from '../containers/LoginFormContainer';
import DashboardContainer from '../containers/DashboardContainer'


const LoginPage = ({ store }) => {
  // console.log(store)
  const stateLength = store.length - 1
  // console.log(stateLength)
  // console.log(store)
  // console.log(store[stateLength].showDashboard)
  // console.log(store[stateLength].fname)
  return (
            <div>
              <NavBar />
               <LoginForm />
               {(store[stateLength].showDashboard ? <DashboardContainer store={store[stateLength]} /> : false)}
              
           </div>

  )
}

export default LoginPage
