
import { useState } from 'react';
import Mantenedor from './Component/Colaborador';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [colaborador, setColaborador] = useState({
    nombre:'',
    correo: '',
    id: ''
  })

  return (
    <div className="App">
      <div className='bg-dark d-flex justify-content-center p-4'>
        <h1 className='text-light'>Base de datos Colaboradores</h1>
        <div className='col-4 d-flex justify-content-end'/>
      </div>
      <div className='container mt-3'>
        <h2>Agregar Nuevo Colaborador</h2>
        <Mantenedor  colaborador={colaborador} setColaborador={setColaborador}/>
      </div>
    </div>
  );
}

export default App;
