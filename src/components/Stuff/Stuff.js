import Apple from '../Fruits/Apple/Apple';
import Banana from '../Fruits/Banana/Banana';
import Orange from '../Fruits/Orange/Orange';
import Watermelon from '../Fruits/Watermelon/Watermelon';
import Strawberry from '../Fruits/Strawberry/Strawberry';
import Fragment from '../../components/Fragment/Fragment';
import classes from './Stuff.module.css';

const stuff = (props) => {
    const mapFruits = Object.values(props.fruits).map(item=>{
      return item;
    });

    return(
      <Fragment>
         <header className={classes.stuff}>
          <Banana 
              bananaShowHandler={props.bananaShowHandler}
              banana={mapFruits[0]}/>
          <Apple 
              AppleShowHandler={props.AppleShowHandler}
              apple={mapFruits[1]}/>
          <Orange 
              orangeShowHandler={props.orangeShowHandler} 
              orange={mapFruits[2]}/>
          <Watermelon 
              watermelonShowHandler={props.watermelonShowHandler}
              watermelon={mapFruits[3]}/>
          <Strawberry 
              strawberryShowHandler={props.strawberryShowHandler}
              strawberry={mapFruits[4]}/>
        </header>
    </Fragment>
    );
}

export default stuff;