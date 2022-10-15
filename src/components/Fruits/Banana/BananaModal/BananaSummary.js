import React from 'react';
import Banana from '../../../../assets/Bananas-scaled.jpg';
import BananaOrder from './BananaOrder/BananaOrder';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionType from '../../../../store/action';

const BananaSummary = (props) => {
    const style={
        width: '50%',
        height: '20%',
        opacity: '1',
        marginTop: '5%',
        marginBottom: '3.5%'
    }
    const mapBanana = Object.values(props.bananaOrder).map(items => {
        return items;
    });


    if(props.bananaOrder) {
        props.history.push("/inputForm");
    }

  return (
      
    <div style={{textAlign:'center', backgroundColor:'#fff'}}>
        <nav>
            <BananaOrder bananaOrder={mapBanana[0]}/>
        </nav>
        <img style={style} src={Banana} alt='' />
        <div style={{display:'flex', justifyContent:'center'}}>
        <button style={{marginRight:'10px', marginBottom: "10px"}}
             onClick={props.bananaForm}>Continue</button>
        <button style={{marginRight:'10px', marginBottom: "10px"}}
        onClick={props.bananaCancelHandler}>Cancel</button>
        </div>
    </div>
);
}

const mapStateToProps = state => {
    return {
        bananaOrder: state.orderBanana
    }
}

const mapDispatchToProps = dispatch => {
    return {
        bananaForm: () => dispatch({type: actionType.ORDER_BANANA})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(BananaSummary));