import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  let [BtnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-200 lg:bg-amber-100">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex m-8  ">
          <li className="px-2">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="mx-3 hover:text-blue-700">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-3 hover:text-blue-700 ">
            <Link to="/about">About Us</Link>
          </li>
          <li className="mx-3 hover:text-blue-700">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mx-3 hover:text-blue-700">
            <Link to="/cart">Cart-({cartItems.length})</Link>
          </li>
          <button
            className="mx-3 hover:text-blue-700 cursor-pointer"
            onClick={() => {
              BtnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
            name="Login">
            {BtnName}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
