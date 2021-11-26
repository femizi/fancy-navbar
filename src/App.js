import Navbar from './components/Navbar.js'
import './App.css';
import NavItem from './components/NavItem'
import Dropdownmenu from './components/DropdownMenu.js'
import { ReactComponent as BellIcon} from './icons/bell.svg'
import { ReactComponent as PlusIcon} from './icons/plus.svg'
import { ReactComponent as ArrowIcon} from './icons/arrow.svg'
import { ReactComponent as MessengerIcon} from './icons/messenger.svg'
import { ReactComponent as CaretIcon} from './icons/caret.svg'
import { CSSTransition } from 'react-transition-group';




function App() {
  return (
    <div className="App">
      <Navbar>
        <NavItem icon ={<PlusIcon/>}/>
        <NavItem icon ={<BellIcon/>}/>
        <NavItem icon ={<MessengerIcon/>}/>
        <NavItem icon ={<CaretIcon/>}>
          <Dropdownmenu/>
          </NavItem>
        

        </Navbar>
     </div>
  );
}

export default App;
