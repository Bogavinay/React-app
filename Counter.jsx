import React from 'react'
function Counter(props){
    var [count,setCount]=React.useState(props.initialValue)
    function inc(){
        setCount(count+props.add)
    }
    function dec(){
        setCount(count-1)
    }
    return(
        <div className='betterview'>
            <button onClick={inc}>Increment</button>
            <h1 style={((count%2===0?{backgroundColor:'red'}:{backgroundColor:'blue'}))}>{count}</h1>
            <button onClick={dec}>Decrement</button>
        </div>
    )
}
export default Counter