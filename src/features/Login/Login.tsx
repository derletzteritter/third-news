import React, { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { connectWallet, findWallets } from './actions/login.action';

const Login: React.FC = () => {
  const [userAddress, setUserAddress] = useState(null);

  useEffect(() => {
    findWallets(setUserAddress).then(() => console.log('Requested wallets'));
  }, []);

  const hasEth = Boolean(window.ethereum);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10em',
      }}
    >
      {!hasEth ? (
        <p>Install Metamask</p>
      ) : userAddress ? (
        <p>Connected</p>
      ) : (
        <Button onClick={() => connectWallet(setUserAddress)} disabled={!hasEth}>
          Connect with MetaMask
        </Button>
      )}
    </div>
  );
};

export default Login;
