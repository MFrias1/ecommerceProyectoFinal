import ItemCount from "./ItemCount.jsx";

//<ItemCount stock={item.stock}  initial={0} onAdd={handleAdd} />
const ItemDetail =({item, index})=>{

   /* const handleAdd = () => {
        console.log('agregar al carrito')
    }*/

    return(
        <>
            <li key={index} className="listadoDeServicios"> <img src={item.imagen}></img> {item.nombre}</li>
        </>
    )
}
export default ItemDetail;