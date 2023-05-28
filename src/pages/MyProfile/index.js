import { useEffect, useState, useContext } from "react"
import { UserContext } from "../../contexts/UserContext"
import { TailSpin } from 'react-loader-spinner'
import styled from "styled-components"
import axios from "axios"

export default function MyProfile() {

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

        axios.get("http://localhost:5000/myprofile", config)
            .then((res) => {
              setUser(res.data)
            })
            .catch((err) => alert(err.message))
    }, [])

    if(!user){
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
     
           <>
                <UserProfileHeader>
                    <img src="" alt="" />
                    <UserProfileInfo>
                        <UserProfileInfoHeader>
                            <span>{user.name}</span>
                            <button>Editar Perfil</button>
                        </UserProfileInfoHeader>

                        <UserProfileInfoBody>
                            <ul>
                                <li><span>{user.posts.length}</span> publicações</li>
                                <li><span>2.939</span> seguidores</li>
                                <li><span>7.294 </span>seguindo</li>
                            </ul>
                        </UserProfileInfoBody>

                        <UserProfileBio>
                           biography
                        </UserProfileBio>

                    </UserProfileInfo>
                </UserProfileHeader>

                <UserPosts>
                        {user.posts.map(post => <UserPost></UserPost>)}
                </UserPosts>
            </>
    )
}

const UserProfileHeader = styled.div`
    height: 220px;
    display: flex;
    align-items: center;
    background-color: aquamarine;
    border-bottom: 1px solid black;
    box-sizing: border-box;
    padding: 15px;

    img{
        width: 150px;
        height: 150px;
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
    height: 18px;
    padding: 0px 0px 20px;
    background-color: aqua;

    ul{
        display: flex;
        justify-content: space-between;
        span{
            font-weight: 600;
        }
    }

`
const UserProfileBio = styled.div`
    height: 54px;
`
const UserPosts = styled.div`

`
const UserPost = styled.img`
    width: 309px;
    height: 309px;
    background-color: aqua;
`