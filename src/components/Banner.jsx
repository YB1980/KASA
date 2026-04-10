import '../styles/Banner.css'

function Banner({ imageUrl, title = '' }) {
  
  return (
    <>
        <div className='banner' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${imageUrl})` }}>
          {title && <h1>{title}</h1>}
        </div>
    </>
  )
}

export default Banner