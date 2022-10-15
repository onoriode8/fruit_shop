import React, {Component} from 'react';
import Fragment from '../../components/Fragment/Fragment';
import Stuff from '../../components/Stuff/Stuff';
import Search from '../Search/Search';
import BananaModal from '../../components/Fruits/Banana/BananaModal/BananaModal';
import BananaSummary from '../../components/Fruits/Banana/BananaModal/BananaSummary';
import OrangeModal from '../../components/Fruits/Orange/OrangeModal/OrangeModal';
import StrawberryModal from '../../components/Fruits/Strawberry/StrawberryModal/StrawberryModal';
import WatermelonModal from '../../components/Fruits/Watermelon/WatermelonModal/WatermelonModal';
import WatermelonSum from '../../components/Fruits/Watermelon/WatermelonModal/WatermelonSum/WatermelonSum';
import AppleModal from '../../components/Fruits/Apple/AppleModal/AppleModal';
import AppleSummary from '../../components/Fruits/Apple/AppleModal/AppleSummary/AppleSummary';
import OrangeSummary from '../../components/Fruits/Orange/OrangeModal/OrangeSummary';
import StrawBerrySum from '../../components/Fruits/Strawberry/StrawberryModal/StrawBerrySum';
import axiosInstance from '../../components/AxiosInstance/AxiosInstance';
import ErrorMessage from '../../components/AxiosInstance/ErrorMessages/ErrorMessage';
import Spinner from '../../components/AxiosInstance/Spinner/Spinner';
import Greetings from '../Search/Greetings';

class App extends Component{
    constructor(props){
        super(props)
        this.state={
            fruits: null,
            banana: false,
            orange: false,
            strawberry: false,
            watermelon: false,
            apple: false,
            search: '',
            showSearch: false,
            gettingFruits: null
        }
    }

    componentDidMount() {
        axiosInstance.get("/fruits.json")
        .then(response => this.setState({ fruits: response.data }))
        .catch((err) => this.setState({gettingFruits: err.message}))
    }

    searchChangeHandler = (e) => {
        this.setState({search: e.target.value});
        // console.log(e.target.value);
    }

    showSearchHandler = () => {
        this.setState((prevState) => {
            return {
                showSearch: !prevState.showSearch
            }
        })
    }

    //  state handler for show and cancel of banana //
    bananaShowHandler = () => {
        this.setState({banana:true});
    }
    bananaCancelHandler = () => {
        this.setState({banana:false});
    }

    //  state handler for show and hide of orange //
    orangeShowHandler = () => {
        this.setState({orange:true});
    }
    orangeCancelHandler = () => {
        this.setState({orange:false});
    }

    // state for handling show and hide strawberry  //
    strawberryShowHandler = () => {
        this.setState({strawberry: true});
    }
    strawberryCancelHandler = () => {
        this.setState({strawberry: false});
    }

    // state handles in watermelon  //
    watermelonShowHandler = () => {
        this.setState({watermelon:true});
    } 
    watermelonCancelHandler = () => {
        this.setState({watermelon: false});
    }

    // state handler for Apple  //
    AppleShowHandler = () => {
        this.setState({apple: true});
    }
    AppleCancelHandler = () => {
        this.setState({apple:false});
    }

    render(){
        // const filterFruits = Object.keys(this.state.fruits).filter(items => {
        //     return items.includes(this.state.search);
        // });

        // console.log(filterFruits)

        let fetchingFruits = <Spinner />
        if(this.state.fruits) {
            fetchingFruits = (
                <div>
                     <AppleModal AppleCancelHandler={this.AppleCancelHandler} showApple={this.state.apple}>
                       <AppleSummary apple={this.state.fruits}
                          AppleCancelHandler={this.AppleCancelHandler}/>
                         </AppleModal>
                    <WatermelonModal 
                        showWatermelon={this.state.watermelon} watermelonCancelHandler={this.watermelonCancelHandler}>
                      <WatermelonSum watermelon={this.state.fruits} watermelonCancelHandler={this.watermelonCancelHandler}/>
                    </WatermelonModal>
                   <StrawberryModal 
                     strawberryCancelHandler={this.strawberryCancelHandler}
                      showStrawberry={this.state.strawberry}> 
                    <StrawBerrySum strawberry={this.state.fruits}
                     strawberryCancelHandler={this.strawberryCancelHandler}/>
                </StrawberryModal>
                <OrangeModal 
                    showOrange={this.state.orange} orangeCancelHandler={this.orangeCancelHandler}>
                 <OrangeSummary orangeCancelHandler={this.orangeCancelHandler}
                 orangePrice={this.state.fruits}/>
                </OrangeModal>
                <BananaModal bananaCancelHandler={this.bananaCancelHandler} showBanana={this.state.banana}>
                <BananaSummary bananaOrder={this.state.fruits}
                 bananaCancelHandler={this.bananaCancelHandler}/>
               </BananaModal>
         
             <Stuff fruits={this.state.fruits}
                AppleShowHandler={this.AppleShowHandler}
                watermelonShowHandler={this.watermelonShowHandler}
                strawberryShowHandler={this.strawberryShowHandler}
                orangeShowHandler={this.orangeShowHandler}
                bananaShowHandler={this.bananaShowHandler}
                />
         </div>
            )
        }

        return(
         <Fragment style={{height: "100vh", scroll: 'overflow-y'}} >
             <Search searchChangeHandler={this.searchChangeHandler}
               show={this.state.showSearch} 
               showHandler={this.showSearchHandler} />
             <Greetings />
             <ErrorMessage gettingFruits={this.state.gettingFruits}/>
             {fetchingFruits}
         </Fragment>
        );
        
    }
}

export default App;