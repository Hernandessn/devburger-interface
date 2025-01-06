import { UserCircle, ShoppingCart} from "@phosphor-icons/react";
import { useNavigate, useResolvedPath } from "react-router-dom";

import { useUser} from '../../hooks/UserContext';

import {
	Container,
	Content,
	HeaderLink,
	LinkContainer,
	Logout,
	Navigation,
	Options,
	Profile,

} from "./styles";



export function Header() {
    const navigate = useNavigate();
    const { logout, useInfo} = useUser

    const { pathname } = useResolvedPath();


    //Função para deslogar o usuário
    function logoutUser(){
      //Limpar tds as informacoes de usuário  
      logout();

      //Navega para a página de Login
      navigate('/login');
        

    }

	return (
		<Container>
            <Content>
			<Navigation>
				<div>
					<HeaderLink to="/" $isActive={pathname === '/'}>Home</HeaderLink>
                    {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
                    <hr></hr>
					<HeaderLink to="cardapio" $isActive={pathname === '/cardapio'}>Cardápio</HeaderLink>
				</div>
                </Navigation>
				<Options>
					<Profile>
                        <UserCircle color="#fff" siza={24}/>
						<div>
							<p>
								Olá, <span>Hernandes</span>
							</p>
						</div>

						<Logout onClick={logoutUser}>Sair</Logout>
					</Profile>
                    <LinkContainer>
                     <ShoppingCart color="#fff" siza={24}/>
					 <HeaderLink to="/carrrinho">Carrinho</HeaderLink>
				</LinkContainer>
                
				</Options>
				
			
            </Content>
		</Container>
	);
}
