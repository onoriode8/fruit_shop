import React, { Component } from 'react';
import axiosInstance from '../../components/AxiosInstance/AxiosInstance';
import inputFormCss from './InputForm.module.css';
import Spinner from '../../components/AxiosInstance/Spinner/Spinner';
import { connect } from 'react-redux';

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            name: '',
            email: '',
            submitted: false,
            error: null,
            spinner: false
        }
    }

    nameChangeHandler = (event) => { this.setState({ name: event.target.value }) };
    emailChangeHandler = (event) => { this.setState({ email: event.target.value }) };

    submitFormHandler = (event) => {
        event.preventDefault();
        this.setState({ spinner: true });
        const { name, email } = this.state;
        const form = {
            userName: name,
            userEmail: email,
            bananaItems: this.props.BananaItems
        }
        axiosInstance.post("/order/Banana.json", form)
        .then(response => {
            this.setState({ spinner: false });
            this.setState({ submitted: true });
            setTimeout(() => {
                this.props.history.push("/order");
            }, 4000);
        })
        .catch(err => {
            this.setState({ error: err.message });
        });
    }

    cancelInput = () => {
        this.props.history.push('/order');
    };

    render () {
        const style={
            textAlign: 'center',
            marginTop: '80px',
            left: '35%',
            right: '35%',
            position: 'fixed',
            backgroundColor: 'brown',
            opacity: '0.9',
            border:'1px solid white',
            boxSizing: 'border-box'
        }
        const style2={
            textAlign: 'center',
            marginTop: '80px',
            position: 'absolute',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            opacity: '0.9',
            border:'1px solid white',
            boxSizing: 'border-box',
            width: "100%",
            height: "100%",
            top: "0",
            zIndex: "90"
        }
        const { submitted, error, name, email, spinner } = this.state;
        let button = <button style={{backgroundColor: 'black', cursor: 'none'}} disabled>ORDER</button>
        if(name.length > 3) {
            if(email.length > 3) {
            button =  <button className={inputFormCss.order} onClick={this.submitFormHandler}>ORDER</button>
            }
        }

        let Spinners = null;
        if(spinner) {
            Spinners = <Spinner />
        }
        return (
            <React.Fragment>
                {Spinners}
                 { submitted ? <div style={style}>Ordered Successful</div> : null }
                 { error ? <div style={style2}>{this.state.error}</div> : null }
                <form className={inputFormCss.inputForm} >
                    <input  className={inputFormCss.name} type='text' required
                        placeholder='Your Name' onChange={this.nameChangeHandler}/>
                    <input className={inputFormCss.email} type='email' placeholder='Your Email' required
                        onChange={this.emailChangeHandler}/>
                        {button}
                    <button className={inputFormCss.cancel} onClick={this.cancelInput}>Cancel</button>
                </form>
            </React.Fragment>
        );
    }
};

const mapStateToProps = state => {
    return {
        BananaItems: state.bananaItems
    }
}


export default connect(mapStateToProps)(InputForm);