import ItemCount from "./ItemCount.jsx";

const ItemDetail =({item})=>{

   const handleAdd = () => {
        console.log('agregar al carrito')
    }

    return(
        <>
            <li className="listadoDeServicios"> 
                                            <div> 
                                                <img src={item.imagen} alt={item.nombre}></img> 
                                            </div>
                                            <div className="serviciosTitulo"> 
                                                <p>{item.nombre}</p>
                                                <p>{item.precio}</p>
                                            </div>
                   <ItemCount stock={item.stock} initial={0} onAdd={handleAdd}/>
            </li>
        </>
        
    )
}
export default ItemDetail;