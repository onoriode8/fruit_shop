import Bananas from '../../../assets/Bananas-scaled.jpg';
import './Banana.css';

const banana = (props)=>(
 <div className='Banana'>
    <img  className=''
    src={Bananas} alt='' />
    <p>price: <strong>#{props.banana}</strong></p>
    <button onClick={props.bananaShowHandler}>Buy</button>
    
 </div>
);

export default banana;