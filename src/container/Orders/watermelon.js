import React, { Component } from 'react';
import Spinner from '../../components/AxiosInstance/Spinner/Spinner';
import WatermelonOrdersItems from '../../components/ordersItems/watermelonItems';

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
        fetch("https://testing-a784f-default-rtdb.firebaseio.com/order/watermelon.json")
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

        let watermeloncheck = <div style={{marginTop: "7em", textAlign: "center", color: "brown"}}>Your Watermelon Orders will display here!</div>
        if(fetchOrder.length !== 0) {
            watermeloncheck = fetchOrder.map(items => 
                <WatermelonOrdersItems key={items.id} watermelonId={items.id}
                  watermelonPrice={items.watermelonItems.watermelon} 
                  watermelonproductName={items.watermelonItems.product}
                  watermelonImage={items.watermelonItems.image} />)
        };
        
        return (
            <header style={{ textAlign: "center" }}>
                {spinner && <Spinner />}
                {error ? <p style={{fontFamily: "Roman", color: "brown"}}>Your behind a bad connection.</p> : null}
                {watermeloncheck}
            </header>
        );
    };
};

export default Orders;