import styled from "styled-components"

export default function Followers() {
    return (

        <>
            <InputComponent type={'text'} placeholder={'Buscar...'} />
            <FollowersContainer>
                <img src="" alt="" />

                <div>
                    <p className="username">User name</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo ab, illo accusantium quasi vero unde doloribus vitae id tempora. Accusamus placeat nihil ea aliquid quae voluptate quas eligendi architecto ullam?</p>
                </div>

                <button>Remover</button>
            </FollowersContainer>
        </>
    )
}

const FollowersContainer = styled.div`
    width: 600px;
    height: 68px;
    padding: 8px 16px;
    background-color: aqua;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        width: 54px;
        height: 54px;
        border-radius: 100%;
        background-color: red;
    }

    div{
        width: 416px;
        height: 52px;
        overflow: hidden;
        box-sizing: border-box;

        .username{
            font-weight: 600;
            padding: 3px 0px;
        }
    }
`

const InputComponent = styled.input`
    width: 631px;
    height: 38px;
    margin-top: 15px;
    background-color: transparent;
    padding: 0px 15px;
    box-sizing: border-box;
    border: var(--border-components);
`
