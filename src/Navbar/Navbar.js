import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from "../meru_logo32.png"
import {ButtonContainer} from "./ButtonContainer";
import styled from "styled-components";

class Navbar extends Component {
    render() {
        return(
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to={"/"}>
                    <img src={logo} alt={"store"} className={"navbar-brand"} />
                    <span className={"navbar-company-name text-capitalize text-white"}>meru.com</span>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to={"/"} className={"nav-link"}>
                            store
                        </Link>
                    </li>
                </ul>
                <Link to={"/cart"} className={"ml-auto"}>
                    <ButtonContainer cart>
                        <span className={"mr-2"}>
                            <i className={"fas fa-cart-plus"}/>
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
    background: var(--mainDark);
    .nav-link{
        color: var(--mainWhite); 
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`

export default Navbar;