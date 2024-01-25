// import React, { useState, useEffect } from "react";
// import $ from "jquery";
// import { Link } from "react-router-dom";
// import '../components/Navbar.css'
// // import React from 'react';
// import { SignedIn, SignedOut, SignInButton, SignInWithMetamaskButton, SignUpButton, UserButton, useUser } from '@clerk/clerk-react';

// function Navbar() {
//   const { user } = useUser();
//   const [activeTab, setActiveTab] = useState(null);

//   useEffect(() => {
//     // Set active tab based on current location
//     const path = window.location.pathname.split("/").pop();
//     const target = $(`#navbarSupportedContent ul li a[href="${path}"]`);
//     setActiveTab(target.parent().index());
//   }, []);

//   useEffect(() => {
//     // Initialize responsive navbar animation
//     function test() {
//       const tabsNewAnim = $("#navbarSupportedContent");
//       const selectorNewAnim = tabsNewAnim.find("li").length;
//       const activeItemNewAnim = tabsNewAnim.find(".active");
//       if (!activeItemNewAnim.length) return; // Return if active item is not found
//       const activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
//       const activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
//       const itemPosNewAnimTop = activeItemNewAnim.position();
//       const itemPosNewAnimLeft = activeItemNewAnim.position();
//       $(".hori-selector").css({
//         top: `${itemPosNewAnimTop?.top}px`, // Add the safe navigation operator to check for undefined values
//         left: `${itemPosNewAnimLeft?.left}px`, // Add the safe navigation operator to check for undefined values
//         height: `${activeWidthNewAnimHeight}px`,
//         width: `${activeWidthNewAnimWidth}px`,
//       });
//       $("#navbarSupportedContent").on("click", "li", function (e) {
//         $("#navbarSupportedContent ul li").removeClass("active");
//         $(this).addClass("active");
//         const activeWidthNewAnimHeight = $(this).innerHeight();
//         const activeWidthNewAnimWidth = $(this).innerWidth();
//         const itemPosNewAnimTop = $(this).position();
//         const itemPosNewAnimLeft = $(this).position();
//         $(".hori-selector").css({
//           top: `${itemPosNewAnimTop?.top}px`, // Add the safe navigation operator to check for undefined values
//           left: `${itemPosNewAnimLeft?.left}px`, // Add the safe navigation operator to check for undefined values
//           height: `${activeWidthNewAnimHeight}px`,
//           width: `${activeWidthNewAnimWidth}px`,
//         });
//       });
//     }
  
//     setTimeout(() => {
//       test();
//     });
  
//     $(window).on("resize", function () {
//       setTimeout(() => {
//         test();
//       }, 500);
//     });
  
//     $(".navbar-toggler").click(function () {
//       $(".navbar-collapse").slideToggle(300);
//       setTimeout(() => {
//         test();
//       });
//     });
//   }, []);
  

//   const handleTabClick = (index) => {
//     setActiveTab(index);
//   };

//   return (
//     <nav className="navbar navbar-expand-custom navbar-mainbg">
//       {/* <a className="navbar-brand navbar-logo" href="#">
//         Navbar
//       </a> */}
//       <button
//         className="navbar-toggler"
//         type="button"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <i className="fas fa-bars text-white"></i>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav ml-auto">
//           <div className="hori-selector">
//             <div className="left"></div>
//             <div className="right"></div>
//           </div>
//           <li className={`nav-item ${activeTab === 0 ? "active" : ""}`}>
//             <Link
//               className="nav-link"
//               to="/"
//               onClick={() => handleTabClick(0)}
//             >
//               <i className="fas fa-tachometer-alt"></i>Home
//             </Link>
//           </li>


//           <li className={`nav-item ${activeTab === 1 ? "active" : ""}`}>
//             <Link
//               className="nav-link"
//               to="/profile"
//               onClick={() =>
//                 handleTabClick(1)
//             }
//             >
//               <i className="far fa-user"></i>Profile
//             </Link>
//           </li>




//           <li className={`nav-item ${activeTab === 2 ? "active" : ""}`}>
//             <Link
//               className="nav-link"
//               to="/marketplace"
//               onClick={() => handleTabClick(2)}
//             >
//               <i className="fas fa-cog"></i>Marketplace
//             </Link>
//           </li>


//           <li className={`nav-item ${activeTab === 3 ? "active" : ""}`}>
//   <Link
//     className="nav-link"
//     to="/swapping"
//     onClick={() => handleTabClick(3)}
//   >
//     <i className="fas fa-exchange-alt"></i>Swapping
//   </Link>
// </li>
// <li className={`nav-item ${activeTab === 3 ? "active" : ""}`}>
//   <a
//     className="nav-link"
//     href="https://testnets.opensea.io/account"
//     target="_blank"
//     // onClick={() => handleTabClick(3)}
//   >
//     <i className="fas fa-exchange-alt">OpenSea</i>
//   </a>
// </li>
//           <li className="nav-item b">
//             <Link className="nav-link"
//              to="/claimNFT"
//              >
//               <i className="far fa-envelope"></i>ClaimNFT
//             </Link>
//           </li>

     


          

          




//           <div className="text-container1">
//   <SignedIn className="signed-in">
//   {user && user.web3Wallets && user.web3Wallets.length > 0 && (
//   <div className="flex-container">
//     <div className="address">
//       {user.web3Wallets[0].web3Wallet.substring(0, 8)}
//     </div>
//     <div className="user-account">{/* Add user account content here */}</div>
//   </div>
// )}
//     <UserButton afterSignOutUrl={window.location.href} />
//   </SignedIn>
//   <SignedOut>
//   <SignUpButton mode="modal" providers={["Google"]} />
//     {/* <SignInWithMetamaskButton mode='popup' /> */}
//   </SignedOut>
// </div>




  
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;






// import React, { useState, useEffect } from "react";
// import $ from "jquery";
// import { Link } from "react-router-dom";
// import { ethers } from "ethers";
// import '../components/Navbar.css'
// import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from '@clerk/clerk-react';
// import {
//   inceptiaContractAddress,
//   inceptiaAbi,
//   rewardsContractAddress,
//   rewardsAbi,
// } from "../contract/index";

// function MetamaskForm({ onMetamaskConnect }) {
//   const [metamaskAddress, setMetamaskAddress] = useState('');
//   const [provider, setProvider] = useState(null);
//   const [signer, setSigner] = useState(null);
//   const [rewardContract, setRewardContract] = useState(null);
//   const [inceptiaContract, setInceptiaContract] = useState(null);
//   const [account, setAccount] = useState(null);
//   const [ethBalance, setEthBalance] = useState("");
//   const [erc20Balance, setErc20Balance] = useState("");

 
//   const handleMetamaskConnect = async () => {
//     try {
//       const { ethereum } = window;

//       if (ethereum) {
//         const accounts = await ethereum.request({
//           method: "eth_requestAccounts",
//         });

//         const account = accounts[0];

//         window.ethereum.on("chainChanged", () => {
//           window.location.reload();
//         });

//         window.ethereum.on("accountsChanged", () => {
//           window.location.reload();
//         });

//         const provider = new ethers.providers.Web3Provider(ethereum);
//         const signer = provider.getSigner();
//         const rewardContract = new ethers.Contract(
//           rewardsContractAddress,
//           rewardsAbi,
//           signer
//         );
//         const inceptiaContract = new ethers.Contract(
//           inceptiaContractAddress,
//           inceptiaAbi,
//           signer
//         );

//         setAccount(account);
//         setProvider(provider);
//         setSigner(signer);
//         setRewardContract(rewardContract);
//         console.log(rewardContract);
//         setInceptiaContract(inceptiaContract);

//         // Fetch Ethereum balance here
//         const ethBalance = await provider.getBalance(account);
//         const formattedEthBalance = ethers.utils.formatEther(ethBalance);
//         const ethBalanceWithFourDecimals =
//           parseFloat(formattedEthBalance).toFixed(4);
//         setEthBalance(ethBalanceWithFourDecimals);
//         // Fetch ERC20 token balance here
//         const erc20Balance = await inceptiaContract.balanceOf(account);
//         const erc20BalanceInteger = parseInt(
//           ethers.utils.formatUnits(erc20Balance, 18),
//           10
//         ); // Assuming 18 decimal places
//         setErc20Balance(erc20BalanceInteger);
//       } else {
//         alert("Please install MetaMask");
//       }
//     } catch (error) {
//       console.error("Error connecting wallet:", error);
//     }
//   };

//   console.log(erc20Balance)

//   return (
//     <div>
//       <label>Metamask Address:</label>
//       <input type="text" value={metamaskAddress} readOnly />
     
//       <button onClick={handleMetamaskConnect}>Connect to Metamask</button>
//     </div>
//   );
// }


// function Navbar({erc20Balance}) {
//   const { user } = useUser();
//   const [activeTab, setActiveTab] = useState(null);

//   useEffect(() => {
//     const path = window.location.pathname.split("/").pop();
//     const target = $(`#navbarSupportedContent ul li a[href="${path}"]`);
//     setActiveTab(target.parent().index());
//   }, []);

//   const handleTabClick = (index) => {
//     setActiveTab(index);
//   };

//   console.log(erc20Balance)

//   const handleMetamaskConnect = async (metamaskAddress, erc20Balance) => {
//     fetch('https://inceptia.onrender.com/saveUserData', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         userId: user.id,
//         firstName: user.firstName,
//         lastName: user.lastName,
//         metamaskAddress,
//         erc20Balance,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('User data stored on the server:', data);
//       })
//       .catch((error) => {
//         console.error('Error storing user data:', error);
//       });
//   };








import React, { useState, useEffect } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import { ethers } from "ethers";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from '@clerk/clerk-react';
import { inceptiaContractAddress, inceptiaAbi, rewardsContractAddress, rewardsAbi } from "../contract/index";
import '../components/Navbar.css';
import { ToastContainer, toast } from "react-toastify";

function Navbar() {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState(null);
  const [metamaskAddress, setMetamaskAddress] = useState('');
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [rewardContract, setRewardContract] = useState(null);
  const [inceptiaContract, setInceptiaContract] = useState(null);
  const [account, setAccount] = useState(null);
  const [ethBalance, setEthBalance] = useState("");
  const [erc20Balance, setErc20Balance] = useState("");
  const [isModalOpen, setModalOpen] = useState(true);


  useEffect(() => {
    const path = window.location.pathname.split("/").pop();
    const target = $(`#navbarSupportedContent ul li a[href="${path}"]`);
    setActiveTab(target.parent().index());

    // Check if Metamask is connected
    const isMetamaskConnected = document.cookie.includes("metamaskConnected=true");
    if (isMetamaskConnected) {
      // Metamask is connected, close the modal if open
      closeModal();
    }

    // Check if the modal is closed without connecting Metamask
    const isModalClosed = document.cookie.includes("modalClosed=true");
    if (!isMetamaskConnected && !isModalClosed) {
      openModal();
    }
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const openModal = () => {
   
      setModalOpen(true);
   
  };
  const closeModal = () => {
    setModalOpen(false);

    // Set cookie to indicate that the modal is closed
    document.cookie = "modalClosed=true; max-age=" + 2 * 60 * 60; // 2 hours
  };

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
  

  console.log(erc20Balance)
  console.log(user);

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
  
  return (
    <nav className="navbar navbar-expand-custom navbar-mainbg relative z-20">
     
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className={`nav-item ${activeTab === 0 ? "active" : ""}`}>
            <Link className="nav-link" to="/" onClick={() => handleTabClick(0)}>
              <i className="fas fa-tachometer-alt"></i>Home
            </Link>
          </li>

          <li className={`nav-item ${activeTab === 1 ? "active" : ""}`}>
            <Link className="nav-link" to="/profile" onClick={() => handleTabClick(1)}>
              <i className="far fa-user"></i>Profile
            </Link>
          </li>

          <li className={`nav-item ${activeTab === 2 ? "active" : ""}`}>
            <Link className="nav-link" to="/marketplace" onClick={() => handleTabClick(2)}>
              <i className="fas fa-cog"></i>Marketplace
            </Link>
          </li>

          <li className={`nav-item ${activeTab === 3 ? "active" : ""}`}>
            <Link className="nav-link" to="/about" onClick={() => handleTabClick(2)}>
              <i className="fas fa-cog"></i>About us
            </Link>
          </li>

          {/* <li className="nav-item">
          
           
            <a className="nav-item" onClick={handleMetamaskConnectAndStoreUserData}>Connect to Metamask</a>
          </li> */}
 
        
          <li className={`nav-item ${activeTab === 4 ? "active" : ""}`}>
            <a className="nav-link" href="https://testnets.opensea.io/account" target="_blank">
              <i className="fas fa-exchange-alt">OpenSea</i>
            </a>
          </li>

          <li className="nav-item b">
            <Link className="nav-link" to="/marketplace">
              <i className="far fa-envelope"></i>ClaimNFT
            </Link>
          </li>

          <div className="text-container1">
            <SignedIn className="signed-in">
              <UserButton afterSignOutUrl={window.location.href} />
            </SignedIn>
            <SignedOut>
              <SignUpButton mode="modal" providers={["Google"]} />
            </SignedOut>
          </div>

          

          <div>
          {!metamaskAddress && user &&  (
          <div>
      {isModalOpen && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full ">
            {/* Modal content */}
            <div className="relative bg-bgg rounded-lg shadow">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  MetaMask Coonection
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="default-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
             
              <div className="p-4 md:p-5 space-y-4">
                {/* <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                </p> */}
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                 Please Connect your MetaMask Account 
                </p>
              </div>
              {/* Modal footer */}
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-hide="default-modal"
                  type="button"
                  className="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                   <a className="nav-item" onClick={handleMetamaskConnectAndStoreUserData}>Connect to Metamask</a>
                </button>
              
              </div>
            </div>
          </div>
        </div>
      )}
    
    </div>
    
    )}

    </div>

          <li className="nav-item">
            {/* <MetamaskForm onMetamaskConnect={handleMetamaskConnect} /> */}
          </li>
        </ul>
      </div>
      <ToastContainer />
    </nav>
  );
}

export default Navbar;




