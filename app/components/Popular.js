var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;

class SelectedLanguage extends React.Component {
  render() {
    let languages = ['All', 'C++', 'Python', 'Java', 'Ruby', 'Haskell'];
    
    return (
      <ul className='languages'>
        {
          languages.map((lang) => {
            return (
              <Link 
                key = {lang} 
                to = {{
                  'pathname': this.props.routePath.url + '/' + lang
                }}
              >
                <li key = {lang} 
                    style = {
                      (lang === this.props.selectedLanguage) ? {'color' : '#d0021b'} : null}
                    onClick = {this.props.onSelect.bind(null, lang)}>
                  {lang}
                </li>
              </Link>
            )
          })
        }
      </ul>
    )
  }
}

SelectedLanguage.propTypes = {
  'selectedLanguage': PropTypes.string.isRequired,
  'onSelect': PropTypes.func.isRequired,
  'routePath': PropTypes.object.isRequired
}

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'selectedLanguage': 'All'
    }
    this._updateLanguage = this._updateLanguage.bind(this);
  }

  _updateLanguage(lang) {
    this.setState(() => {
      return {
        'selectedLanguage': lang
      }
    })
  }

  render() {
    let routePath = this.props.match;
    return (
      <div>
        <SelectedLanguage 
          selectedLanguage = {this.state.selectedLanguage}
          onSelect = {this._updateLanguage}
          routePath = {routePath}
        />
      </div>
    )
  }
}

module.exports = Popular;