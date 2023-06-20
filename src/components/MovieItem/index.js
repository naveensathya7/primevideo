// Write your code here
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'

import './index.css'

const MovieItem = props => {
  const {item} = props
  const {thumbnailUrl, videoUrl, categoryId} = item
  console.log(categoryId)
  return (
    <div>
      <Popup
        modal
        trigger={
          <img className="movie-thumbnail" src={thumbnailUrl} alt="thumbnail" />
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              className="close-button"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div className="movie-player-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
