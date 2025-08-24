import { useEffect, useState } from "react";

function UseeffectHook(){
    const[count,setcount]=useState(0);
    useEffect(()=>{
        alert("good morning")
    },[])
    useEffect(()=>{
        alert("good morning")
    },[count])
    return(
        <>
            <button onClick={()=>setcount(count+1)}>increment</button>
        </>

    );

}
export default UseeffectHook;