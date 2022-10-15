import * as actionType from './action';
import bananaImage from '../assets/Bananas-scaled.jpg';
import appleImage from '../assets/Apple.jpg';
import orangeImage from '../assets/Orange.jpg';
import strawberryImage from '../assets/Strawberry.jpg';
import watermelonImage from '../assets/watermelon.jpg';


const initialState = {
    sideDrawer: false,
    orderBanana: false,
    orderApple: false,
    orderOrange: false,
    orderWatermelon: false,
    orderStrawberry: false,
    bananaItems: {
        image: bananaImage,
        product: "Banana",
        banana: 180
    },
    appleItems: {
        image: appleImage,
        product: "Apple",
        apple: 300
    },
    orangeItems: {
        image: orangeImage,
        product: "Orange",
        orange: 150
    },
    watermelonItems: {
        image: watermelonImage,
        product: "Watermelon",
        watermelon: 250
    },
    strawberryItems: {
        image: strawberryImage,
        product: "Strawberry",
        strawberry: 100
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case(actionType.CONTINUE):
            return {
                ...state,
                sideDrawer: !state.sideDrawer
            }
        case(actionType.CANCEL):
            return {
                ...state,
                sideDrawer: !state.sideDrawer
            }
        case(actionType.ORDER_BANANA):
            return {
                ...state,
                orderBanana: !state.orderBanana
            }
        case(actionType.ORDER_APPLE):
            return {
                ...state,
                orderApple: !state.orderApple
            }
        case(actionType.ORDER_ORANGE):
            return {
                ...state,
                orderOrange: !state.orderOrange
            }
        case(actionType.ORDER_WATERMELON):
            return {
                ...state,
                orderWatermelon: !state.orderWatermelon
            }
        case(actionType.ORDER_STRAWBERRY):
            return {
                ...state,
                orderStrawberry: !state.orderStrawberry
            }
        default:
            return state;
    }
}

export default reducer;