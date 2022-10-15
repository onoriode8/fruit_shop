import './BananaModal.css';
import Fragment from '../../../Fragment/Fragment';
import BananaBackdrop from './BananaBackdrop/BananaBackdrop';

const bananaModal = (props) => (
    <Fragment>
      <BananaBackdrop bananaCancelHandler={props.bananaCancelHandler}
       banana={props.showBanana}/> 
        <div className='BananaModal' 
        style={{
            transform:props.showBanana ? 'translateY(0)'
            : 'translateY(-150vh)'
        }}>
                {props.children}
            </div>
    </Fragment>
);

export default bananaModal;