import { useState } from "react";

function Countincdec(){
    const [count, setCount] = useState(0);
    let incButton=()=>{if(count<10){setCount(count+1)}};
    let decButton=()=>{if(count>-10){
        setCount(count-1)
    }};

    return(
        <div>  
            <h1>{count}</h1>
            <button onClick={incButton}>Increse count</button>
            <button onClick={decButton}>Decrease button</button>
        </div>



    );
}
export default Countincdec;