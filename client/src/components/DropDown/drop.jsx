import React, { useState } from "react";
import { MenuItems } from "./menuitems";
import { useParams, Link } from "react-router-dom";
import "./drop.css";

function Dropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  let params = useParams();

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={`/User/${params.userId}${item.path}`}
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
