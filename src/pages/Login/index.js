import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { UserContext} from "../../contexts/UserContext";

export default function Login() {

    const {setToken} = useContext(UserContext)

    // navigate
    const navigate = useNavigate();

    // states
    const [formData, setFormData] = useState({email: '', password: ''});

    // functions
    function handleChange(e){
        e.preventDefault();
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function login(e){
        e.preventDefault()

        axios.post("http://localhost:5000/login", {...formData})
        .then( res => {
            setToken(res.data)
            console.log(res.data)
            setTimeout(() => {
                navigate('/home')
            }, 3000);
        })
        .catch(err => alert('preencha os dados corretamente'))

    }

    return (
        <FormContainerComponent>
            <FormComponent onSubmit={login}>
                <h1>Login</h1>
                <InputComponent type='email' placeholder='E-mail' name="email" onChange={handleChange} value={formData.email} required/>

                <InputComponent type='password' placeholder='Senha' name="password" onChange={handleChange} value={formData.password} required/>
                
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
    cursor: pointer;
`