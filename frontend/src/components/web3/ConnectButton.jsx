import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useBalance, useDisconnect } from "wagmi";
import { formatAddress } from "./utils";

export default function ConnectButton() {
  // 4. Use modal hook
  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const { address, isConnected, chain } = useAccount();
  const { data: balance } = useBalance({
    address,
  });

  if (!address || !isConnected)
    return <button onClick={() => open()}>Connect Wallet</button>;

  return (
    <div>
      {address && (
        <div>
          <p>Address: {formatAddress(address)}</p>
          <p>
            Balance: {Number(balance?.formatted).toFixed(5)} {balance?.symbol}
          </p>
          <button onClick={() => open({ view: "Networks" })}>
            <p>Network: {chain?.name}</p>
          </button>
          <button onClick={disconnect}>Disconnect</button>
        </div>
      )}
    </div>
  );
}
