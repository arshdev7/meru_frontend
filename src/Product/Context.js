import React, {Component} from 'react';
import {detailedProduct, storeProducts} from "../data";

// Context Api

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailedProduct: detailedProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailedProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        selectedCartProducts: [],
    };

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
            return {products: tempProducts}
        })
    };

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    };

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {detailedProduct: product}
        })
    };
    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return {products: tempProducts, cart: [...this.state.cart, product]};
        }, () => {
            this.addTotal();
        });
    };

    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return {modalProduct: product, modalOpen: true}
        })
    };

    closeModal = () => {
        this.setState(() => {
            return {modalOpen: false}
        })
    };

    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(() => {
            return {
                cart: [...tempCart]
            }
        }, () => {
            this.addTotal();
        });
    };
    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count - 1;

        if (product.count === 0) {
            this.removeItem(id);
        } else {
            product.total = product.count * product.price;
            this.setState(() => {
                return {
                    cart: [...tempCart]
                }
            }, () => {
                this.addTotal();
            });
        }

    };
    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts],
            }
        }, () => {
            this.addTotal();
        });
    };
    clearCart = (id) => {
        this.setState(() => {
            return {cart: []};
        }, () => {
            this.setProducts();
            this.addTotal();
        });
    };
    addTotal = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            };
        });
    };

    selectProduct = (id) => {
        let tempSelected = [...this.state.cart];
        const selectedProduct = tempSelected.find(item => item.id === id);
        const index = tempSelected.indexOf(selectedProduct);
        const product = tempSelected[index];

        this.setState((state) => {
            const list = state.selectedCartProducts.concat(product);
            return {
                selectedCartProducts: [...list],
            };
        });
    };

    removeSelectedProducts = (id) => {
        let tempSelected = [...this.state.selectedCartProducts];
        let tempCart = [...this.state.cart];
        let tempProducts = [...this.state.products];

        tempCart = tempCart.filter((cartProduct) => {
            return !tempSelected.includes(cartProduct);
        });

        tempSelected.map((each) => {
            each.inCart = false;
            each.count = 0;
            each.total = 0;
        });

        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts],
                selectedCartProducts: [],
            }
        }, () => {
            this.addTotal();
        });
    };

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
                selectProduct: this.selectProduct,
                removeSelectedProducts: this.removeSelectedProducts,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};