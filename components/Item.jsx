import "../src/App.css"

const Item = (item, index) =>{

    return( 
        <>
            <li key={index} className="listadoDeServicios"> <img src={item.imagen}></img> {item.nombre}</li>
        </>
    )
}
export default Item;