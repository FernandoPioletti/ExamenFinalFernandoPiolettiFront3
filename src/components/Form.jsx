import { useState } from "react";
import "../App.css";

// eslint-disable-next-line react/prop-types
const Form=({onSubmit}) => {

    const [nombre, setNombre] = useState("");

    const [marca, setmarca] = useState("");

    const [error, setError] = useState("");

    const handleSubmit = (e) => {

    e.preventDefault();

    if (nombre.trim().length < 3 || /^\s/.test(nombre)) {
      setError('El nombre no debe incluir espacios en blanco o ser menor a tres caracteres');
      return;
    }

    if (marca.length < 6) {
      setError('El marca no puede ser menor de 6 caracteres');
      return;
    }

    onSubmit({ nombre, marca });
    setError('');
    setNombre('');
    setmarca('');
  };

    return (


    <div>
        <form className = "form-container" onSubmit={handleSubmit}>
            <div>

                <h1>Tu marca favorita</h1>
                <label>Tu nombre</label>
                <input type="text" placeholder="" value={nombre} onChange={(x) => {
                    setNombre(x.target.value);
                    }}/>


                <label>Tu marca favorita</label>
                <input type="text" value={marca} placeholder="" onChange={(x) => {
                  setmarca(x.target.value)
                }}/>


                <button type="submit">Enviar</button>
            </div>
            {error && <p>{error}</p>}
        </form>
                
    </div>
    )
            }
    
    
    


export default Form;