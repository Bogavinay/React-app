import React from "react";
function Mobile(props){
    console.log('Mobile')
    return(
        <li id='betterview' className={props.Market?'bg-success m-1 p-2':'bg-danger m-1 p-2'}>{props.Brand}
                <span><button style={(props.Market)?{display:'none'}:{display:'inline'}} onClick={()=>{props.abc(props.i)}} >Done</button>
                <button style={(props.Market)?{display:'inline'}:{display:'none'}} onClick={()=>{props.def(props.i)}}>Undo</button>
                </span></li>
    )
}
export default React.memo(Mobile);