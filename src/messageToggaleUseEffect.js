import { useEffect, useState } from "react";

function MessageToggaleUseEffect(){
    const[message,setMessage]=useState("hello");
    const[clicked,setClicked]=useState(false);
    useEffect(()=>{
        if(clicked){
            setMessage("hi")
           
        }
    },[clicked])
    return(
        <>
        <h1>{message}</h1>
        <button onClick={()=>setClicked(!clicked)}>change message</button>
        </>
    );
}
export default MessageToggaleUseEffect;