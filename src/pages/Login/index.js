import styled from "styled-components"

export default function Login() {
    return (
        <FormContainerComponent>
            <FormComponent onSubmit={''}>
                <h1>Login</h1>
                <InputComponent type={'email'} placeholder={'E-mail'} />
                <InputComponent type={'password'} placeholder={'Senha'} />
                <ButtonComponent type="submit">Entrar</ButtonComponent>
                <a href="#">Esqueceu a senha?</a>
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