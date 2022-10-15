import React, { Component } from 'react';
import App from '../App/App';
import { Route, Switch, Redirect } from 'react-router-dom';
import InputForm from '../InputForm/BananaInputform';
import Navigation from '../../components/Navigation/Navigation';
import { connect } from 'react-redux';
import Developer from '../../components/Developer/Developer';
import BananaOrders from '../Orders/Orders';
import AppleOrders from '../Orders/appleOrders';
import OrangeOrders from '../Orders/orangeOrder';
import WatermelonOrders from '../Orders/watermelon';
import AppleInput from '../InputForm/appleInput';
import OrangeInput from '../InputForm/orangeInputform';
import Watermelon from '../InputForm/watermelon';
import strawberry from '../InputForm/strawberryInputform';
import StrawberryOrders from '../../container/Orders/strawberryOrder';


class Home extends Component {
    render() {
        return (
            <React.Fragment>
                    <Navigation />
                <Switch>
                     <Route path="/" exact component={App} />
                     <Route path="/inputForm" exact component={InputForm} />
                     <Route path="/inputForm/apple" exact component={AppleInput} />
                     <Route path="/inputForm/orange" exact component={OrangeInput} />
                     <Route path="/inputForm/watermelon" exact component={Watermelon} />
                     <Route path="/inputForm/strawberry" exact component={strawberry} />
                     <Route path="/developer" exact component={Developer} />
                     <Route path="/order" exact component={BananaOrders} />
                     <Route path="/apple_order" exact component={AppleOrders} />
                     <Route path="/orange_order" exact component={OrangeOrders} />
                     <Route path="/watermelon_orders" exact component={WatermelonOrders} />
                     <Route path="/strawberry_orders" exact component={StrawberryOrders} />
                     <Route render={() => <h1 style={{marginTop: '100px'}}>Page not found</h1>} />
                     <Redirect to="/" />
                </Switch>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        order: state.order
    }
}

export default connect(mapStateToProps)(Home);