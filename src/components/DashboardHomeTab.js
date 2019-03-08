import React, { Component } from 'react'
import DashboardContainer from '../containers/DashboardContainer'

const DashboardHomeTab = ({ store }) => {
    console.log(store)
    return (
        <h1>Hello {store.fname} {store.lname} welcome to the home tab on your Dashboard.</h1>
    )
}

export default DashboardHomeTab