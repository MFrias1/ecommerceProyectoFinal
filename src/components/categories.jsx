const Categories = (item)=>{
    return(
        <li className="listadoDeServicios"> 
                    <div> 
                        <img src={item.imagen} alt={item.nombre}></img> 
                    </div>
                    <div className="serviciosTitulo"> 
                        <p>{item.nombre}</p>
                        <p>{item.precio}</p>
                    </div>
                    <button> <p>Mas detalles</p></button>
            </li>
    )
}
export default Categories;