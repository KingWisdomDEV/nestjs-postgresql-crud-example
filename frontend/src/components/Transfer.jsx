import { useState } from "react";
import {
  useAccount,
  useBalance,
  useSwitchChain,
  useWriteContract,
} from "wagmi";
import { abi } from "../abis/HLTHY.json";
import { parseEther } from "viem";
import { printNumber } from "./web3/utils";
import { IconLoading } from "./Icons";
import { ethers } from "ethers";
import { useEthersSigner } from "./web3/useEthersSigner";

const CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS;
const CONTRACT_NETWORK = +import.meta.env.VITE_CONTRACT_NETWORK;

const Transfer = () => {
  const { address, isConnected, chainId } = useAccount();
  const [recipientAddress, setRecipientAddress] = useState("");
  const [amount, setAmount] = useState("");

  const { switchChain } = useSwitchChain();
  const { data: hash, isPending, writeContractAsync } = useWriteContract();
  const signer = useEthersSigner();

  // console.log('chain :>> ', connector.getProvider());
  // console.log('hash :>> ', hash);
  // console.log('isPending :>> ', isPending);

  const { data: balance } = useBalance({
    address,
    token: CONTRACT_ADDRESS,
  });

  const handleTransfer = async () => {
    if (!recipientAddress || +amount < 0) return;
    // console.log("amount", parseEther(amount));

    try {
      const contract = new ethers.Contract(address, abi, signer);
      const tx = await contract.transferWithDividend(
        recipientAddress,
        parseEther(amount)
      );

      console.log('tx :>> ', tx);

      const hash = await tx.wait();
      console.log('hash :>> ', hash);


      // const res = await writeContractAsync({
      //   address: CONTRACT_ADDRESS,
      //   functionName: "transferWithDividend",
      //   args: [recipientAddress, parseEther(amount)],
      //   abi,
      //   // abi: erc20Abi,
      //   // functionName: "_transfer",
      //   // args: [ address,recipientAddress, BigInt(amount)],
      // });

      // console.log("res :>> ", res);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  if (!address || !isConnected) return null;

  return (
    <div className="mt-10 border p-6 rounded-xl shadow-lg">
      <h6 className="text-lg font-medium mb-5">Smart Contract</h6>
      <p>Contract Address: {CONTRACT_ADDRESS}</p>
      <p>Supported Network: Binance Smart Chain Testnet</p>

      <div className="mt-6 space-y-5">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Send to
          </label>
          <input
            onChange={(e) => setRecipientAddress(e.target.value)}
            value={recipientAddress}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            placeholder="Enter wallet address (0x)"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Value
          </label>
          <input
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            placeholder="Enter amount"
          />
        </div>
      </div>
      <p className="text-sm mt-2 text-right mb-5">
        Your balance: {printNumber(balance?.formatted)} {balance?.symbol}
      </p>

      {chainId !== CONTRACT_NETWORK ? (
        <button
          className="border px-6 w-full py-2 bg-black hover:bg-black/80 text-white rounded-lg"
          onClick={() => switchChain({ chainId: CONTRACT_NETWORK })}
        >
          Switch Network
        </button>
      ) : (
        <button
          className="border flex justify-center items-center gap-2 px-6 w-full py-2 bg-black hover:bg-black/80 text-white rounded-lg"
          onClick={handleTransfer}
        >
          {isPending && <IconLoading />} Send now
        </button>
      )}
    </div>
  );
};

export default Transfer;
