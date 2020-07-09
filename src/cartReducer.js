const CartReducer = (state,action)=>{
    switch(action.type){
        case 'ADD_CART':
            return state + 1
        default:
            return state

    }
}
export default CartReducer