import styled from "styled-components";

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.2rem;
    background: transparent;
    border: 0.05rem solid var(--mainWhite);
    border-radius: 0.5rem;
    border-color: var(--mainYellow);
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.1s ease-in-out;
    &:hover{
        background: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
        border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
        color: var(--mainDark);
    }
    &:focus{
        outline:none;
    }
    
    border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
`