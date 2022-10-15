import React from 'react';

const Backdrop =(props)=>{
    const style={
        backgroundColor:'brown',
        width:'100%',
        height:'100%',
        top:'0',
        left:'0',
        zIndex:'80',
        position:'fixed',
        opacity: '0.5'
    }
    return(
        <>
        {props.show ? 
        <div onClick={props.AppleCancelHandler} style={style}></div> : null }
        </>
    );
}


export default Backdrop;