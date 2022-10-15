import Strawberry from '../../../assets/Strawberry.jpg';
import './Strawberry.css';

const strawberry = (props) => (
    <div className='Strawberry'>
        <img  className=''
        src={Strawberry} alt='' />
        <p>price: <strong>#{props.strawberry}</strong></p>
        <button onClick={props.strawberryShowHandler}>Buy</button>
  </div>
);

export default strawberry;