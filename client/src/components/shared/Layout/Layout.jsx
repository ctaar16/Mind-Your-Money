import React from 'react'
import './Layout.css'
import Nav from '../Nav/Nav'
import Hamburger from '../Hamburger/Hamburger'



const Layout = (props) => (
  <div id="outer-container" className='layout'>
        <Hamburger pageWrapId={"page-wrap"} outerContainerId={"App"}/>
        <Nav />
        <div className="layout-children">
            {props.children}
        </div>
    </div>
)

export default Layout