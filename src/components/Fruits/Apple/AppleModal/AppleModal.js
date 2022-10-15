import React from 'react';
import './AppleModal.css';
import BackDrop from '../BackDrop';

const appleModal = (props) => {
    return(
        <header>
            <BackDrop AppleCancelHandler={props.AppleCancelHandler} show={props.showApple}/>
            <div style={{
                transform: props.showApple ?
                 'translateY(0)' : 'translateY(-150vh)',
                 opacity:props.showApple ? '1' : '0'
            }} className='appleModal'>
                {props.children}
            </div> 
        </header>
    );
};

export default appleModal;