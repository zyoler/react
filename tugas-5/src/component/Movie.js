function Movie(props) {
  return (
    <div>
        <img src={props.poster}/>
        <h4>{props.title}</h4>
        <h6>{props.year}</h6>
        <button>Tonton</button>
    </div>
  )
}

export default Movie