import styled from "styled-components";

export default function Input(props){
    const {type, name, placeholder} = props
    
    return(
        <InputComponent type={type} name={name} placeholder={placeholder}/>
    )
}

const InputComponent = styled.input`
    width: 268px;
    height: 38px;
    margin-top: 15px;
    background-color: transparent;
    padding: 0px 15px;
    box-sizing: border-box;
    border: var(--border-components);
`