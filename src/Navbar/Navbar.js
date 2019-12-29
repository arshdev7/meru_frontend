import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from "../meru_logo32.png"

class Navbar extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark px-sm-5">
                <Link to={"/"}>
                    <img src={logo} alt={"store"} className={"navbar-brand"} />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to={"/"} className={"nav-link"}>
                            All Products
                        </Link>
                    </li>
                </ul>
                <Link to={"/cart"} className={"ml-auto"}>
                    <button>
                        <i className={"fas fa-cart-plus"}/>
                        My Cart
                    </button>
                </Link>
            </nav>
        );
    }
}

export default Navbar;