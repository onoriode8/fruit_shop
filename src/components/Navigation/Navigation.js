import React, { useState } from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { FiShoppingCart } from 'react-icons/fi';
import './Navigation.css';
import NavItems from './NavItems';
import Fragment from '../Fragment/Fragment';
import SideDrawer from './SideDrawer/SideDrawer';
import { connect } from 'react-redux';

const Navigation = (props) => {

    const [showOrders, setShowOrders] = useState(false);

    const cancelShowHandler = () => setTimeout(() => setShowOrders(false), 20000 );

    return(
    <Fragment>
        <SideDrawer sideDrawer={props.sideDrawer}
        cancelSideDrawerHandler={props.cancelSideDrawerHandler}/>
        <div className='navigation'>
            <div className='menu' style={{color: "#fff"}} onClick={props.sideDrawerHandler}><BiMenuAltLeft/></div>
            <div className='Menu'><FiShoppingCart/></div>
            <nav className='mobile'>
                <NavItems display="flex" 
                    margin="0px 15px" 
                    show={() => setShowOrders(true)} 
                    cancelShow={cancelShowHandler}
                    showOrder={showOrders}
                />
            </nav>
        </div>
    </Fragment>
)};

const mapStateToProps = state => {
    return {
        sideDrawer: state.sideDrawer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sideDrawerHandler: () => dispatch({type: "CONTINUE"}),
        cancelSideDrawerHandler: () => dispatch({type: "CANCEL"})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);