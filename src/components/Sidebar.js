import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Siderbar() {

    return (
        <SiderbarComponent>
            <h2>Fomebook</h2>
            <ul>
                <Link>
                    <li> <ion-icon name="home-outline"></ion-icon> Página inicial</li>
                </Link>

                <Link>
                    <li><ion-icon name="search-outline"></ion-icon> Pesquisa</li>
                </Link>

                <Link>
                    <li><ion-icon name="compass-outline"></ion-icon> Explorar</li>
                </Link>

                <Link>
                    <li><ion-icon name="videocam-outline"></ion-icon>Reels</li>
                </Link>

                <Link>
                    <li><ion-icon name="chatbubbles-outline"></ion-icon>Mensagens</li>
                </Link>

                <Link>
                    <li><ion-icon name="notifications-outline"></ion-icon>Notificações</li>
                </Link>

                <Link to={'/newpost'}>
                    <li><ion-icon name="add-circle-outline"></ion-icon>Criar</li>
                </Link>

                <Link to={'/myprofile'}>
                    <li><ion-icon name="person-circle-outline"></ion-icon>Perfil</li>
                </Link>
            </ul>
        </SiderbarComponent>
    )
}

const SiderbarComponent = styled.div`
    width: 335px;
    height: 980px;
    margin-top: 15px;
    background-color: red;
    padding: 8px 12px 20px;
    box-sizing: border-box;
    border: var(--border-components);

    li{
        cursor: pointer;
        width: 311px;
        height: 48px;
        box-sizing: border-box;
        background-color: green;
        display: flex;
        align-items: center;

        ion-icon{
            margin-right: 7px;
        }
    }
`