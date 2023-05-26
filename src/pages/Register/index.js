import styled from "styled-components"
import FormContainer from "../../components/Container"
import Form from "../../components/Form"
import Input from "../../components/Input"
import TextArea from "../../components/TextArea"
import Button from "../../components/Button"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

export default function Register() {

    // navigate
    const navigate = useNavigate();

    // states
    const [formData, setFormData] = useState({name: '', email: '', photo: '', biography: '', password: '', confirmPassword: '' });

    // functions
    function handleChange(e){
        e.preventDefault();
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function register(e){
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            return alert('A confirmação de senha não confere')
        }

        axios.post('http://localhost:5000/register', {...formData})
        .then(res => navigate('/login'))
        .catch(err => alert('preencha os dados corretamente'))
    }

    return (
        <FormContainerComponent>
            <FormComponent onSubmit={register}>
                <h1>Cadastrar</h1>
                <InputComponent type='text' placeholder='Nome' name="name" value={formData.name} onChange={handleChange}  required/>
               
                <InputComponent type='email' placeholder='E-mail' name="email" value={formData.email} onChange={handleChange}  required/>
               
                <InputComponent type='text' placeholder='Foto do Perfil' name="photo" value={formData.photo} onChange={handleChange}  required/>
               
                <TextArea placeholder='Biografia (até 200 caracters)' name="biography" value={formData.biography} onChange={handleChange}/>
               
                <InputComponent type='password' placeholder='Senha' name="password" value={formData.password} onChange={handleChange} required/>
               
                <InputComponent type='password' placeholder='Confirme a sua senha'  name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required/>
               
                <p>
                    Ao se cadastrar, você concorda com nossos Termos, Política de Privacidade
                    e Política de Cookies.
                </p>
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
    p{
        width: 270px;
        text-align: inherit;
    }
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
    cursor: pointer;
    margin-top: 15px;
`