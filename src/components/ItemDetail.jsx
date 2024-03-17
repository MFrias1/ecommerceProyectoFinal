import ItemCount from "./ItemCount.jsx";

const ItemDetail =({item})=>{

   const handleAdd = () => {
        console.log('agregar al carrito')
    }

    return(
        <>
            <div>
                <li className="listadoDeServicios"> 
                    <img src={item.imagen}></img> 
                    {item.nombre}
                </li>
                <ItemCount stock={item.stock} initial={0} onAdd={handleAdd}/>
            </div>
        </>
    )
}
export default ItemDetail;