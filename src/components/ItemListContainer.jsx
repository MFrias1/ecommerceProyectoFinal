import { useState,useEffect } from "react"
import {useParams} from "react-router-dom";

const ItemListContainer = ()=>{
    const {id} = useParams();
    const [response, setResponse]=useStateseState([])
    const [Cargando, setCargando]=useState(true)
    
    useEffect(()=>{
         
    })
    return(
        <>
        
        </>
    )
}
export default ItemListContainer;