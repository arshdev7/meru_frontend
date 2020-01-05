import React, {Component} from 'react';
import Product from "../Product/Product";
import Title from "../Title/Title";
import {ProductConsumer} from "../Product/Context";

class ProductList extends Component {
    render() {

        return (
            <React.Fragment>
                <div className={"py-5"}>
                    <div className={"container"}>
                        {/*<Title name={"sports"} title={"products"}/>*/}
                        <div className={"row"}>
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product}/>
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductList;