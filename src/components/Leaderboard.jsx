import React, { useState, useEffect } from "react";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import "./Leaderboard.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ethers } from "ethers";
import { ToastContainer, toast } from "react-toastify";
import { inceptiaContractAddress, inceptiaAbi, rewardsContractAddress, rewardsAbi } from "../contract/index";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from '@clerk/clerk-react';


function Leaderboard() {
  const [data, setData] = useState([]);
  const { user } = useUser();
  const [sortOrder, setSortOrder] = useState("asc"); // "asc" or "desc"
  const [sortColumn, setSortColumn] = useState("userId");
  const [erc20Balance, setErc20Balance] = useState("");
  const [activeTab, setActiveTab] = useState(null);
  const [metamaskAddress, setMetamaskAddress] = useState('');
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [rewardContract, setRewardContract] = useState(null);
  const [inceptiaContract, setInceptiaContract] = useState(null);
  const [account, setAccount] = useState(null);
  const [ethBalance, setEthBalance] = useState("");
  // const [erc20Balance, setErc20Balance] = useState("");
  const [isModalOpen, setModalOpen] = useState(true);

  useEffect(() => {
    fetch('https://inceptia.onrender.com/fetchUsers')
      .then(response => response.json())
      .then(data => {
        const modifiedData = data.map((row, index) => ({ ...row, id: index }));
        setData(modifiedData);
      })
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleMetamaskConnect = async () => {
    try {
      const { ethereum } = window;
  
      if (ethereum) {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
  
        const account = accounts[0];
  
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });
  
        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
  
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const rewardContract = new ethers.Contract(
          rewardsContractAddress,
          rewardsAbi,
          signer
        );
        const inceptiaContract = new ethers.Contract(
          inceptiaContractAddress,
          inceptiaAbi,
          signer
        );
  
        setAccount(account);
        setProvider(provider);
        setSigner(signer);
        setRewardContract(rewardContract);
        setInceptiaContract(inceptiaContract);
  
        const ethBalance = await provider.getBalance(account);
        const formattedEthBalance = ethers.utils.formatEther(ethBalance);
        const ethBalanceWithFourDecimals =
          parseFloat(formattedEthBalance).toFixed(4);
  
        const erc20Balance = await inceptiaContract.balanceOf(account);
        const erc20BalanceInteger = parseInt(
          ethers.utils.formatUnits(erc20Balance, 18),
          10
        );
  
        setEthBalance(ethBalanceWithFourDecimals);
        setErc20Balance(erc20BalanceInteger);
        setMetamaskAddress(account);
  
        // Return the values here
        return {
          metamaskAddress: account,
          erc20Balance: erc20BalanceInteger,
        };
      } else {
        // alert("Please install MetaMask");
        toast("Please install metamask");
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
      throw error;
    }
  };


  const handleMetamaskConnectAndStoreUserData = async () => {
    try {
      document.cookie = "metamaskConnected=true; max-age=" + 2 * 60 * 60; // 2 hours
      const { metamaskAddress, erc20Balance } = await handleMetamaskConnect();
  
      fetch('https://inceptia.onrender.com/saveUserData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
          metamaskAddress,
          erc20Balance,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('User data stored on the server:', data);
        })
        .catch((error) => {
          console.error('Error storing user data:', error);
        });
      } catch (error) {
        console.error("Error connecting wallet:", error);
        toast.error("Error connecting wallet");
      }
    };

 

  const handleSort = (column) => {
    setSortColumn(column);
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const sortedData = [...data].sort((a, b) => {
    const valueA = a[sortColumn];
    const valueB = b[sortColumn];

    if (sortOrder === "asc") {
      return valueA < valueB ? -1 : 1;
    } else {
      return valueA > valueB ? -1 : 1;
    }
  });

  const columns = ["userId", "firstName", "lastName", "erc20Balance", "metamaskAddress"];

  return (
    <>
      <Navbar />
      <div className="leaderboard-container leader">
        
      <div className="flex items-center rounded-sm mb-4">
          <label htmlFor="sortColumn" className="mr-2">Sort By:</label>
          <select
            id="sortColumn"
            onChange={(e) => handleSort(e.target.value)}
            value={sortColumn}
            className="border p-1 mr-2 rounded-lg"
          >
            {columns.map((col) => (
              <option key={col} value={col}>
                {col}
              </option>
            ))}
          </select>
          <button
            onClick={() => setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"))}
            className="border p-1"
          >
            {sortOrder === "asc" ? <FaSortUp /> : <FaSortDown />}
          </button>
        </div>

        <div className="flex items-center w-32 mb-4 cursor-pointer border p-1 mr-2 rounded-lg" onClick={handleMetamaskConnectAndStoreUserData}>Fetch latest</div>
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>First name</th>
              <th>Last name</th>
              <th>erc20Balance</th>
              <th>Metamask address</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((rowData) => (
              <tr key={rowData.userId}>
                <td>{rowData.userId}</td>
                <td>{rowData.firstName || rowData.username}</td>
                <td>{rowData.lastName}</td>
                <td>{rowData.erc20Balance}</td>
                <td>{rowData.metamaskAddress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default Leaderboard;
