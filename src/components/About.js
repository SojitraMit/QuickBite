import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const About = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <h1>Information</h1>
      <User name={"Mit(function)"} location={"Bhavnagar"} />
      <UserClass name={"Mit(calss)"} location={"Bhavnagar"} />
    </div>
  );
};

export default About;
