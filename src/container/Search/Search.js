import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import './Search.css';

class Search extends Component {
    render(){
       return(
           <div className='search'>
                <div className='mobile'>
                   <BsSearch style={{color:'brown', marginTop:'3px'}} 
                        onClick={this.props.showHandler} />
                </div>
                {this.props.show && <input 
                onChange={this.props.searchChangeHandler}
               type='text' placeholder='Search...'/>}
           </div>
       );
    }
}

export default Search;