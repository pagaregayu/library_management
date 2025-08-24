import { useState } from "react";

export default function DisableAllOnClick() {
  const [disabled, setDisabled] = useState(false);
  const[show,setshow]=useState(true);

  const handleClick = () => setDisabled(true);

  return (
    <div>
      <input type="text" placeholder="Type here" disabled={disabled} />
      <button onClick={handleClick} disabled={disabled}>
        {disabled ? "Disabled" : "Click Me"}
      </button>
      <br/>
      <br/>

      <button onClick={()=>{setshow(false)}}>Button</button>
      {show?<p>hi good morning</p>:null}
      
    </div>
  );
}
