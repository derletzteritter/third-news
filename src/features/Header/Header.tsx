import React from 'react';
import { HeaderContainer, HeaderSection, LoginButton } from './styles/Header.styles';
import { themeIcons } from '../../icons/svgProvider';
import { useColorMode } from '../../states/theme.state';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [colorMode, setColorMode] = useColorMode();
  const navigate = useNavigate();

  const toggleColorMode = () => {
    setColorMode((curVal) => {
      return curVal === 'light' ? 'dark' : 'light';
    });
  };

  return (
    <HeaderContainer>
      <HeaderSection>
        <h2 onClick={() => navigate('/')}>Third News</h2>
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
        <LoginButton onClick={() => navigate('/login')}>Login</LoginButton>
      </HeaderSection>
    </HeaderContainer>
  );
};

export default Header;
