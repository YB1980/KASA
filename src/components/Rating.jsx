import '../styles/Rating.css'

function Rating({ value }) {

  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="rating">
      {stars.map((star) => (
        <i
  key={star}
  className={star <= value ? 'fa-solid fa-star active' : 'fa-solid fa-star inactive'}
></i>
      ))}
    </div>
  )
}

export default Rating