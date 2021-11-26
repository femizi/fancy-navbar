import React, { useState } from 'react'
import DropdownItem from './DropdownItem'
import { ReactComponent as CogIcon} from '../icons/cog.svg'
import { ReactComponent as ChevronIcon} from '../icons/chevron.svg'
import { CSSTransition } from 'react-transition-group';


const DropdownMenu = () => {
    const [activeMenu, setactiveMenu] = useState('main')
    return (
        <div className="dropdown">
            <CSSTransition 
            in={activeMenu === 'main'}
            unmountOnExit timeout={500}
            classNames="menu-primary"
            >
            <div className="menu">
            <DropdownItem> My profile</DropdownItem>
            <DropdownItem
            leftIcon={<CogIcon/>}
            rightIcon={<ChevronIcon/>}
            > Settings</DropdownItem>
            </div>
            </CSSTransition>
            <CSSTransition 
            in={activeMenu === 'settings'}
            unmountOnExit timeout={500}
            classNames="menu-secondary"
            >
            <div className="menu">
            <DropdownItem> My profile</DropdownItem>
            <DropdownItem
            leftIcon={<CogIcon/>}
            rightIcon={<ChevronIcon/>}
            > Settings</DropdownItem>
            </div>
            </CSSTransition>
        </div>
    )
}

export default DropdownMenu
