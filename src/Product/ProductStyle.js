import styled from "styled-components";

export const ProductWrapper = styled.div`
.card{
    border-color:transparent;
    transition:all 0.1s linear;
}
.card-footer{
    background: transparent;
    border-top: transparent;
}
.img-container{
    position: relative;
    overflow: hidden;
}
.img-container:hover .card-img-top{
    transform: scale(1.3);
}
.card-img-top{
    transition: all 0.1s linear;    
}

.cart-btn:hover{
    color: var(--mainBlue);
    cursor: pointer;
}

.cart-btn:focus{
    outline:none;
}

.cart-btn{
    position: absolute;
    bottom:0;
    right:0;
    padding: 0.2rem 0.4rem;
    background: var(--mainYellow);
    border:none;
    color: var(--mainWhite);
    font-size:1.2rem;
    border-radius:0.5rem 0 0 0;
    transition: all 0.1s linear;
    transform: translate(100%,100%);
}
.img-container:hover .cart-btn{
    transform: translate(0,0);
}
&:hover{
    .card{
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background: rgba(247, 247, 247);
    }
}
`;