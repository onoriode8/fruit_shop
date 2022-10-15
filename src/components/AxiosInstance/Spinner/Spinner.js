import  React from 'react';
import cssSpinner from './Spinner.module.css';
import { FiShoppingCart } from 'react-icons/fi';

const spinner = () => (
    <div>
         <div style={{
                fontSize: "5em",
                marginTop: "80px",
                color: "brown",
                textAlign: "center"
            }}><FiShoppingCart/></div>
        <div className={cssSpinner.loader}>Loading...</div>
    </div>
    
)

export default spinner;