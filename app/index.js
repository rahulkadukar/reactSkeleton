var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

class App extends React.Component {
  render() {
    return (
      <div>
        Hello, {this.props.name}
      </div>
    )
  }
}

ReactDOM.render(
  <App name="Rahul" />,
  document.getElementById("app")
);