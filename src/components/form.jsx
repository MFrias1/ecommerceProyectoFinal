const Form=({handleSubmit})=>{

    return(
        <>
        <div>
            <form onSubmit={(e)=>handleSubmit(e)} method="get">
                <input type="text" />
                <button type="submit">Comprar</button>
            </form>
        </div>
        </>
    )

}
export default Form;