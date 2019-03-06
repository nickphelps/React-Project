import React, { Component } from 'react'


//  class DashboardContainer extends Component {
     
//   render() {
//     return (
//       <div>
//         <h1>This is my DashboardContainer</h1>
//       </div>
//     )
//   }
// }

const DashboardContainer = ({ store }) => {
    console.log(store)
    return (
        <h1>This is my store...{store.fname} </h1>
    )
}

export default DashboardContainer
