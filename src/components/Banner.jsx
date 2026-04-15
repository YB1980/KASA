import '../styles/Banner.css'

function Banner({ imageUrl, title = '', variant = '' }) {
  return (
    <div
      className={`banner ${variant}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {title && <h1>{title}</h1>}
    </div>
  )
}

export default Banner