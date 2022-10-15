import classes from './OrangeModal.module.css';
import Fragment from '../../../../components/Fragment/Fragment';
import OrangeBackdrop from './OrangeBackdrop';

const orangeModal = (props) => (
    <Fragment>
        <OrangeBackdrop orangeCancelHandler={props.orangeCancelHandler} showOrange={props.showOrange}/>
        <div className={classes.orangeModal} 
        style={{
            transform: props.showOrange ? 'translateY(0)' 
            : 'translateY(-150vh)'
        }}>
            {props.children}
    </div>
    </Fragment>
);

export default orangeModal;