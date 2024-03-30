import './App.css'
import {Component} from 'react'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class App extends Component {
  state = {selectedBtn: languageGreetingsList[0].id}

  onLanguageSelect = event => {
    console.log(event.target.id)
    this.setState({selectedBtn: event.target.id})
  }

  getItem = id => {
    const item = languageGreetingsList.filter(each => each.id === id)
    return item[0]
  }

  render() {
    const {selectedBtn} = this.state
    const languageGreetingItem = this.getItem(selectedBtn)
    return (
      <div className="background-con">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="ul-con">
          {languageGreetingsList.map(each => {
            const btnStyle = each.id === selectedBtn ? 'styled-btn' : 'nrm-btn'
            return (
              <li key={each.id}>
                <button
                  className={btnStyle}
                  id={each.id}
                  type="button"
                  onClick={this.onLanguageSelect}
                >
                  {each.buttonText}
                </button>
              </li>
            )
          })}
        </ul>
        <img
          src={languageGreetingItem.imageUrl}
          alt={languageGreetingItem.imageAltText}
          className="img"
        />
      </div>
    )
  }
}

export default App
