import servicio from "../utils/productos.json";
export const Home = () => {
    return (
        <section>
            <div className="tituloBanner">
                <h2> Nuestros Servicios </h2>
            </div>
            <ul className="servicios">
            {servicio.map((servicio) => (
                    <li className="servicios__elementos">
                        <div className="elementos_img">
                            <img src={servicio.imagen} alt={servicio.nombre} />
                        </div>
                        <div className="elementos_informacion">
                            <p>{servicio.nombre}</p>
                            <p>{servicio.precio}</p>
                        </div>
                        <button className="elementos_button"> <p>Mas detalles</p></button>
                    </li>
                ))}
            </ul>
        </section>
    )
}