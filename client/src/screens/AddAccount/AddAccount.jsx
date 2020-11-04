import React from 'react';
import Option from '../../components/DropDown/Options';
import Layout from '../../components/shared/Layout/Layout'
import "./AddAccount.css"

function AddAccount() {
  return (
    <div>
      <Layout/>
    <div className="add-account-layout">
      <Option />
      
      </div>
    </div>
  );
}

export default AddAccount;






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