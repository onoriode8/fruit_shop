import React, { useState } from 'react';
import NavItems from "../NavItems";
import classes from './SideDrawer.module.css';

const SideDrawer = ({ sideDrawer, cancelSideDrawerHandler }) => {

    const [showOrders, setShowOrders] = useState(false);

    let side = [classes.sideDrawer, classes.close];
    if(sideDrawer) {
        side = [classes.sideDrawer, classes.open];
    }

    return(
        <React.Fragment>
            {sideDrawer ? <div onClick={cancelSideDrawerHandler}  
            className={classes.backdrop}></div> : null }
             <header className={side.join(" ")} >
                <nav className={classes.Nav}>
                    <NavItems roots='/'     
                         margin='10px' 
                         display="block"  
                         cancel={cancelSideDrawerHandler}
                         show={() => setShowOrders(true)} 
                        //  cancelShow={() => setShowOrders(false)}
                         showOrder={showOrders}
                    />
                </nav>
            </header>
            </React.Fragment>
    );
}

export default SideDrawer;