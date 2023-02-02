import React, { useState} from "react";
import Archivo from "../data/archivo"

const Mantenedor = ({colaborador, setColaborador}) => {

    const [correlativo, setCorrelativo] = useState(4);
    const [listado, setListado] = useState(Archivo)
    const [busca, setBusca] = useState('')
    const handleChange = (e) => {
        setColaborador({
            ...colaborador,
            [e.target.name]: e.target.value
        })
        
    }

    const handleSubmit = (event) => {
        
        let {nombre, correo} = colaborador;
        setCorrelativo(correlativo+1);
        if (nombre === '' || correo === '')
        alert('Todos los campos son obligatorios' )
        let colab = { nombre:nombre, id:correlativo, correo:correo}
        setListado([...listado,colab])
        event.preventDefault();
    }

    const removeItem = (index) => {
        setListado((current) =>
        current.filter((colab) => colab.id !== index));
    };

    return(
        <div>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre del Nuevo Colaborador </label>
                <input  name="nombre" onChange={handleChange} type="text" id="nombre" className="form-control" placeholder="Nombre y Apellido" />
            </div>
            <div className="mb-3">
                <label htmlFor="correo" className="form-label">Correo del Nuevo Colaborador </label>
                <input name="correo" onChange={handleChange} type="email" id="correo" className="form-control" placeholder="correo@correo.com"/>
            </div>
            <button type="submit" className="btn btn-primary">Agregar Colaborador</button>
        </form>
        <div>
            <h1>Listado de Colaboradores</h1>

            <div className='d-flex justify-content-end'>
                <div className='col-4'>
                    <label>Buscar</label>
                    <input className='form-control mb-3' value={busca} placeholder='Buscar Colaborador' onChange={ (event) => setBusca (event.target.value)}></input>
                </div>
            </div>
            

            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody id='colaborador'>
                    {

                        listado.map((item, index) =>{
                            let nombre = item.nombre.toLowerCase()
                            if (busca ==='' || nombre.includes(busca.toLowerCase())) {
                            return(
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.nombre}</td>
                                    <td>{item.correo}</td>
                                    <td className="text-right">
                                    <i onClick={() => removeItem(item.id)} className="fas fa-trash de" data="eliminado"></i></td>
                                </tr>
                            )
                        }
                    })
                }
                </tbody>
            </table>
        </div>
        </div>
        )
    }


export default Mantenedor