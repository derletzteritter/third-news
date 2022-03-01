import React from 'react';
import { HeaderContainer, HeaderSection, LoginButton } from "./styles/Header.styles";
import { themeIcons } from "../../icons/svgProvider";

const Header: React.FC = () => {
	return (
		<HeaderContainer>
			<HeaderSection>
				<h2>Third News</h2>
			</HeaderSection>
			<HeaderSection>
				<h4>News</h4>
			</HeaderSection>
			<HeaderSection>
				<span style={{ paddingRight: 10, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					{themeIcons.dark}
				</span>
				<LoginButton>Login</LoginButton>
			</HeaderSection>
		</HeaderContainer>
	)
}

export default Header;