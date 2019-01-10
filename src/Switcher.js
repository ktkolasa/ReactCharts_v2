import React from "react";
import "./styles.css";

export class Switcher extends React.Component {
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
