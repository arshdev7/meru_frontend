import React, {Component} from 'react';
import Title from "../Title/Title";
import CartColumns from "./CartColumns/CartColumns";
import EmptyCart from "./EmptyCart/EmptyCart";
import {ProductConsumer} from "../Product/Context";
import CartList from "./CartList/CartList";
import CartTotal from "./CartTotal/CartTotal";

class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        if (value.cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <Title name={"your"} title={"cart"}/>
                                    <CartColumns/>
                                    <CartList value={value}/>
                                    <CartTotal value={value}/>
                                </React.Fragment>
                            );
                        }else{
                            return <EmptyCart/>;
                        }
                    }}
                </ProductConsumer>
            </section>
        );
    }
}

export default Cart;