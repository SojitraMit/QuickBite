import React from "react";

//code run order 1.constructor 2.render 3.DidMount

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: "",
    };
  }

  // It is basicaly a useEffect
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/SojitraMit");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  //this call after componentDidMount
  componentDidUpdate() {
    console.log("this call after componentDidMount");
  }

  render() {
    const { login, id, avatar_url } = this.state.userInfo;
    return (
      <div className="user">
        <img src={avatar_url} height="150px" />
        <h2>Name : {login} </h2>
        <h3>Location : {id}</h3>
      </div>
    );
  }
}

export default UserClass;
