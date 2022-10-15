import Watermelon from '../../../assets/watermelon.jpg';
import './Watermelon.css';

const watermelon = (props) => (
    <div className='Watermelon'>
        <img  className=''
        src={Watermelon} alt='' />
        <p>price: <strong>#{props.watermelon}</strong></p>
        <button onClick={props.watermelonShowHandler}>Buy</button>
    </div>
);

export default watermelon;