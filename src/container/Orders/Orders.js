import React, { Component } from 'react';
import Spinner from '../../components/AxiosInstance/Spinner/Spinner';
import OrdersItems from '../../components/ordersItems/OrdersItems';


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
        fetch("https://testing-a784f-default-rtdb.firebaseio.com/order/Banana.json")
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
            })
            .catch(err => this.setState({error: true, spinner: true }));
    };

    render () {
        const { spinner, fetchOrder, error } = this.state;

        let Bananacheck = <div style={{marginTop: "7em", textAlign: "center", color: "brown"}}>Your Banana Orders will display here!</div>
        if(fetchOrder.length !== 0) {
            Bananacheck = fetchOrder.map(items => 
                <OrdersItems key={items.id} id={items.id}
                  price={items.bananaItems.banana} productName={items.bananaItems.product}
                  productImage={items.bananaItems.image} />)
        }
        
        return (
            <header style={{ textAlign: "center" }}>
                {spinner && <Spinner />}
                {error ? <p style={{fontFamily: "Roman", color: "brown"}}>Your behind a bad connection.</p> : null}
                {Bananacheck}
            </header>
        );
    };
};

export default Orders;