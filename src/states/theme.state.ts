import { atom, useRecoilState, useRecoilValue } from "recoil";

const themeState = {
	colorMode: atom<'dark' | 'light'>({
		key: 'themeStateColorMode',
		default: 'light'
	})
}

export const useColorMode = () => useRecoilState(themeState.colorMode);
export const useColorModeValue = () => useRecoilValue(themeState.colorMode);