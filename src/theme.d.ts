import '@emotion/react';

declare module '@emotion/react' {
	export interface Theme {
		text: {
			primary: string;
			button: string;
		};
		background: {
			primary: string;
			button: string;
			buttonHover: string;
		}
	}
}