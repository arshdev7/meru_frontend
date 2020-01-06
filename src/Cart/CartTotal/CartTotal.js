import React from 'react';
import {Link} from "react-router-dom";

function CartTotal({value}) {
    const {cartSubTotal, cartTax, cartTotal, clearCart, removeSelectedProducts} = value;
    return (
        <React.Fragment>
            <div className={"container"}>
                <div className={"row"}>

                    <div className={"col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right"}>

                        <Link to={"/cart"}>
                            <button className={"btn btn-outline-warning text-uppercase mx-2 mb-3 px-5"}
                                    type={"button"}
                                    onClick={() => removeSelectedProducts()}
                            >
                                remove selected
                            </button>
                        </Link>

                        <Link to={"/cart"}>
                            <button className={"btn btn-outline-danger text-uppercase mb-3 px-5"}
                                    type={"button"}
                                    onClick={() => clearCart()}
                            >
                                clear cart
                            </button>
                        </Link>

                        <h5>
                            <span className={"text-title"}>subtotal : </span><strong>rs.{cartSubTotal}</strong>
                        </h5>
                        <h5>
                            <span className={"text-title"}>tax : </span><strong>rs.{cartTax}</strong>
                        </h5>
                        <h5>
                            <span className={"text-title"}>total : </span><strong>rs.{cartTotal}</strong>
                        </h5>

                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CartTotal;