var React = require('react');
var PropTypes = require('prop-types');

class SelectedLanguage extends React.Component {
  render() {
    let languages = ['All', 'C++', 'Python', 'Java', 'Ruby', 'Haskell'];

    return (
      <ul className='languages'>
        {
          languages.map((lang) => {
            return (
              <li key = {lang} 
                  style = {
                    (lang === this.props.selectedLanguage) ? {'color' : '#d0021b'} : null}
                  onClick = {this.props.onSelect.bind(null, lang)}>
                {lang}
              </li>
            )
          })
        }
      </ul>
    )
  }
}

SelectedLanguage.propTypes = {
  'selectedLanguage': PropTypes.string.isRequired,
  'onSelect': PropTypes.func.isRequired
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
    return (
      <div>
        <SelectedLanguage 
          selectedLanguage = {this.state.selectedLanguage}
          onSelect = {this._updateLanguage}
        />
      </div>
    )
  }
}

module.exports = Popular;