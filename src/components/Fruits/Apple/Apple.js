import Apple from '../../../assets/Apple.jpg';
import './Apple.css';

const apple = (props)=> (
    <div className='Apple'>
        <img  className='apple'
        src={Apple} alt='' />
        <p>Price: <strong>#{props.apple}</strong></p>
        <button onClick={props.AppleShowHandler}>Buy</button>
    </div>
);

export default apple;