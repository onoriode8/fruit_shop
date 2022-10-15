import React from 'react';
import watermelon from '../../../../../assets/watermelon.jpg';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionType from '../../../../../store/action';

const watermelonSum = (props) => {
    const mapWatermelon = Object.values(props.watermelon).map(watermelon => {
        return watermelon;
    });

    if(props.watermelonOrder) {
        props.history.push("/inputForm/watermelon");
    };

    return(
    <div style={{textAlign: 'center'}}>
        <p>You are purchasing some Watermelon</p>
        <p> <strong>Price: #{mapWatermelon[3]} </strong></p>
        <p><strong>Continue</strong> to purchase or click <strong>Cancel</strong> to exit</p> 
        <img style={{width:'50%', height:'60%'}} src={watermelon} alt='' />
        <div>
        <button style={{marginRight: '5px'}} onClick={props.watermelonForm}>Continue</button>
        <button onClick={props.watermelonCancelHandler}>Cancel</button>
    </div>
</div>
)};

const mapStateToProps = state => {
    return {
        watermelonOrder: state.orderWatermelon
    }
}

const mapDispatchToProps = dispatch => {
    return {
        watermelonForm: () => dispatch({type: actionType.ORDER_WATERMELON})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(watermelonSum));