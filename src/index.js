import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav_mode: "data"
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
        <Button name="Export as CSV" />
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

class Switcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "active",
      settings: "inactive",
      datatarget: "not_targeted",
      settingstarget: "not_targeted"
    };
    this.activateData = this.activateData.bind(this);
    this.activateSettings = this.activateSettings.bind(this);
    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }

  activateData() {
    this.setState({ data: "active" });
    this.setState({ settings: "inactive" });
    this.props.callbackFromParent("data");
  }
  activateSettings() {
    this.setState({ data: "inactive" });
    this.setState({ settings: "active" });
    this.props.callbackFromParent("settings");
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
