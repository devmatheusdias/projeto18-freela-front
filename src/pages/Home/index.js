import styled from "styled-components"
import Siderbar from "../../components/Sidebar"

export default function Home() {
    return (
        <HomeContainer>
            <Siderbar />

            <PostsContainer>
                <PostContainer>
                    <PostHeader>
                        <img src="" alt="" />
                        <p>
                            <span>
                                tntsportsbr
                            </span>
                            - 17 min
                        </p>
                        <a>...</a>
                    </PostHeader>

                    <PostBody></PostBody>

                    <PostFooter>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </PostFooter>

                    <PostLikes>
                        curtido por luan_adriano e outras pessoas
                    </PostLikes>

                    <PostDescription>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, est veritatis itaque deserunt sit corporis laboriosam voluptate rerum facilis quas doloremque dicta vitae temporibus corrupti accusamus necessitatibus eligendi, architecto consequatur? ta vitae temporibus corr
                        necessitatibus eligendi, architecto consequatur? aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    </PostDescription>

                    <span>Ver todos os 80 coméntarios</span>

                    <PostInput placeholder="Adicione um comentário..." />

                </PostContainer>

            </PostsContainer>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    background-color: blue;
    padding: 0;
`

const PostsContainer = styled.div`
    background-color: brown;
    width: 630px;
    margin: 10px 64px 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const PostContainer = styled.div`
    width: 470px;
    height: 865px;
    padding: 0px 0px 20px;
    margin: 0px 0px 12px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
`
const PostHeader = styled.div`
    height: 56px;
    background-color: yellow;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img{
        width: 32px;
        height: 32px;
        border-radius: 100%;
        margin-right: 10px;
        border: 2px solid black;
    }

    span{
        cursor: pointer;
    }

    a{
        margin-left: auto;
        cursor: pointer;
    }
`
const PostBody = styled.div`
    height: 585px;
    background-color: blueviolet;
`
const PostFooter = styled.div`
    height: 46px;
    background-color: aqua;
    display: flex;
    align-items: center;

    ion-icon{
        cursor: pointer;
        margin-right: 8px;

        :nth-child(4){
            margin-left: auto;
            margin-right: 0px;
        }
    }
`
const PostLikes = styled.div`
    height: 18px;
    background-color: bisque;
`
const PostDescription = styled.div`
    margin: 10px 0px;
    height: 66px;
    background-color: brown;
    box-sizing: border-box;
    overflow: hidden;
`

const PostInput = styled.input`
    margin-top: auto;
    border: none;
    background-color: transparent;

`