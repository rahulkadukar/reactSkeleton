var React = require('react');
var PropTypes = require('prop-types');

class Lang extends React.Component {
  render() {
    return (
      <div>
        {this.props.match.params.lang}
      </div>
    )
  }
}

module.exports = Lang;