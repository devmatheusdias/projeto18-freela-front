import styled from "styled-components"

export default function Button() {
    return (
        <ButtonComponent/>
    )
}


const ButtonComponent = styled.button`
    width: 268px;
    height: 32px;
    border: none;
    background-color: rgb(0,149,246);
    color: white;
    margin-top: 15px;
`