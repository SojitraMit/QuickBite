import { useState, useEffect, useContext } from "react";
import UserContext from "../utils/UserContext";

const User = ({ name, location }) => {
  const { loggedInUser } = useContext(UserContext);
  const [count] = useState(0);

  // useEffect(()=>{
  //     fetchMenu();
  // },[])

  // const fetchMenu = async () => {
  //     const data = await fetch(
  //      "https://api.github.com/users/SojitraMit");
  //     const json = await data.json();
  //     console.log(json);
  // };

  return (
    <div className="user">
      <h2 className="font-bold">Name : {name} </h2>
      <h3>Location : {location}</h3>
      <h1>User : {loggedInUser}</h1>
    </div>
  );
};

export default User;
