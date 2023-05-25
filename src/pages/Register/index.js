import styled from "styled-components"
import FormContainer from "../../components/Container"
import Form from "../../components/Form"
import Input from "../../components/Input"
import TextArea from "../../components/TextArea"
import Button from "../../components/Button"

export default function Register() {
    return (
        <FormContainerComponent>
            <FormComponent>
                <h1>Cadastrar</h1>
                <InputComponent type={'text'} placeholder={'Nome'} />
                <InputComponent type={'email'} placeholder={'E-mail'} />
                <InputComponent type={'text'} placeholder={'Foto do Perfil'} />
                <TextArea placeholder={'Biografia (até 200 caracters)'} />
                <InputComponent type={'password'} placeholder={'Senha'} />
                <InputComponent type={'password'} placeholder={'Confirme a sua senha'} />
                <ButtonComponent type="submit">Cadastrar</ButtonComponent>
            </FormComponent>
        </FormContainerComponent>
    )
}

const FormContainerComponent = styled.div`
    width: 350px;
    padding: 10px 0px;
    border: var(--border-components);
`

const FormComponent = styled.form`
    width: 348px;
    margin: 24px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const InputComponent = styled.input`
    width: 268px;
    height: 38px;
    margin-top: 15px;
    background-color: transparent;
    padding: 0px 15px;
    box-sizing: border-box;
    border: var(--border-components);
`

const ButtonComponent = styled.button`
    width: 268px;
    height: 32px;
    border: none;
    background-color: rgb(0,149,246);
    color: white;
    margin-top: 15px;
`