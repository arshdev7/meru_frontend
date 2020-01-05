import React from 'react';

function EmptyCart(props) {
    return (
        <div className={"container mt-5"}>
            <div className={"row"}>
                <div className={"col-10 mx-auto text-center text-title"}>
                    <h2>your cart is empty</h2>
                </div>
            </div>
        </div>
    );
}

export default EmptyCart;