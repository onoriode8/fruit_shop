import React, { useState } from 'react';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import { FcCancel } from 'react-icons/fc';
import WatermelonUpdate from '../../container/UpdateComponents/watermelonUpdate/watermelonUpdate';
import axiosInstance from '../AxiosInstance/AxiosInstance';
import { withRouter } from 'react-router-dom';

const OrderItems = props => {
  const [editwatermelon, setEditwatermelon] = useState(false);
  const [showDelete, setShowDelete] = useState(false);


  const deleteHandler = (e) => {
    e.preventDefault();
    axiosInstance.delete(`/order/watermelon/${props.watermelonId}.json`)
      .then(res => {
        setShowDelete(true)
        setTimeout(() => {
          props.history.replace("/");
        }, 1500);
      })
      .catch(() => {})
  };


  return (
      <>
        {editwatermelon ? <div style={{background: "rgba(0, 0, 0, 0.5)",
         width: "100%", height: "100vh", position: "fixed", top: "0"}}></div> : null }
        {editwatermelon && <div><WatermelonUpdate watermelonId={props.watermelonId}/></div>}
        <header style={{display: "inline-block", margin: "5px 0px",  marginTop: "5em"}}>
            <div style={{textAlign: "center", margin: "0px 10px", boxShadow: "1px 2px 3px 4px #1134", padding: "30px 15px"}}>
                {showDelete && <div style={{color: "green", fontFamily: "Roman"}}>DELETED</div>}
                <img style={{width: "95px"}} src={props.watermelonImage} alt="" />
                <p>{props.watermelonproductName}</p>
                <p><strong>#{props.watermelonPrice}</strong></p>
                <div style={{display: "flex", justifyContent: "space-evenly"}}>
                    <button style={{fontFamily: "Roman", 
                      fontSize: "10px", margin: "0px 4px"}} onClick={() => setEditwatermelon(true)}>
                      <div style={{display: "flex"}}>
                        <div style={{margin: "0px 3px"}}><MdModeEdit /></div>
                        <div style={{margin: "0px 3px"}}>EDIT</div>
                      </div>
                    </button>
                    <button style={{fontFamily: "Roman",
                       fontSize: "10px", margin: "0px 4px"}}>
                      <div style={{display: "flex"}} onClick={deleteHandler}>
                        <div style={{margin: "0px 3px"}}><MdDelete /></div>
                        <div style={{margin: "0px 3px"}}>DELETE</div>
                      </div>
                    </button>
                    <button style={{fontFamily: "Roman",
                       fontSize: "10px", margin: "0px 4px"}}>
                      <div style={{display: "flex"}} onClick={() => props.history.replace("/")}>
                        <div style={{margin: "0px 3px"}}><FcCancel /></div>
                        <div style={{margin: "0px 3px"}}>CANCEL</div>
                      </div>
                    </button>
                </div>
            </div>
        </header>
      </>
    );
};



export default withRouter(OrderItems);