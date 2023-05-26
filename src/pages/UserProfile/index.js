import styled from "styled-components"

export default function UserProfile() {
    return (
        <>
            <UserProfileHeader>
                <img src="" alt="" />
                <UserProfileInfo>
                    <UserProfileInfoHeader>
                        <span>Username_</span>
                        <button>Seguindo</button>
                        <button>Enviar mensagem</button>
                        <button>...</button>
                    </UserProfileInfoHeader>

                    <UserProfileInfoBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad facere consectetur provident! Qui omnis, laborum facere laudantium consectetur repellendus? Inventore quo omnis nulla sed voluptatibus odio dolor maxime, eveniet repudiandae?
                    </UserProfileInfoBody>
                </UserProfileInfo>
            </UserProfileHeader>

            <UserPosts>
                <UserPost></UserPost>
                <UserPost></UserPost>
                <UserPost></UserPost>
            </UserPosts>
        </>

)}

const UserProfileHeader = styled.div`
    height: 220px;
    display: flex;
    align-items: center;
    background-color: aquamarine;
    border-bottom: 1px solid black;
    box-sizing: border-box;
    padding: 15px;

    img{
        width: 168px;
        height: 168px;
        border-radius: 100%;
        background-color: red;
    }
`
const UserProfileInfo = styled.div`
    width: 613px;
`
const UserProfileInfoHeader = styled.div`
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const UserProfileInfoBody = styled.div`
    height: 61px;
`
const UserPosts = styled.div`

`

const UserPost = styled.img`
    width: 309px;
    height: 309px;
    background-color: aqua;
`