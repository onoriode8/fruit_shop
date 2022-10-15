import React, { Component } from 'react';
import Spinner from '../../components/AxiosInstance/Spinner/Spinner';
import StrawberryOrdersItems from '../../components/ordersItems/strawberryOrdersItems';

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
        fetch("https://testing-a784f-default-rtdb.firebaseio.com/order/strawberry.json")
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

        let strawberrycheck = <div style={{marginTop: "7em", textAlign: "center", color: "brown"}}>Your Strawberry Orders will display here!</div>
        if(fetchOrder.length !== 0) {
            strawberrycheck = fetchOrder.map(items => 
                <StrawberryOrdersItems key={items.id} strawberryId={items.id}
                  strawberryPrice={items.strawberryItems.strawberry} 
                  strawberryproductName={items.strawberryItems.product}
                  strawberryImage={items.strawberryItems.image} />)
        };
        
        return (
            <header style={{ textAlign: "center" }}>
                {spinner && <Spinner />}
                {error ? <p style={{fontFamily: "Roman", color: "brown"}}>Your behind a bad connection.</p> : null}
                {strawberrycheck}
            </header>
        );
    };
};

export default Orders;