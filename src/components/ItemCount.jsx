import { useState } from "react";

const ItemCount = ({ stock, initial,  onAdd , onRemove })=>{
  //estado contador
    const [contador, setContador] = useState(initial)

    const handleCountChange = (value) => {
        const newCount = contador + value;
        if (newCount >= 0 && newCount <= stock) {
            setContador(newCount)
        }
        if(value >= 1){
          onAdd(1)
        }
        if(value === -1){
          onRemove(1)
        }
    }

    return (
    <div>
        <button onClick={() => handleCountChange(-1)}>
          -
        </button>
        <input
        type="text"
        value={contador}
        readOnly
        className="w-10 text-center bg-gray-100"
        />
        <button onClick={() => handleCountChange(1)}>
          +
        </button>
        {<button onClick={() =>  onAdd()}>
          Agregar al carrito
          </button>}
    </div>);
    

}
export default ItemCount;