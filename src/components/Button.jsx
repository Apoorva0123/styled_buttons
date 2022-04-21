import styled from "styled-components"

const Button = styled.button`
    background-color: transparent;
    border: ${(props) => 
    props.border_style === "Dashed" 
    ? "dashed 1px" 
    : props.border_style === "Default"
    ? "solid 1px"
    : "none"};
    border-radius: 2px;
    padding: 10px;
    padding-top: 8px;
    text-align: center;
    background: ${(props) => props.border_style === "Primary" ? "#2490fe" : "white"};
    color: ${(props) => 
    props.border_style === "Primary" 
    ? "white" 
    : props.border_style === "Link"
    ? "#2490fe"
    : "black"};
    cursor: pointer;
    margin: 5px;
`;

export { Button }