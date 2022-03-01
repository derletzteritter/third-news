import styled from "@emotion/styled";

export const Button = styled('button')(({ theme }) => ({
	backgroundColor: theme.background.button,
	color: theme.text.button,
	fontFamily: "'Vollkorn', serif",
	fontSize: 22,
	padding: '.5em .5em',
	border: 'none',
	cursor: 'pointer',
	':hover': {
		backgroundColor: theme.background.buttonHover
	}
}))