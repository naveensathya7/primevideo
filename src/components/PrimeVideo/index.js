// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(each => each.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(each => each.categoryId === 'COMEDY')

  return (
    <div className="prime-video-container">
      <div>
        <img
          className="prime-video-logo"
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png "
          alt="prime video"
        />
      </div>

      <div className="movies-list-container">
        <h1 className="heading1">Action Movies</h1>
        <MoviesSlider moviesList={actionMovies} />
        <h1 className="heading1">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMovies} />
      </div>
    </div>
  )
}
export default PrimeVideo
