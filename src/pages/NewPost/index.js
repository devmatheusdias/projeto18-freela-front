import styled from "styled-components"
import axios from "axios";
import NewPostImage from "../../assets/newPostImage.png"
import { useNavigate } from "react-router-dom"
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";


export default function NewPost() {

    // context
    const {token} = useContext(UserContext)

    // navigate
    const navigate = useNavigate();

    // states
    const [formData, setFormData] = useState({image: 'https://blog.fellyph.com.br/wp-content/uploads/2016/06/react-js.png', description: ''});


     // functions
     function handleChange(e){
        e.preventDefault();
        setFormData({...formData, [e.target.name]: e.target.value})
        console.log(token)
    }

    function newPost(e){
        e.preventDefault()

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        axios.post(`http://localhost:5000/newpost`, formData, config)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err))

    }
    return (
        <>
            <NewPostContaniner>
                <NewPostHeader>
                    <button> voltar </button>
                    <span>Criar nova publicação</span>
                    <button type="submit" form="upload-image">Compartilhar</button>
                </NewPostHeader>

                <NewPostBody>
                    <NewPostMain>
                        <img src={NewPostImage} alt="" />
                        Selecionar a foto ou vídeo aqui

                        <form id="upload-image" onSubmit={newPost}>
                            <input name="image" type="file" accept="image/*"  onChange={''} value={''} />
                        </form>
                    </NewPostMain>

                    <NewPostSidebar>
                        <NewPostUserInfo>
                            <img src="" alt="" />
                            <p>matheusdias.a</p>
                        </NewPostUserInfo>
                        <textarea name="description" id="post-description" cols="30" rows="10" placeholder="Escreva uma descrição..." onChange={handleChange} value={formData.description}></textarea>
                    </NewPostSidebar>


                </NewPostBody>
            </NewPostContaniner>
        </>

    )
}

const NewPostContaniner = styled.div`
    width: 1100px;
    height: 803px;
    box-sizing: border-box;
    background-color: burlywood;
`

const NewPostHeader = styled.div`
    width: 100%;
    height: 42px;
    background-color: brown;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const NewPostBody = styled.div`
    width: 100%;
    height: 42px;
    background-color: brown;
    display: flex;
`

const NewPostMain = styled.div`
    width: 761px;
    height: 761px;
    background-color: blue;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
`

const NewPostSidebar = styled.div`
    width: 339px;
    height: 761px;
    border: 1px solid black;
    background-color: blueviolet;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px 16px;
    box-sizing: border-box;

    textarea{
        width: 100%;
        height: 168px;
        box-sizing: border-box;
        padding: 0px 16px;
}
`
const NewPostUserInfo = styled.div`
    width: 100%;
    background-color: red;
    display: flex;
    align-items: center;
    img{
        width: 28px;
        height: 28px;
        border-radius: 100%;
        background-color: blue;
        margin-right: 10px;
    }
`