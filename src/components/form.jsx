import { Link } from "react-router-dom";

const Form=({handleSubmit})=>{

    return(
        <>
        <div>
            <form onSubmit={(e)=>handleSubmit(e)} method="get">
                <Link to={'/checkout'}><button type="submit">Comprar</button></Link>
            </form>
        </div>
        </>
    )

}
export default Form;