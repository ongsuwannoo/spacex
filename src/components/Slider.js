export default (props) => {
  return (
    <div id="slider">
      {
        props.images.map(image => (
          <div>
            <img src={image} alt=""></img>
          </div>
        ))
      }
    </div>
  )
}
