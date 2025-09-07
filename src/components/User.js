import { useState, useEffect, useContext } from "react";
import UserContext from "../utils/UserContext";

const User = ({ name, location }) => {
  const { loggedInUser } = useContext(UserContext);
  const [count] = useState(0);
  const [value, useValue] = useState({});

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch("https://api.github.com/users/SojitraMit");
    const json = await data.json();
    useValue(json);
    console.log(json);
  };

  const { login, id, avatar_url } = value;

  return (
    <div className="user text-center">
      <div className="flex items-center justify-center ">
        <img src={avatar_url}></img>
      </div>

      <h2 className="font-bold">Name : {login} </h2>
      <h3>Location : {location}</h3>
      <h1>User : {loggedInUser}</h1>
    </div>
  );
};

export default User;
