import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="title">FAQs</h1>
          <ul>
            {faqsList.map(each => (
              <FaqItem key={each.id} details={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
