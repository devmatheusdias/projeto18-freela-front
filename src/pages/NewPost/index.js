import styled from "styled-components"
import NewPostImage from "../../assets/newPostImage.png"

export default function NewPost() {
    return (   
        <NewPostContaniner>
            <h3>Criar nova publicação</h3>
            <hr />
            <img src={NewPostImage} alt="" />
            Selecionar a foto ou vídeo aqui
            <button>Selecionar arquivo</button>
        </NewPostContaniner>

    )
}

const NewPostContaniner = styled.div`
    width: 620px;
    height: 620px;
    padding: 24px;
    box-sizing: border-box;
    background-color: aquamarine;
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        margin-top: 50px;
    }
`