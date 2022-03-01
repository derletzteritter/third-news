import React from 'react';
import { HeaderContainer, HeaderSection, LoginButton } from './styles/Header.styles';
import { themeIcons } from '../../icons/svgProvider';
import { useColorMode } from '../../states/theme.state';

const Header: React.FC = () => {
  const [colorMode, setColorMode] = useColorMode();

  const toggleColorMode = () => {
    setColorMode((curVal) => {
      return curVal === 'light' ? 'dark' : 'light';
    });
  };

  return (
    <HeaderContainer>
      <HeaderSection>
        <h2>Third News</h2>
      </HeaderSection>
      <HeaderSection>
        <h4>News</h4>
      </HeaderSection>
      <HeaderSection>
        <span
          onClick={toggleColorMode}
          style={{
            cursor: 'pointer',
            paddingRight: 10,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {colorMode === 'light' ? themeIcons.dark : themeIcons.light}
        </span>
        <LoginButton>Login</LoginButton>
      </HeaderSection>
    </HeaderContainer>
  );
};

export default Header;
