import Fragment from '../../../Fragment/Fragment';
import classes  from './strawberryModal.module.css';
import StrawberryBackdrop from './StrawberryBackdrop/StrawberryBackdrop';

const strawberryModal = (props) => (
    <Fragment>
        <StrawberryBackdrop strawberryCancelHandler={props.strawberryCancelHandler}
           showStrawberry={props.showStrawberry}/>
        <header className={classes.strawberryModal}
        style={{
            transform: props.showStrawberry ? 'translateY(0)' : 'translateY(-150vh)'
        }}>
            {props.children}
        </header>
    </Fragment>
);

export default strawberryModal;