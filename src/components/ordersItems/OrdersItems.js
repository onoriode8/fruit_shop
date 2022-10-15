import React, { useState } from 'react';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import { FcCancel } from 'react-icons/fc';
import BananaUpdate from '../../container/UpdateComponents/BananaUpdate/bananaUpdate';
// import AppleUpdate from '../../container/UpdateComponents/appleUpdate/appleUpdate';
import axiosInstance from '../AxiosInstance/AxiosInstance';
// import AppleOrder from '../../container/Orders/appleOrders';
import { withRouter } from 'react-router-dom';

const OrderItems = props => {
  const [edit, setEdit] = useState(false);
  // const [editApple, setEditApple] = useState(false);
  const [showDelete, setShowDelete] = useState(false);


  const deleteHandler = (e) => {
    e.preventDefault();
    axiosInstance.delete(`/order/Banana/${props.id}.json`)
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
        {/* <AppleOrder /> */}
        {edit ? <div style={{background: "rgba(0, 0, 0, 0.5)",
         width: "100%", height: "100vh", position: "fixed", top: "0"}}></div> : null }
        {edit && <div><BananaUpdate id={props.id}/></div>}
        <header style={{display: "inline-block", margin: "5px 0px",  marginTop: "5em"}}>
            <div style={{textAlign: "center", margin: "0px 10px", boxShadow: "1px 2px 3px 4px #1134", padding: "30px 15px"}}>
                {showDelete && <div style={{color: "green", fontFamily: "Roman"}}>DELETED</div>}
                <img style={{width: "95px"}} src={props.productImage} alt="" />
                <p>{props.productName}</p>
                <p><strong>#{props.price}</strong></p>
                <div style={{display: "flex", justifyContent: "space-evenly"}}>
                    <button style={{fontFamily: "Roman", 
                      fontSize: "10px", margin: "0px 4px"}} onClick={() => setEdit(true)}>
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