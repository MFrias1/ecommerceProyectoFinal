const ItemDetail =({item, index})=>{

    return(
        <>
            <li key={index} className="listadoDeServicios"> <img src={item.imagen}></img> {item.nombre}</li>
     
        </>
    )
}
export default ItemDetail;