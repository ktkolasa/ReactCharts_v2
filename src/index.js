import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  myCallback = dataFromChild => {
    console.log(dataFromChild);
  };
  render() {
    return (
      <div className="App" class="App">
        <h1>Draw your chart</h1>
        <p>Resize the browser the screen is less than 600px wide).</p>

        <div class="row">
          <div class="column nav">
            <div class="switchers">
              <p>Switchers</p>
              <Switcher callbackFromParent={this.myCallback} />
            </div>

            <div class="content">
              <h2>Column 1</h2>
              <div class="row charts">
                <p>Pictures</p>
              </div>
              <Button name="Export as CSV" />
            </div>
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

class Switcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "active",
      settings: "inactive",
      datatarget: "not_targeted",
      settingstarget: "not_targeted"
    };
    this.someFn = this.someFn.bind(this);
    this.activateData = this.activateData.bind(this);
    this.activateSettings = this.activateSettings.bind(this);
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }
  someFn = () => {
    this.props.callbackFromParent("milo");
  };
  activateData() {
    this.setState({ data: "active" });
    this.setState({ settings: "inactive" });
    this.props.callbackFromParent("milo");
  }
  activateSettings() {
    this.setState({ data: "inactive" });
    this.setState({ settings: "active" });
  }
  defineClass(mode, targeted) {
    let res = "SwitchButton" + " " + mode + " " + targeted;
    return res;
  }
  onMouseEnterHandler(what) {
    if (what == "data") {
      this.setState({ datatarget: "targeted" });
    }
    if (what == "settings") {
      this.setState({ settingstarget: "targeted" });
    }
  }
  onMouseLeaveHandler(what) {
    if (what == "data") {
      this.setState({ datatarget: "not_targeted" });
    } else if (what == "settings") {
      this.setState({ settingstarget: "not_targeted" });
    }
  }

  render() {
    return (
      <div>
        <button
          class={this.defineClass(this.state.data, this.state.datatarget)}
          onClick={this.activateData}
          onMouseEnter={() => this.onMouseEnterHandler("data")}
          onMouseLeave={() => this.onMouseLeaveHandler("data")}
        >
          Data
        </button>
        <button
          class={this.defineClass(
            this.state.settings,
            this.state.settingstarget
          )}
          onMouseEnter={() => this.onMouseEnterHandler("settings")}
          onMouseLeave={() => this.onMouseLeaveHandler("settings")}
          onClick={this.activateSettings}
        >
          Settings
        </button>
      </div>
    );
  }
}

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
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
