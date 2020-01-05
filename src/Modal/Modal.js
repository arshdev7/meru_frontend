import React, {Component} from 'react';
import {ProductConsumer} from "../Product/Context";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {ButtonContainer} from "../Navbar/ButtonContainer";

class Modal extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const {modalOpen, closeModal} = value;
                    const {img, title, price} = value.modalProduct;

                    if (modalOpen) {
                        return (
                            <ModalContainer>
                                <div className={"container"}>
                                    <div className={"row"}>
                                        <div id={"modal"} className={"col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize"}>

                                            <h5>item added to cart</h5>
                                            <img src={img} className={"img-fluid"} alt={"img not found"}/>
                                            <h5>{title}</h5>
                                            <h5 className={"text-muted"}>price: Rs.{price}</h5>

                                            <Link to={"/"}>
                                                <ButtonContainer onClick={()=>closeModal()}>
                                                    continue shopping
                                                </ButtonContainer>
                                            </Link>

                                            <Link to={"/cart"}>
                                                <ButtonContainer cart onClick={()=>closeModal()}>
                                                    go to cart
                                                </ButtonContainer>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        );
                    } else {
                        return null;
                    }
                }}
            </ProductConsumer>
        );
    }
}

const ModalContainer = styled.div`
position: fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display: flex;
align-items: center;
justify-content: center;
#modal{
    background:var(--mainWhite);
}
`;

export default Modal;