import Logo from "../../assets/logo.png";

import { Container, NavLinKContainer, NavLink, Footer } from "./styles";
import { navLinks } from "./navLinks";


import { useUser } from "../../hooks/UserContext";
import { SignOut } from "@phosphor-icons/react";
import { useResolvedPath } from "react-router-dom";

export function SideNavAdmin() {
    const { logout } = useUser();
	const { pathname } = useResolvedPath();




	return (
		<Container>
			<img src={Logo} alt="Hamburger Logo DevBurger" />
			<NavLinKContainer>
			{navLinks.map((link) => (
    <NavLink
	 key={link.id}
	 to={link.path}
	 $isActive={pathname === link.path}
	 >
        {link.icon}
        <span>{link.label}</span>
    </NavLink>
))}

			</NavLinKContainer>
			<Footer>
				<NavLink to="/login" onClick={logout}>
					<SignOut />
					<span>Sair</span>
				</NavLink>
			</Footer>
		</Container>
	);
}
