import React from 'react';
import Apple from '../../../../../assets/Apple.jpg';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionType from '../../../../../store/action';
import classes from './AppleSummary.module.css';

const AppleSummary = (props) => {
    const mapApple = Object.values(props.apple).map(apple=>{
        return apple;
    })


    if(props.appleOrder) {
        props.history.push("/inputForm/apple");
    }

    return(
    <div style={{textAlign:'center'}} className={classes.appleSummary}>
        <p>You are Purchasing Apple!</p>
        <p><strong>Price: #{mapApple[1]} </strong></p>
        <p><strong>Continue</strong> to purchase or click <strong>Cancel</strong> to exit</p>
        <img style={{width:'45%', textAlign:'center', 
           height:'20%', marginBottom:'3.5%',
           marginTop:'1%'}} src={Apple} alt='' />
        <div style={{display:'flex', justifyContent:'center'}}>
        <button onClick={props.AppleCancelHandler}>Cancel</button>
        <button style={{marginLeft:'10px'}} onClick={props.appleForm}>Continue</button>
    </div>
 </div>
)};

const mapStateStateToProps = state => {
    return {
        appleOrder: state.orderApple
    }
}

const mapDispatchToProps = dispatch => {
    return {
        appleForm: () => dispatch({type: actionType.ORDER_APPLE})
    }
}

export default connect(mapStateStateToProps, mapDispatchToProps)(withRouter(AppleSummary));