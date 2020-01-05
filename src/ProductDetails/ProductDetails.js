import React, {Component} from 'react';
import {ProductConsumer} from "../Product/Context";
import {Link} from "react-router-dom";
import {ButtonContainer} from "../Navbar/ButtonContainer";

class ProductDetails extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {id, title, company, img, info, price, inCart} = value.detailedProduct;
                    return (
                        <div className={"container py-5"}>

                            <div className={"row"}>
                                <div className={"col-10 mx-auto text-center text-slanted text-dark my-5"}>
                                    <h1>{title}</h1>
                                </div>
                            </div>

                            <div className={"row"}>
                                <div className={"col-10 mx-auto col-md-6 my-3 text-capitalize"}>
                                    <img src={img} className={"img-fluid"} alt={"image not found"}/>
                                </div>

                                <div className={"col-10 mx-auto col-md-6 my-3 text-capitalize"}>
                                    <h3>product name: {title}</h3>
                                    <h4 className={"text-tile text-capitalize text-muted mt-3 mb-2"}>
                                        brand: <span className={"text-uppercase"}> {company} </span>
                                    </h4>
                                    <h4 className={"text-blue"}>
                                        <strong>price: <span>Rs.</span>{price}</strong>
                                    </h4>
                                    <p className={"text-capitalize font-weight-bold mt-3 mb-0"}>
                                        details:-<p className={"text-muted lead"}>{info}</p>
                                    </p>

                                    {/*buttons*/}
                                    <div>
                                        <Link to={"/"}>
                                            <ButtonContainer>
                                                back to products
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer
                                            cart
                                            disabled={inCart ? true : false}
                                            onClick={() => {
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}
                                        >
                                            {inCart ? "inCart" : "add to cart"}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default ProductDetails;