import classes from './WaterMelonBackdrop.module.css';

const WaterMelonBackdrop = (props) => (
    <div>
        {props.showWatermelon ? <div onClick={props.watermelonCancelHandler} 
        className={classes.watermelonBackdrop}></div> : null}
    </div>
);

export default WaterMelonBackdrop;