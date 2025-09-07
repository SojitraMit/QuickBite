import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const About = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl">Information</h1>

      <User name={"Mit(function)"} location={"Bhavnagar"} />
    </div>
  );
};

export default About;
