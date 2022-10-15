import Orange from '../../../assets/Orange.jpg';
import './Orange.css';

const orange = (props)=>(
    <div className='Orange'>
       <img  className=''
       src={Orange} alt='' />
       <p>price: <strong>#{props.orange}</strong></p>
       <button onClick={props.orangeShowHandler}>Buy</button>
    </div>
   );
   
   export default orange;