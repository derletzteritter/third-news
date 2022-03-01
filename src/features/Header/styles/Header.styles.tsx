import styled from '@emotion/styled';

export const HeaderContainer = styled('div')(({ theme }) => ({
  background: theme.background.primary,
  width: '100%',
  height: '70px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  borderBottom: `1px solid ${theme.text.primary}`,
}));

export const HeaderSection = styled('div')(() => ({
  fontFamily: "'Vollkorn', serif",
  marginLeft: 20,
  marginRight: 20,
  display: 'flex',
  fontSize: 18,
  justifyContent: 'center',
  alignItems: 'center',
}));

export const LoginButton = styled('button')(({ theme }) => ({
  color: theme.text.button,
  backgroundColor: theme.background.button,
  fontFamily: "'Vollkorn', serif",
  padding: '.2em 1em',
  fontSize: 18,
  border: 'none',
  cursor: 'pointer',
}));
