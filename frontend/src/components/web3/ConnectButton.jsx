import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount, useBalance, useDisconnect } from "wagmi";
import { formatAddress, printNumber } from "./utils";

const IconArrowDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default function ConnectButton() {
  // 4. Use modal hook
  const { open } = useWeb3Modal();
  const { disconnect } = useDisconnect();
  const { address, isConnected, chain } = useAccount();
  const { data: balance } = useBalance({
    address,
  });

  if (!address || !isConnected)
    return (
      <button
        onClick={() => open()}
        className="bg-black text-white px-6 py-2 rounded-lg hover:bg-black/80"
      >
        Connect Wallet
      </button>
    );

  return (
    <div className="border rounded-xl p-6 shadow-lg">
      {address && (
        <div>

          <p>Address: {formatAddress(address)}</p>
          <p>
            Balance: {printNumber(balance?.formatted)} {balance?.symbol}
          </p>
          <div>
            <p className="flex">
              Network:
              <button
                className="ml-1 flex hover:text-blue-700"
                onClick={() => open({ view: "Networks" })}
              >
                {chain?.name} <IconArrowDown />
              </button>
            </p>
          </div>
          <div>
            <button onClick={disconnect} className="text-red-600">
              Disconnect
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
