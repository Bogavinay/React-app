import React from "react";
import Mobile from "./Mobile";
function Mobilelist(){
    var [a,setA]=React.useState([
        {
            Brand:'Samsung',
            Market:true,
            
        },{
            Brand:'Google',
            Market:false,
        },{
            Brand:'RedMi',
            Market:true
        },{
            Brand:'Vivo',
            Market:false
        },{
            Brand:'Oneplus',
            Market:true
        },{
            Brand:'Nothing',
            Market:false
        },{
            Brand:'Oppo',
            Market:true
        },])
    function boga(){
        var b=document.getElementById('vinay').value;
        setA([...a,{Brand:b,Market:false}])
    }
   var abc=React.useCallback (function (i){
        var c=[...a]
        c[i].Market=true
        setA([...c])
    
    },[])
   var def=React.useCallback( function def(i){
        var f=[...a]
        f[i].Market=false;
        setA([...f])
    },[])
    return(
        <div className="border border-2 p-2 ">
        <h1>Brands in Market</h1>
        <input type='text' id='vinay' />
        <button onClick={boga}>add</button>
       
        {
             a.map((cell,i)=>{
                return <Mobile Brand={cell.Brand} Market={cell.Market} abc={abc} i={i} def={def} ></Mobile>

        })
    }
    </div>
     )
}
export default Mobilelist;