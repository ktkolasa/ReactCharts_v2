import React from "react";
import ReactDOM from "react-dom";
import { Switcher } from "./Switcher";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav_mode: "settings"
    };
  }
  myCallback = dataFromChild => {
    console.log("callback");
    let new_nav_mode = dataFromChild;
    this.setState({ nav_mode: new_nav_mode });
    console.log(this.state.nav_mode);
  };

  render() {
    return (
      <div className="App" class="App">
        <h1>Draw your chart</h1>
        <div class="row">
          <div class="column nav">
            <div class="switchers">
              <Switcher callbackFromParent={this.myCallback} />
            </div>
            <Panel mode={this.state.nav_mode} />
          </div>

          <div class="column main">
            <h2>Column 2</h2>
            <p>Some text..</p>
          </div>
        </div>
        <div class="footer">
          <p>2019, under construction</p>
          <br />
        </div>
      </div>
    );
  }
}

class Panel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.mode == "data") {
      return <DataPanel />;
    }
    if (this.props.mode == "settings") {
      return <SettingsPanel />;
    }
  }
}

class SettingsPanel extends React.Component {
  render() {
    return (
      <div class="content">
        <h2>Settings</h2>
        <div class="row charts">
          <p>Pictures</p>
        </div>
        <Button name="Choose colours!" />
      </div>
    );
  }
}

class DataPanel extends React.Component {
  render() {
    return (
      <div class="content">
        <h2>Data</h2>
        <Button name="Import from CSV" />
        <p>123</p>

        <Button name="Export as CSV" />
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <div>
        <button>{this.props.name}</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
ReactDOM.render(<App />, rootElement);
