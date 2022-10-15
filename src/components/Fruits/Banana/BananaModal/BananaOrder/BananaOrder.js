import React from 'react';
import { connect } from 'react-redux';
import '../../Banana.css';

const bananaOrder =(props)=>(
    <header className='bananaOrder'>
        <div style={{marginRight:'10px', fontFamily: "Roman",
        marginBottom: "10px"}}><strong>You are buying Banana</strong></div>
        <div 
        style={{
            listStyle:'none',
            marginRight:'10px', 
            fontFamily: "Roman", 
            marginBottom: "10px"
            }}>
        <strong>Price: #{props.bananaOrder}</strong></div>
        <div 
        style={{
            listStyle:'none', 
            marginRight:'10px', 
            fontFamily: "Roman", 
            marginBottom: "10px"
            }}>
        <strong>Continue 
            with order or click Cancel to exit</strong></div>
    </header>
);

const mapStateToProps = state => {
    return {
        bananaOrder: state.bananaItems.banana
    }
}

export default connect(mapStateToProps)(bananaOrder);