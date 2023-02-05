import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  toggleBtn = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  render() {
    const {isActive} = this.state
    const {details} = this.props
    const {questionText, answerText} = details
    const iconUrl = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const iconAlt = isActive ? 'minus' : 'plus'
    return (
      <li className="question-answer-list-container">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button className="btn" type="button" onClick={this.toggleBtn}>
            <img className="plus-minus-icon" src={iconUrl} alt={iconAlt} />
          </button>
        </div>
        {isActive && (
          <>
            <hr className="line" />
            <p className="answer">{answerText}</p>
          </>
        )}
      </li>
    )
  }
}
export default FaqItem
