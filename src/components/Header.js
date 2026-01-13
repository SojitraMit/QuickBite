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

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-white border-b-4 border-yellow-600">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex m-8  ">
          <li className="px-2 text-cyan-600">
            Online Status : {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="mx-3 text-cyan-600 hover:text-blue-700 hover:scale-110   transition-transform ">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-3 text-cyan-600 hover:text-blue-700 hover:scale-110   transition-transform">
            <Link to="/about">About Us</Link>
          </li>
          <li className="mx-3 text-cyan-600 hover:text-blue-700 hover:scale-110   transition-transform">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mx-3 text-cyan-600 hover:text-blue-700 hover:scale-110   transition-transform">
            <Link to="/cart">Cart-({cartItems.length})</Link>
          </li>
          <button
            className="mx-3 text-cyan-600 hover:text-blue-700 cursor-pointer hover:scale-110   transition-transform"
            onClick={() => {
              BtnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
            name="Login hover:scale-110   transition-transform">
            {BtnName}
          </button>
          <li className="absolute ml-[490px] mt-6">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
