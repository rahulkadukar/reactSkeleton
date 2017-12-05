var React = require('react');
var PropTypes = require('prop-types');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;

var Nav = require('./Nav');
var Home = require('./Home');
var Popular = require('./Popular');
var Lang = require('./Lang');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/popular' component={Popular} />
            <Route exact path='/popular/:lang' component={Lang} />
            <Route render = {() => {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired
}

module.exports = App;