import styled from "styled-components";

export default function TextArea(props){
    const {name, placeholder} = props
    
    return(
        <TextAreaComponent name={name} placeholder={placeholder}/>
    )
}

const TextAreaComponent = styled.textarea`
    width: 268px;
    height: 200px;
    margin-top: 15px;
    background-color: transparent;
    padding: 10px;
    box-sizing: border-box;
    border: var(--border-components);
`