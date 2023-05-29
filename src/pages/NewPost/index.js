import styled from "styled-components"
import axios from "axios";
import NewPostImage from "../../assets/newPostImage.png"
import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";


export default function NewPost() {

    // context
    const { token } = useContext(UserContext)

    // navigate
    const navigate = useNavigate();

    // states
    const [formData, setFormData] = useState({ image: '', description: '' });


    // functions
    function handleChange(e) {
        e.preventDefault();
        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log(token)
    }

    function newPost(e) {
        e.preventDefault()

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios.post(`http://localhost:5000/newpost`, formData, config)
            .then(res => {
                navigate('/home')
            })
            .catch(err => console.log(err))

    }
    return (
        <NewPostContaniner>
            <NewPostForm onSubmit={newPost}>
                <input name="image" type="text" onChange={handleChange} value={formData.image} placeholder="imagem" />
                
                <textarea name="description" id="post-description" cols="50" rows="10" placeholder="Escreva uma descrição..." onChange={handleChange} value={formData.description}></textarea>
                <button type="submit">Criar Post</button>
            </NewPostForm>
        </NewPostContaniner>

    )
}

const NewPostContaniner = styled.div`
    width: 1280px;
    height: 700px;
    box-sizing: border-box;
    background-color: blue;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`
const NewPostForm = styled.form`
    width: 600px;
    height: 500px;
    background-color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    button{
        cursor: pointer;
    }
`
