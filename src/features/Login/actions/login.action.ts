declare global {
	interface Window {
		ethereum: any;
	}
}


export const connectWallet = async (onConnected: any) => {
	if (window.ethereum) {
		const accounts = await window.ethereum.request({
			method: "eth_requestAccounts"
		})
		
		onConnected(accounts[0]);
	}
};

export const findWallets = async (onConnected: any) => {
	if (window.ethereum) {
		const accounts = await window.ethereum.request({
			method: "eth_accounts",
		});
		
		if (accounts.length > 0) {
			onConnected(accounts[0]);
		}
	}
};
