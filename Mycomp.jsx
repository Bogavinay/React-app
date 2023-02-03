import React from "react";
function Mycomp(){
    var [a,setA]=React.useState(100)
    var [b,setB]=React.useState(200)
    function incA(){
        setA(a+10)
    }
    function incB(){
        setB(b+10)
    }
    React.useEffect(()=>{
        console.log('mycomp use effect called with empty array')
    },[])
    React.useEffect(()=>{
        console.log('mycomp use effect called')
    })
    React.useEffect(()=>{
        console.log('India')
    },[a])
    React.useEffect(()=>{
        console.log('USA')
    },[b])
    return(
        <div>
            <h1>My component</h1>
            <h1>A:{a}</h1>
            <h1>B:{b}</h1>
            <button onClick={incA}>incA</button>
            <button onClick={incB}>incB</button>
        </div>
    )
}
export default Mycomp