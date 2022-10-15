import strawberry from "../../../../assets/Strawberry.jpg";
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import * as actionType from '../../../../store/action';

const strawBerrySum = (props) => {
    const mapStrawberry = Object.values(props.strawberry).map(strawberry=> {
        return strawberry;
    });

    if(props.strawBerryOrder) {
        props.history.push("/inputForm/strawberry");
    }

    return(    
    <header style={{textAlign: 'center'}}>
        <p>You are purchasing Strawberry</p>
        <p><strong>Price: #{mapStrawberry[4]}</strong></p>
        <p><strong>Continue </strong>with purchase or click<strong> Cancel</strong> to exit</p>
        <img style={{width:'55%', height: '40%'}} src={strawberry} alt='' />
        <button style={{margin: '5%'}} onClick={props.strawBerryForm}>Continue</button>
        <button onClick={props.strawberryCancelHandler}>Cancel</button>
    </header>
)};

const mapStateToProps = state => {
    return {
        strawBerryOrder: state.orderStrawberry
    }
}

const mapDispatchToProps = dispatch => {
    return {
        strawBerryForm: () => dispatch({type: actionType.ORDER_STRAWBERRY})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(strawBerrySum));