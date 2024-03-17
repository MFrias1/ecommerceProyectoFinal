import ItemCount from "./ItemCount.jsx";

const ItemDetail =({item, index})=>{

   const handleAdd = () => {
        console.log('agregar al carrito')
    }

    console.log("Datos del ítem:", item);

    return(
        <>
            <li key={index} className="listadoDeServicios"> 
                    <img src={item.imagen} alt={item.nombre}></img> 
                   <h1> {item.nombre} </h1>
            </li>
            <ItemCount stock={item.stock} initial={0} onAdd={handleAdd}/>
        </>
        
    )
    
}
export default ItemDetail;