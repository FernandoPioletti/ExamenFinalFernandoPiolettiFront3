
const Card = (datos) => {
  return (
    <div className="card">
                <h2>Hola {datos.nombre}</h2>
                <h5>Tu marca de autos favorita es:</h5>
                <button>{datos.marca}</button>         

    </div>
  )
}

export default Card