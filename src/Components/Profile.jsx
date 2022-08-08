import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    //initializing the state
    this.state = {
      title: "   ALA LAMOUCHI ",
      count: 0,
      total: 0,
      // color: "red",
    };

    this.handleIncre = () => {
      this.setState({ count: 1 });
    };
    this.handleIncre = () => {
      this.setState({ count: this.state.count + 1 });
    };
  }

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color }}> {this.state.title} </h1>

        <img
          src="https://www.webmarketing-com.com/wp-content/uploads/2015/06/shutterstock_246889600.jpg"
          alt=""
        />
        <h2>profession: Développeur web</h2>
        <h3>Your profile was mounted  {this.state.count} seconds ago</h3>
        {/* <p>total:{this.state.count * 5} </p> */}

        {/* <button onAuxClick={this.handleIncre}> add count</button>
        <button onClick={this.handleIncre}> click me</button> */}
      </div>
    );
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
}

export default Profile;
