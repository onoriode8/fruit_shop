import React from 'react';
import './BananaBackdrop.css';

const BananaBackdrop =(props)=>(
  <> {props.banana ? <div onClick={props.bananaCancelHandler} className='bananaBackdrop'>
    </div> : null } 
    </>
);
                    

export default BananaBackdrop;