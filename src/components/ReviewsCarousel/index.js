// Write your code here
import {Component} from 'react'

import ReviewItem from '../ReviewItem'

import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviewIndex: 0}

  ClickNextButton = () => {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state
    if (activeReviewIndex < reviewsList.length - 1) {
      this.setState(prevstate => ({
        activeReviewIndex: prevstate.activeReviewIndex + 1,
      }))
    }
  }

  ClickPreviousButton = () => {
    const {activeReviewIndex} = this.state
    if (activeReviewIndex > 0) {
      this.setState(prevstate => ({
        activeReviewIndex: prevstate.activeReviewIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviewIndex} = this.state

    return (
      <div className="bg-container">
        <ul>
          <ReviewItem
            ReviewDetails={reviewsList[activeReviewIndex]}
            ClickNextButton={this.ClickNextButton}
            ClickPreviousButton={this.ClickPreviousButton}
          />
        </ul>
      </div>
    )
  }
}

export default ReviewsCarousel
