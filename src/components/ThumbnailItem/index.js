import './index.css'

const ThumbnailItem = props => {
  const {eachImage, updateThumbnail} = props
  const {thumbnailUrl, id, thumbnailAltText} = eachImage

  const onClickThumbnail = () => {
    updateThumbnail(id)
  }

  return (
    <li>
      <button type="button" className="btn" onClick={onClickThumbnail}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className="thumbnail-logo"
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
