import React from 'react';
import errCSS from './ErrorMessage.module.css';

const errorMessage = (props) => {
    let gettingFruits = <p>Loading...</p>;
    if(props.gettingFruits) {
        gettingFruits= <div>{props.gettingFruits}</div>
    }

    let style = [errCSS.GettingFruits, errCSS.close];
    if(props.gettingFruits) {
        style= [errCSS.GettingFruits, errCSS.open];
    }

    return (
        <div className={style.join(' ')}>
            {gettingFruits}
        </div>
    )
}

export default errorMessage;