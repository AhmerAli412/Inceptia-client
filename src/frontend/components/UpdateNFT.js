import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import NFTAbi from "../contractsData/NFT.json";
import NFTAddress from "../contractsData/NFT-address.json";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  inceptiaAbi,
  inceptiaContractAddress,
  rewardsContractAddress,
} from "../../contract/index";

const UpdateNFT = () => {
  const [nftContract, setNftContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [selectedTokenURI, setSelectedTokenURI] = useState(null);
  const [account, setAccount] = useState(null);
  const [isMinting, setIsMinting] = useState(false);
  const [inceptia, setInceptia] = useState(null);
  const [uri, setUri] = useState(null);
  const [LinkedNFT, setLinkedNFT] = useState(null);
  const [hasLinkedNFT, setHasLinkedNFT] = useState(true);

  const [currentNFTLevel, setCurrentNFTlevel] = useState(null);
  // State to store the minted URI
  const [mintedTokenURI, setMintedTokenURI] = useState(null);

  const [upgradePrice, setUpgradePrice] = useState(null);
  useEffect(() => {
    async function setup() {
      if (window.ethereum) {
        const web3Provider = new ethers.providers.Web3Provider(window.ethereum);

        const signer = web3Provider.getSigner();
        const nft = new ethers.Contract(NFTAddress.address, NFTAbi.abi, signer);
        const inceptia = new ethers.Contract(
          inceptiaContractAddress,
          inceptiaAbi,
          signer
        );

        setInceptia(inceptia);
        setNftContract(nft);
        setProvider(web3Provider);

        const accounts = await web3Provider.listAccounts();
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        }

        // setUpgradePrice(upPrice.toNumber());
      } else {
        alert("MetaMask not found. Please install it to continue.");
      }
    }

    setup();
  }, []);

  useEffect(() => {
    const loadNFT = async () => {
      try {
        const NFT = await nftContract.getLinkedNFT(account);

        setLinkedNFT(NFT);
        const URI = NFT.tokenURI;

        const response = await fetch(URI);
        const metadata = await response.json();
        setUri(metadata.image);
        setCurrentNFTlevel(NFT.level.toNumber());

        let upPrice = await nftContract.getUpgradePrice(NFT.tokenId.toNumber());
        const upPriceInNumber = ethers.utils.formatUnits(upPrice, "ether");

        console.log(upPriceInNumber);
        setUpgradePrice(upPriceInNumber);
      } catch (error) {
        setHasLinkedNFT(false);
        toast("Cannot load NFT");
      }
    };
    if (account && nftContract) {
      loadNFT();
    }
  }, [account, nftContract]);

  const connectToMetaMask = async () => {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const accounts = await provider.listAccounts();
      if (accounts.length > 0) {
        setAccount(accounts[0]);
      }
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
    }
  };

  const handleTokenURIClick = (uri) => {
    setSelectedTokenURI(uri);
  };

  const updateNFTFunction = async () => {
    try {
      if (!account) {
        toast.error("Please connect your MetaMask account first.");
        alert("Please connect your MetaMask account first.");
        return;
      }

      const signer = provider.getSigner();
      setIsMinting(true);

      const allowance = await inceptia.approve(
        NFTAddress.address,
        ethers.utils.parseEther(upgradePrice)
        // parseInt(upgradePrice)
      );

      await allowance.wait();

      const transaction = await nftContract.upgrade(
        LinkedNFT.tokenId.toNumber()
      );
      await transaction.wait();
      setIsMinting(false);

      toast.success("NFT Updated successfully");
    } catch (error) {
      setIsMinting(false);
      console.error("Error minting NFT:", error);
      toast.error("Error updating NFT");
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="min-h-screen flex items-center justify-center bg-[#161616fd] py-6 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#1a1c1f" }}
      >
        <div className="max-w-7xl mx-auto w-full space-y-4">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-white">
              Update your NFT
            </h2>
          </div>
          <div className="mb-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#161616fd] p-4 rounded-lg shadow-lg cursor-pointer">
                <img
                  src={uri}
                  className="mx-auto mt-4 rounded-lg"
                  style={{ maxWidth: "100%", width: "100%" }}
                />
                <div className="text-center text-white mt-4">
                  Current NFT Level: {currentNFTLevel}
                </div>
              </div>
            </div>
            <button
              onClick={updateNFTFunction}
              className="mt-4 w-3/2 inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              style={{
                background:
                  "linear-gradient(90deg, rgba(50,168,56,1) 0%, rgba(50,168,56,1) 50%, rgba(87,194,33,1) 50%, rgba(87,194,33,1) 100%)",
              }}
            >
              Update NFT
            </button>
            <div className="text-center text-white mt-4">
              Upgrade Price: {upgradePrice} INC
            </div>
            {account ? (
              <p className="text-center text-white mt-4">
                Connected Address: {account}
              </p>
            ) : (
              <button
                onClick={connectToMetaMask}
                className="w-full inline-flex text-white items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(50,168,56,1) 0%, rgba(50,168,56,1) 50%, rgba(87,194,33,1) 50%, rgba(87,194,33,1) 100%)",
                }}
              >
                Connect to MetaMask Account
              </button>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default UpdateNFT;
