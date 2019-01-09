import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App" class="App">
      <h1>Draw your chart</h1>
      <p>Resize the browser the screen is less than 600px wide).</p>

      <div class="row">
        <div class="column nav">
          <div class="switchers">
            <p>Switchers</p>
            <Switcher />
          </div>

          <div class="content">
            <h2>Column 1</h2>
            <div class="row charts">
              <p>Pictures</p>
            </div>
            <Button name="Export as CSV" />
            <p>Some text..</p>
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

class Switcher extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick() {
    let speech = "";
    for (let i = 0; i < 10000; i++) {
      speech += "blah ";
    }
    alert(speech);
  }

  onClick = () => {
    this.setState({
      text: "clicked 2"
    });
  };

  render() {
    return (
      <div>
        <button
          class="SwitchButton"
          onClick={this.handleClick}
          onMouseOver={this.onClick}
        >
          DATA
        </button>
        <button class="SwitchButton" onClick={this.handleClick}>
          SETTINGS
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
ReactDOM.render(<App />, rootElement);
