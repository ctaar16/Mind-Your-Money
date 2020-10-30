import React from 'react'
import './Layout.css'
import Nav from '../Nav/Nav'
import Hamburger from '../Hamburger/Hamburger'

const Layout = (props) => (
    <div className='layout'>
        {/* <Hamburger />
        <Nav /> */}
        <div className="layout-children">
            {props.children}
        </div>
    </div>
)

export default Layout