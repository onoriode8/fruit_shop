import classes from './WatermelonModal.module.css';
import Fragment from '../../../../components/Fragment/Fragment';
import WaterMelonBackdrop from '../WatermelonModal/WaterMelonBackdrop/WaterMelonBackdrop';

const watermelonModal = (props) => (
    <Fragment>
        <WaterMelonBackdrop watermelonCancelHandler={props.watermelonCancelHandler}
           showWatermelon={props.showWatermelon}/>
        <div className={classes.watermelonModal}
        style={{
            transform: props.showWatermelon ? 'translateY(0)' : 'translateY(-150vh)'
        }}>
            {props.children}
        </div>
    </Fragment>
);

export default watermelonModal;