import React from 'react';
import Option from '../../components/DropDown/Options';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkings from '../../components/DropDown/checkings';
import Savings from '../../components/DropDown/savings'
import CreditCard from '../../components/DropDown/creditcard'
import Layout from '../../components/shared/Layout/Layout'
import "./AddAccount.css"

function App() {
  return (
    <div>
      <Layout/>
    <div className="add-account-layout">
      <Router>
      <Option />
      <Switch>
        <Route path='/checkings' exact component={Checkings} />
        <Route path='/savings' exact component={Savings} />
        <Route path='/creditcard' exact component={CreditCard} />
      </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;






// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Dropdown from '../../components/DropDown/drop';
// import Layout from "../../components/shared/Layout/Layout"
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Checkings from '../../components/DropDown/checkings'

// function AddAccount() {
//   const [click, setClick] = useState(false);
//   const [dropdown, setDropdown] = useState(false);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const onMouseEnter = () => {
//     if (window.innerWidth < 960) {
//       setDropdown(false);
//     } else {
//       setDropdown(true);
//     }
//   };

//   const onMouseLeave = () => {
//     if (window.innerWidth < 960) {
//       setDropdown(false);
//     } else {
//       setDropdown(false);
//     }
//   };

//   return (
//     <>
//       <nav className='options'>
//         <Layout/>
//         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//           <li
//             className='nav-item'
//             onMouseEnter={onMouseEnter}
//             onMouseLeave={onMouseLeave}
//           >
//             <Link
//               to='/services'
//               className='nav-links'
//               onClick={closeMobileMenu}
//             >
//               Options <i className='fas fa-caret-down' />
//             </Link>
//             {dropdown && <Dropdown />}
//           </li>
//         </ul>
//         <Router>
//         <Switch>
//           <Route path='./checkings' component={Checkings}/>
//         </Switch>
//         </Router>
//       </nav>
//     </>
//   );
// }

// export default AddAccount;