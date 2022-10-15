import devImage from '../../assets/my_image.jpg';
import classes from './Developer.module.css';

const developer = props => (
    <div className={classes.dev}>
        <img className={classes.developerImage} src={devImage} alt='' />
        <br />
        <label className={classes.label}>hi there am onoriode by name. A ReactJs Developer with 2 years of experience in Front-End</label>
        <hr />
        <label className={classes.label}>You can email me on <ul><li style={{listStyle: 'none'}}>onoriodeumukoro8@gmail.com</li></ul></label>
    </div>
);

export default developer;