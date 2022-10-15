import React, { Component } from 'react';
import Spinner from '../../components/AxiosInstance/Spinner/Spinner';
import AppleOrdersItems from '../../components/ordersItems/appleOrderItems';

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchOrder: [],
            spinner: false,
            error: false
        }
    };

    componentDidMount() {
        this.setState({spinner: true});
        fetch("https://testing-a784f-default-rtdb.firebaseio.com/order/apple.json")
            .then(res => res.json())
            .then(response => {
                this.setState({ spinner: false });
                let Orders = [];
                for(let order in response) {
                    Orders.push({
                        ...response[order],
                        id: order
                    })
                }
                this.setState({fetchOrder: Orders});
                // console.log(fetchOrder);
            })
            .catch(err => this.setState({error: true, spinner: true }));
    };

    render () {
        const { spinner, fetchOrder, error } = this.state;

        let applecheck = <div style={{marginTop: "7em", textAlign: "center", color: "brown"}}>Your Apple Orders will display here!</div>
        if(fetchOrder.length !== 0) {
            applecheck = fetchOrder.map(items => 
                <AppleOrdersItems key={items.id} appleId={items.id}
                  applePrice={items.appleItems.apple} 
                  appleproductName={items.appleItems.product}
                  appleImage={items.appleItems.image} />)
        };
        
        return (
            <header style={{ textAlign: "center" }}>
                {spinner && <Spinner />}
                {error ? <p style={{fontFamily: "Roman", color: "brown"}}>Your behind a bad connection.</p> : null}
                {applecheck}
            </header>
        );
    };
};

export default Orders;