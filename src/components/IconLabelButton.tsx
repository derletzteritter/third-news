import styled from "@emotion/styled";
import React from "react";

const Button = styled('button')(({ theme }) => ({
	backgroundColor: theme.background.button,
	color: theme.text.button,
	fontFamily: "'Vollkorn', serif",
	fontSize: 22,
	boxSizing: 'border-box',
	padding: '.5em .5em',
	border: 'none',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	cursor: 'pointer',
	':hover': {
		backgroundColor: theme.background.buttonHover
	}
}))

const Icon = styled('div')(() => ({
	marginLeft: 10,
	display: 'grid',
	placeItems: 'center'
}))

interface IconLabelButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	icon: JSX.Element;
}

export const IconLabelButton: React.FC<IconLabelButtonProps> = ({ icon, children, ...props }) => {
	return (
		<Button {...props}>
			<div>
				{children}
			</div>
			<Icon>
				{icon}
			</Icon>
		</Button>
	)
}