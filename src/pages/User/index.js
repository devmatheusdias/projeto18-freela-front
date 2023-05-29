import styled from "styled-components"
import Siderbar from "../../components/Sidebar"
import { Link, useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { TailSpin } from "react-loader-spinner"
import { UserContext } from "../../contexts/UserContext"

export default function User() {

    const {id} = useParams()
    const parseId = Number(id)

    // context
    const { token } = useContext(UserContext)

    // states
    const [user, setUser] = useState()

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }

        }

        axios.get(`http://localhost:5000/user/${parseId}`, config)
            .then((res) => {
                setUser(res.data)
                console.log(res.data)
            })
            .catch((err) => alert(err.message))
    }, [])

    if (!user) {
        return (
            <TailSpin
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        )
    }


    return (
        <HomeContainer>
            <UserProfileContainer>
                <UserProfileImage />

                <UserProfileInfos>
                    <p>{user.name}</p>
                    <p>{user.biography}</p>


                    <UserProfileButtonsContainer>
                        <UserProfileButton>
                            <p>Seguir</p>
                        </UserProfileButton>
                        
                    </UserProfileButtonsContainer>
                </UserProfileInfos>
            </UserProfileContainer>
            
            {user.posts.map(post =>
                <PostContainer>
                    <PostImage src={post.photo}/>

                    <PostLikes>
                        <ion-icon name="heart-outline"></ion-icon>
                        <p> pessoas curtiram a sua foto!</p>
                        <p>{post.createdate}</p>
                    </PostLikes>

                    <PostDescription>
                       {post.description}
                    </PostDescription>
                </PostContainer>
            )}
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    background-color: blue;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0px 300px;
`
const UserProfileContainer = styled.div`
    background-color: red;
    display: flex;
    justify-content: center;
`
const UserProfileInfos = styled.div`
    width: calc(100% - 150px);
    background-color: yellowgreen;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    box-sizing: border-box;
`
const UserProfileButtonsContainer = styled.div`
    display: flex;
`
const UserProfileButton = styled.button`
        margin-right: 20px;
        height: 30px;
`
const UserProfileImage = styled.img`
    background-color: beige;
    width: 150px;
    height: 150px;
    border-radius: 100%;
`
const PostContainer = styled.div`
    margin: 30px 0px;
    border: 1px solid black;
`
const PostImage = styled.img`
    width: 100%;
    height: 585px;
`
const PostLikes = styled.div`
    align-items: center;
    display: flex;
    align-items: center;
    margin: 10px 0px;
    
    p:nth-child(3){
            margin-left: auto;
            margin-right: 0px;
    }
    
    ion-icon{
        cursor: pointer;
        margin-right: 8px;
    }
`
const PostDescription = styled.div`
text-align: justify;
`