import React, { useState } from 'react';
import { MenuItems } from './menuitems';
import { Link } from 'react-router-dom';
import "./drop.css"

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;







// import React from 'react';
// import { Dropdown } from 'semantic-ui-react'

// const options = [
//   {
//     id: 1,
//     key:'Checkings',
//     text:'Checkings',
//     value: 'Checkings',
//   },
//   {
//     id: 2,
//     key:'Savings',
//     text:'Savings',
//     value:'Savings',
//   },
//   {
//     id: 3,
//     key:'Credit Card',
//     text:'Credit Card',
//     value:'Credit Card',
//   }
// ]


// const DropdownExampleSelection = () => (

//   <Dropdown
//     placeholder='Options'
//     fluid
//     selection
//     options={options}
//   />
// )

// export default DropdownExampleSelection