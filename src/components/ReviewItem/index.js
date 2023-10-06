import './index.css'

const ReviewItem = props => {
  const {ReviewDetails, ClickNextButton, ClickPreviousButton} = props
  const {imgUrl, username, companyName, description} = ReviewDetails

  const nextSlide = () => {
    ClickNextButton()
  }

  const previousSlide = () => {
    ClickPreviousButton()
  }
  return (
    <li className="list-items">
      <h1 className="heading">Reviews</h1>
      <img src={imgUrl} alt={username} className="image" />
      <div className="div2">
        <button type="button" onClick={previousSlide} data-testid="leftArrow">
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
          />
        </button>
        <p className="heading2">{username}</p>
        <button type="button" onClick={nextSlide} data-testid="rightArrow">
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
          />
        </button>
      </div>
      <p className="para">{companyName}</p>
      <p className="para2">{description}</p>
    </li>
  )
}

export default ReviewItem
