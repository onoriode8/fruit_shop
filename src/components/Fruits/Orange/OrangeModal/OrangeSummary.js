import Orange from '../../../../assets/Orange.jpg';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actionType from '../../../../store/action';

const orangeSummary = (props) => {
    const OrangePrice = Object.values(props.orangePrice).map(orange => {
        return orange;
    });

    if(props.orangeOrder) {
        props.history.push("/inputForm/orange");
    }

    return (
        <header>
            <div style={{textAlign: 'center', backgroundColor: '#fff'}}>
                <p>You are Ordering Orange!</p>
                <p><strong>Price: #{OrangePrice[2]}</strong></p>
                <p>click <strong>Cancel</strong> to Exit or <strong>Continue</strong>to proceed to order</p>
                <img style={{width:'55%', height:'30%'}} src={Orange} alt='' />
                <div>
                <button onClick={props.orangeForm}>Continue</button>  
                <button onClick={props.orangeCancelHandler}>Cancel</button>
                </div>
            </div>
        </header>
    )
}

const mapStateToProps = state => {
    return {
        orangeOrder: state.orderOrange
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // work on here later to fix the error on the console when user try to order....
        orangeForm: () => dispatch({type: actionType.ORDER_ORANGE})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(orangeSummary));