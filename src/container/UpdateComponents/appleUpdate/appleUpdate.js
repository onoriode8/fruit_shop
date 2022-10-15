import React from 'react';
import { withRouter } from 'react-router-dom';
import axiosInstance from '../../../components/AxiosInstance/AxiosInstance';
import classes from './appleUpdate.module.css';
import UpdateSpinner from '../updateSpinner/updateSpinner';


class UpdateBanana extends React.Component {
    state = {
        imageUrl: "",
        name: "",
        price: "",
        spinner: false,
        success: false,
        error: false
    };
    inputField = React.createRef();

    componentDidMount() {
        this.inputField.current.focus();
    };

    cancelUpdateHandler = () => this.props.history.push("/");

    updateOrderHandler = () => {
        this.setState({spinner: true});
        const { price, imageUrl, name } = this.state;
        const update = {
            apple: price,
            image: imageUrl,
            product: name
        }
        axiosInstance.put(`/order/apple/${this.props.appleId}/appleItems.json`, update)
            .then(response => {
                this.setState({spinner: false, success: true});
                setTimeout(() => {
                    this.props.history.push("/");
                }, 3000);
            })
            .catch(err => {
                this.setState({spinner: false, error: true})
            })
        
    }

    render () {
        const { success, error, name, imageUrl, price } = this.state;

        let button = <button style={{background: "grey"}} disabled>UPDATE</button>

        if(imageUrl.trim().length >= 6 && name.trim().length >= 3 && price > 0) {
            button =  <button style={{margin: "0px 15px"}} onClick={this.updateOrderHandler}>
            <div style={{display: "flex"}}>
                {this.state.spinner ? <div style={{margin: "0px 5px"}}><UpdateSpinner /></div> : null}
                <div>UPDATE</div>
            </div>
        </button>
        }

        return (
            <div style={{textAlign: "center"}}>
            <main className={classes.main}>
            <header>
                {success && <div style={{textAlign: "center", fontFamily: "Roman"}}>Update was successfull</div>}
                {error && <div style={{textAlign: "center", fontFamily: "Roman"}}>Failed to update</div>}
                <div>Update</div>
                <input ref={this.inputField} className={classes.inputField} type='text' placeholder="imageUrl" 
                    onChange={(e) => this.setState({imageUrl: e.target.value})} /><br />
                <input className={classes.inputField} type='text' placeholder="fruit name" 
                    onChange={(e) => this.setState({name: e.target.value})} /><br />
                <input className={classes.inputField} type='Number' placeholder="price" 
                    onChange={(event) => this.setState({price: event.target.value})} /><br />
                <div style={{display: "flex", justifyContent: "space-evenly"}}>
                    <button onClick={this.cancelUpdateHandler}
                        style={{margin: "0px 15px"}}>CANCEL</button>
                   {button}
                </div>
          </header>
          </main>
          </div>
        );
    };
};


export default withRouter(UpdateBanana);