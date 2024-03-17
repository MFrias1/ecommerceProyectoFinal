import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd })=>{
  //estado contador
    const [contador, setContador] = useState(initial)

    const handleCountChange = (value) => {
        const newCount = contador + value;
        if (newCount >= 1 && newCount <= stock) {
            setContador(newCount)
        }
    }

    const handleAdd = () => {
        if (contador > 0) {
          onAdd(contador)
        }
    
    }

    return (
    <div>
        <button onClick={() => handleCountChange(-1)}>
          -
        </button>
        <button onClick={() => handleCountChange(+1)}>
          +
        </button>
        <button onClick={() => handleAdd()}>
          Agregar al carrito
        </button>
    </div>);
    

}
export default ItemCount;