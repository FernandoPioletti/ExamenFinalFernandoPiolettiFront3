import Card from "./components/Card";
import Form from "./components/Form";
import "./App.css";
import { useState } from "react";

function App() {

const [data,setDatos]= useState()

const handleSubmit = (formData) => {
  setDatos(formData);
};

  
  return (
    <div className="App">    
            
              <>
              <div className="cards">
                <Form onSubmit={handleSubmit} />
                {data && <Card nombre={data.nombre} marca={data.marca} />}
              </div></>
                    
         
      
    </div>
  
  );
        }





export default App;
