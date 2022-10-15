import classes from './StrawberryBackdrop.module.css';

const StrawberryBackdrop = (props) => (
    <header>
       {props.showStrawberry ? <div onClick={props.strawberryCancelHandler} 
        className={classes.StrawberryBackdrop}></div> : null }
    </header>
);

export default StrawberryBackdrop;