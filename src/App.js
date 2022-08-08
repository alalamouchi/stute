import React from "react";
import "./App.css";
import Profile from "./Components/Profile";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
    this.hideProfil = () => {
      this.setState({ show: false });
    };
    this.showProfil = () => {
      this.setState({ show: true });
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.show ? (
          <>
            <button onClick={this.hideProfil}> hide list</button>
            <Profile />
          </>
        ) : (
          <button onClick={this.showProfil}> show list</button>
        )}
      </div>
    );
  }
}

export default App;
