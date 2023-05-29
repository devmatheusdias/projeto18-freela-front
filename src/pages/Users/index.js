import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { TailSpin } from "react-loader-spinner"
import styled from "styled-components"
import { UserContext } from "../../contexts/UserContext"
import { Link } from "react-router-dom"

export default function Users() {

    // context
    const { token } = useContext(UserContext)

    // states
    const [followers, setFollwers] = useState()

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }

        }

        axios.get("http://localhost:5000/followers", config)
            .then((res) => {
                setFollwers(res.data)
            })
            .catch((err) => alert(err.message))
    }, [])

    if (!followers) {
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
            <InputComponent type={'text'} placeholder={'Buscar...'} />

            {followers.map(follower => 
                  <FollowerContainer>
                  <img src="" alt="" />
  
                  <div>
                      <p className="username"><Link to={`/user/${follower.id}`}>{follower.name}</Link></p>
                      <p>{follower.biography}</p>
                  </div>
  
              </FollowerContainer>
            
            )}
        </>
    )
}

const FollowerContainer = styled.div`
    width: 400px;
    height: 68px;
    padding: 8px 16px;
    background-color: aqua;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;

    img{
        width: 64px;
        height: 54px;
        border-radius: 100%;
        background-color: red;
    }

    div{
        width: 416px;
        height: 52px;
        overflow: hidden;
        box-sizing: border-box;
        margin-left: 15px;

        .username{
            font-weight: 600;
            padding: 3px 0px;
        }
    }
`

const InputComponent = styled.input`
    width: 400px;
    height: 38px;
    margin-top: 15px;
    background-color: transparent;
    padding: 0px 15px;
    margin-bottom: 15px;
    border: var(--border-components);
`
