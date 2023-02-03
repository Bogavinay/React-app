import React from "react";
import { Link, Outlet } from "react-router-dom";
import YourForm from "./YourForm";
import Mobilelist from "./Mobilelist";
function Myform()
{
 var ref1=React.useRef()
 var ref2=React.useRef()
 var ref3=React.useRef()
 React.useEffect(()=>{
    ref1.current.focus()
    },[])
 function checkEnter1(e){
     if(e.key==='Enter')
     {
      ref2.current.focus();
     }
    }
 function checkEnter2(e){
     if(e.key==='Enter')
     {
    ref3.current.focus();
     }
    }
 return(
     <div>
        <h1>MY FORM</h1>
         <input type='text' ref={ref1}  onKeyUp={checkEnter1}/>
        <input type='text' ref={ref2} onKeyUp={checkEnter2}/>          
         {/* <YourForm ref={ref3}></YourForm> */}
         <Link to='/Mobilelist'>mobilelist</Link>
         <Outlet></Outlet>
        
         </div>
    )
}
export default Myform
