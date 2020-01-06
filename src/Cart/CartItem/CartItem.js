import React from 'react';

function CartItem({item, value}) {
    const {id, title, img, price, total, count} = item;
    const {increment, decrement, removeItem, selectProduct} = value;
    return (
        <div className={"row my-2 text-capitalize text-center"}>

            <div className={"col-10 mx-auto col-lg-1"}>
                <div className="checkbox pt-lg-4">
                    <input type="checkbox" className="custom-checkbox" onClick={()=>selectProduct(id)}/>
                </div>
            </div>

            <div className={"col-10 mx-auto col-lg-1"}>
                <img src={img} style={{width: "5rem", height: "5rem"}} className={"img-fluid"} alt={"product"}/>
            </div>

            <div className={"col-10 mx-auto col-lg-2"}>
                <span className={"d-lg-none"}>product : </span> {title}
            </div>

            <div className={"col-10 mx-auto col-lg-1"}>
                <span className={"d-lg-none"}>price : rs.</span> {price}
            </div>

            <div className={"col-10 mx-auto col-lg-2 my-1 my-lg-0"}>
                <div className={"justify-content-center"}>
                    <div>
                        <span className={"btn btn-black mx-1"} onClick={()=>decrement(id)}>-</span>
                        <span className={"btn btn-black mx-1"}>{count}</span>
                        <span className={"btn btn-black mx-1"} onClick={()=>increment(id)}>+</span>
                    </div>
                </div>
            </div>

            <div className={"col-10 mx-auto col-lg-1"}>
                <div className={"cart-icon"} onClick={()=> removeItem(id)}>
                    <i className={"fas fa-trash"}></i>
                </div>
            </div>

            <div className={"col-10 mx-auto col-lg-1"}>
                <strong>rs.{total}</strong>
            </div>

        </div>

    );
}

export default CartItem;