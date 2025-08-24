// import Aboutus from './Aboutus';
import './App.css';
// import ArrObj from './ArrObj';
// import CountIncAndDec from "./CountIncDec";

import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutus from './Aboutus';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';
import RegisterLogin from './RegisterLogin';
import User from './User';
// import DisableAllOnClick from './DisableCode';
// import EmojiToggle from './EmojiToggle';
// import FunctionEx from './FunctionEx';
// import PropEx from './PropsEx';
// import UseeffectHook from './UseEffectHook';
// import MessageToggaleUseEffect from './messageToggaleUseEffect';

function App() {

  const[color,setcolor]=useState("white");

  return (
    <div className="App" style={{backgroundColor:color}}>

      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home></Home>}>Home</Route>
        <Route path="/aboutus" element={<Aboutus></Aboutus>}>Aboutas</Route>
        <Route path="/contact" element={<Contact></Contact>}>Contact</Route>
        <Route path="/register-login" element={<RegisterLogin />} />
        <Route path="/User" element={<User />} />
        
      </Routes>
      </BrowserRouter>

      
      {/* <Aboutus></Aboutus>
      <ArrObj></ArrObj>
      <FunctionEx></FunctionEx>
      <PropEx name="gayatri" age={22}/>
      <EmojiToggle/>
      <CountIncAndDec/>
      <DisableAllOnClick/>
      <UseeffectHook/>
      <MessageToggaleUseEffect/> */}


     <div>
       <button onClick={()=>{setcolor("pink")}}>Change color to pink</button>
      <button onClick={()=>{setcolor("white")}}>Change color to white</button>
     </div>
    </div>
  );
}

export default App;
