import { useState } from "react";
import styles from "../styles/Formulario.module.css"
import Ingredientes from "./subcomponentes formulario/Ingredientes";
import Trazas from "./subcomponentes formulario/Trazas";
import Contiene from "./subcomponentes formulario/Contiene"
import Mensaje from "./Mensaje";


const Formulario = () => {

  //Producto

  const [producto, setProducto] = useState({
    nombre: "",
    marca: "",
    submarca: "",
    categoria: "",
    subcategoria: "",
    codigo: "",
    descripcion: "",
    ingredientes: [],
    trazas: [],
    contiene: [],
    aptoVegano: false,
    aptoCeliaco: false,
    fuente: "",
  });

  //Ingrediente
  const [ingrediente, setIngrediente] = useState({
    nombreIngrediente: "",
    observacionIngrediente: "",
  });

  const handleIngrediente = ingrediente =>{
      if(ingrediente.nombreIngrediente===""){return} 
      const nuevosIngredientes = [...producto.ingredientes, ingrediente]
      setIngrediente({
        nombreIngrediente: "",
        observacionIngrediente: ""
      })
      setProducto({...producto,ingredientes: nuevosIngredientes})
  }

  const eliminarIngrediente = (nombreIngrediente) => {
      const nuevosIngredientes = producto.ingredientes.filter(
        ing => ing.nombreIngrediente !== nombreIngrediente)
      setProducto({...producto,ingredientes: nuevosIngredientes})
  }

  //Traza
  const [traza, setTraza] = useState("");

  const handleTrazas = traza => {
    if(traza===""){return} 
    const nuevasTrazas = [...producto.trazas, traza]
    setTraza("")
    setProducto({...producto,trazas: nuevasTrazas})
  }  

  const eliminarTraza = (nombreTraza) => {
      const nuevasTrazas = producto.trazas.filter(
          tra => tra !== nombreTraza)
      setProducto({...producto,trazas: nuevasTrazas})
  }

  //Contiene
  const [contiene, setContiene] = useState("");

  const handleContiene = cont => {
    if(contiene===""){return} 
    const nuevoContiene = [...producto.contiene, cont]
    setContiene("")
    setProducto({...producto,contiene: nuevoContiene})
  }  

  const eliminarContiene = (nombreContiene) => {
    const nuevoContiene = producto.contiene.filter(
        cont => cont !== nombreContiene)
    setProducto({...producto,contiene: nuevoContiene})
  }

  // Verificación y envío

  const [mensaje, setMensaje] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if(producto.nombre===""){
        setMensaje("El campo nombre es obligatorio")
        scrollTo(0,0)
        return   
    }
    if(producto.marca===""){
        setMensaje("El campo marca es obligatorio")
        scrollTo(0,0)
        return
    }
    if(producto.categoria===""){
        setMensaje("El campo categoría es obligatorio")
        scrollTo(0,0)
        return
    }
    if(producto.ingredientes.length===0){
        setMensaje("Ingrese los ingredientes")
        scrollTo(0,0)
        return
    }

    setProducto({
        nombre: "",
        marca: "",
        submarca: "",
        categoria: "",
        subcategoria: "",
        codigo: "",
        descripcion: "",
        ingredientes: [],
        trazas: [],
        contiene: [],
        aptoVegano: false,
        aptoCeliaco: false,
        fuente: ""
    })

    setMensaje("")
    console.log(producto)
  }

  return (
    
    <div className={styles.centro}>

        <div className={styles.base}>

            <h1>Agregar Producto</h1>

            <hr className={styles.separador}/>

            {mensaje!=="" && <Mensaje>{mensaje}</Mensaje>}

            <form onSubmit={handleSubmit}>

                <div className={styles.infoPrincipal}>
                    <div>
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="nombre" 
                            placeholder="Nombre del producto"
                            onChange={(e) => setProducto({...producto,nombre: e.target.value})}
                            value={producto.nombre}    
                        />
                    </div>
                    <div>
                        <label htmlFor="marca" className="form-label">Marca</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="marca" 
                            placeholder="Marca del producto" 
                            list="opcionesMarca"
                            onChange={(e) => setProducto({...producto,marca: e.target.value})}
                            value={producto.marca}  
                        />
                        <datalist id="opcionesMarca">
                            <option value="Marca" />
                        </datalist>
                    </div>
                    <div>
                        <label htmlFor="submarca" className="form-label">Submarca</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="submarca" 
                            placeholder="Submarca del producto" 
                            list="opcionesSubmarca"
                            onChange={(e) => setProducto({...producto,submarca: e.target.value})}
                            value={producto.submarca}  
                        />
                        <datalist id="opcionesSubmarca">
                            <option value="Submarca" />
                        </datalist>
                    </div>
                </div>

                <div className={styles.categoriaYBarras}>
                    <div className={styles.infoCategoria}>
                        <div>
                            <label htmlFor="categoria" className="form-label">Categoría</label>
                            <select className="form-select" aria-label="Default select example" id="categoria"
                                onChange={(e) => setProducto({...producto,categoria: e.target.value})}
                                value={producto.categoria}  
                            >
                                <option value="">Seleccione</option>
                                <option value="1">Categoría 1</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="subcategoria" className="form-label">Subategoría</label>
                            <select className="form-select" aria-label="Default select example" id="subcategoria"
                                onChange={(e) => setProducto({...producto,subcategoria: e.target.value})}
                                value={producto.subcategoria}  
                            >
                                <option value="">Seleccione</option>
                                <option value="1">Subcategoría 1</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.barra}>
                            <label htmlFor="codigo" className="form-label">Código de barras</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="codigo" 
                                placeholder="Ingrese el código"
                                onChange={(e) => setProducto({...producto,codigo: e.target.value})}
                                value={producto.codigo}  
                            />
                        </div>
                </div>

                <div className={styles.areaTexto}>
                    <div className="mb-3">
                        <label htmlFor="area" className="form-label">Descripción</label>
                        <textarea className="form-control" id="area" rows="3" placeholder="Ingrese una descripción"
                            onChange={(e) => setProducto({...producto,descripcion: e.target.value})}
                            value={producto.descripcion}  
                        />
                    </div>
                </div>

                <hr className={styles.separador}/>
                
                <div className={styles.ingredientes}>
                    <div className="input-group">
                        <span className="input-group-text" id="ing">Ingredientes</span>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="ing" 
                            aria-describedby="basic-addon3"
                            placeholder="Nombre"
                            onChange={(e) => setIngrediente({...ingrediente,nombreIngrediente: e.target.value})}
                            value={ingrediente.nombreIngrediente}
                        />
                        <input 
                            type="text" 
                            className="form-control" 
                            id="obs" 
                            aria-describedby="basic-addon3"
                            placeholder="Observaciones"
                            onChange={(e) => setIngrediente({...ingrediente,observacionIngrediente: e.target.value})}
                            value={ingrediente.observacionIngrediente}
                        />
                        <button 
                            className="btn btn-outline-secondary" 
                            type="button"
                            onClick={ () => handleIngrediente(ingrediente)}
                            >Agregar
                        </button>
                    </div>
                    
                </div>

                <div className={ producto.ingredientes.length>0 ? styles.contenIngredientes : ""}>
                    {
                        producto.ingredientes.map((ing, key) => (
                              <Ingredientes
                                ingrediente={ing}
                                key={key}
                                eliminarIngrediente={eliminarIngrediente}
                              />
                        ))     
                    }

                </div>
                

                <div className={styles.trazas}>
                    <div className= "input-group">
                        <span className="input-group-text" id="trazas">Trazas</span>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="trazas" 
                            aria-describedby="basic-addon3"
                            placeholder="Ingrediente"
                            onChange={ e => setTraza(e.target.value)}
                            value={traza}
                        />
                        <button className="btn btn-outline-secondary" type="button"
                            onClick={ () =>handleTrazas(traza)}
                        >Agregar</button>
                    </div>
                </div>
                

                <div className={ producto.trazas.length>0 ? styles.contenTrazas : ""}>
                    {   
                        producto.trazas.map((tra, key) => (
                                <Trazas
                                    traza={tra}
                                    key={key}
                                    eliminarTraza={eliminarTraza}
                                />
                            )) 
                    }
                </div>

                <div className={styles.contiene}>
                    <div className= "input-group">
                        <span className="input-group-text" id="contiene">Contiene</span>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="contiene" 
                            aria-describedby="basic-addon3"
                            placeholder="Nombre"
                            onChange={ e => setContiene(e.target.value)}
                            value={contiene}
                        />
                        <button className="btn btn-outline-secondary" type="button"
                            onClick={ () =>handleContiene(contiene)}
                        >Agregar</button>
                    </div>
                </div>
                

                <div className={ producto.contiene.length>0 ? styles.contenContiene : ""}>
                    {   
                        producto.contiene.map((con, key) => (
                                <Contiene
                                    contiene={con}
                                    key={key}
                                    eliminarContiene={eliminarContiene}
                                />
                            )) 
                    }
                </div>
                

                <hr className={styles.separador}/>

                <div className={styles.checks}>
                    <div className={`form-check form-switch ${styles.checkIndividual}`}>
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            role="switch" 
                            id="vegano"
                            onChange={ e => setProducto({...producto,aptoVegano:!producto.aptoVegano})} 
                        />
                        <label className="form-check-label" htmlFor="vegano">No apto vegano / Apto vegano</label>
                    </div>

                    <div className={`form-check form-switch ${styles.checkIndividual}`}>
                        <input 
                        className="form-check-input" 
                        type="checkbox" 
                        role="switch" 
                        id="celiaco"
                        onChange={ e => setProducto({...producto,aptoCeliaco:!producto.aptoCeliaco})}
                        />
                        <label className="form-check-label" htmlFor="celiaco">No apto celíaco / Apto celíaco</label>
                    </div>
                </div>
                
                <hr className={styles.separador}/>

                <div className={styles.fuente}>
                    <label className="form-label" htmlFor="inputNombre">Fuente de información</label>
                    <input
                    className="form-control"
                    id="inputNombre"
                    name="fuente"
                    onChange={ e => setProducto({...producto,fuente:e.target.value})}
                    value={producto.fuente}
                    />
                </div>

                <hr className={styles.separador}/>

                

                <div className={styles.btnAgregar}>
                    <button type="submit" className="btn btn-success col-12">
                        Agregar
                    </button>
                </div>
            
            </form>

        </div>
    </div>    
)}

export default Formulario
