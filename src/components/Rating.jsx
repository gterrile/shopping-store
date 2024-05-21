// eslint-disable-next-line react/prop-types
function Rating({number}) {
  const rating = parseInt(number - 1)
  let arr = []

  for (let i = 0; i < 5; i ++) {
    (rating > i) ? arr[i] = true : arr[i] = false
  }

  return (
    <div className="rating">
      {arr.map(item => {
        return (item ? <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
        : <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-200" />) 
      })}
    </div>
  )

}

export default Rating