/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const DropdownItem = (props) => {
    return (
      <a href="#" className="menu-item" 
    //   onClick={() => props.gotoMenu && setactiveMenu(props.gotoMenu)}
      >
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
         <span className="icon-right"> {props.rightIcon}</span>
      </a>
    )
}

export default DropdownItem
