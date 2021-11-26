/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'

const NavItem = (props) => {
    const [open, setopen] = useState(false)
    return (
        <li className="nav-item">
            <a href="#" className="icon-button" onClick
            ={()=> setopen(!open)}>
                {props.icon}
            </a>
            {open && props.children}
        </li>
    )
}

export default NavItem
