import React from 'react';
import CartItem from "../CartItem/CartItem";

function CartList({value}) {
    return (
        <div className={"container-fluid"}>
            {value.cart.map(item=>{
                return <CartItem key={item.id} item={item} value={value} />
            })}
        </div>
    );
}

export default CartList;