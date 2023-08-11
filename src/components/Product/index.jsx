import React, { useEffect, useState } from "react";
import axios from "axios";
//import loading from './imgs/loading.jpg'

function App() {
    const [data, setData] = useState([]);
    const [searchname, setSearchName] = useState('')
    const [name, setName] = useState('')
    const [img, setImg] = useState('');
    const [price, setPrice] = useState('');
    

    const getProduct = async () => {
        try {
            const url = `http://127.0.0.1:4000/products/`;
            const response = await axios.get(url);
            setData(response.data)
        }
        catch (error) {
            console.log(error)
        }
    };
    useEffect(() => {
        //getClientes();
    }, [])

    const saveProduct= async () => {
        if (!name.trim() || !img.trim() || !price.trim()) {
            alert("Todos los datos son obligarios");
            return;
        }
        
        try {
            const response = await axios.post(`http://127.0.0.1:4000/products/`, {
                name,
                img,
                price
            });
            alert("Producto agregado correctamente ...")
            //getClientes();
        } catch (error) {
            console.log(error)
        }
    };

    const updateProduct = async (name) => {
        if (!name.trim() || !img.trim() || !price.trim()) {
            alert("Todos los datos son obligatorios");
            return;
        }
        try {
            const response = await axios.put(`http://127.0.0.1:4000/products/${name}`, {
                name,
                img,
                price
            });
            alert("Producto actualizado correctamente ...")
            //getClientes();
        } catch (error) {
            console.log(error)
        }
    };

    const deleteProduct = async (name) => {
        try {
            if (window.confirm("Está seguro de eliminar este producto?")) {
                const response = await axios.delete(`http://127.0.0.1:4000/products/${name}`);
                alert("Producto eliminado correctamente ...")
                //getClientes();
            }

        } catch (error) {
            console.log(error)
        }
    };


    const getProductxName = async () => {
        try {
            const url = `http://127.0.0.1:4000/products/${searchname}`;
            const response = await axios.get(url);
            if (response.data.name != null) {
                setName(response.data.name);
                setImg(response.data.img);
                setPrice(response.data.price);
            }
            else {
                alert("No se encuentra el producto " + name);
            }
        }
        catch (error) {
            console.log(error)
        }
    };

    const onClean = () => {
        setName("");
        setImg("");
        setPrice("");
        setData([]);
    }

    return (
        <div className="container">
            <br/>
            <form>
                <div className="row">
                    <div className="col">
                        <label htmlFor="searchname">Nombre a Buscar</label>
                        <input
                            type="text"
                            id="searchname"
                            name="searchname"
                            placeholder="Nombre a buscar"
                            className="form-control"
                            value={searchname}
                            onChange={e => setSearchName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            placeholder="Nombre"
                            className="form-control"
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="img">Imagen</label>
                        <input
                            type="text"
                            id="img"
                            name="img"
                            placeholder="Ruta Imagen"
                            value={img}
                            className="form-control"
                            onChange={e => setImg(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label htmlFor="price">Precio</label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            placeholder="Precio"
                            value={price}
                            className="form-control"
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>
                </div>
                <button className="btn btn-primary mt-3" type="button" onClick={saveProduct}>Guardar</button>
                <button className="btn btn-success mt-3 mx-3" type="button" onClick={() => getProductxName(searchname)}>Buscar</button>
                <button className="btn btn-warning mt-3 mx-3" type="button" onClick={() => updateProduct(searchname)}>Actualizar</button>
                <button className="btn btn-danger mt-3 mx-3" type="button" onClick={() => deleteProduct(searchname)}>Eliminar</button>
                <button className="btn btn-dark mt-3 mx-3" type="button" onClick={getProduct}>Listar Productos</button>
                <button className="btn btn-info mt-3 mx-3" type="button" onClick={onClean}>Limpiar Datos</button>
            </form>
            <br/>
            {/* Listado */}
            {/* {isLoading ? <div><img src={loading} width="50" height="50"></img></div> :
                <div className="container">
                    <table className="table table-hover">
                        <thead>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                        </thead>
                        <tbody>
                            {data.map(customer => (
                                <tr>
                                    <td>{customer._id}</td>
                                    <td>{customer.nombre}</td>
                                    <td>{customer.apellidos}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            } */}
        </div>
    );
}

export default App;