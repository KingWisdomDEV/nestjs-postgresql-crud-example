import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useDisconnect } from "wagmi";

export default function ConnectButton() {
  // 4. Use modal hook
  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const { address,  isConnected } = useAccount();

  if (!address || !isConnected)
    return <button onClick={() => open()}>Connect Wallet</button>;

  return (
    <div>
      {address && (
        <div>
          {address}
          <button onClick={disconnect}>Disconnect</button>
        </div>
      )}
    </div>
  );
 
}
