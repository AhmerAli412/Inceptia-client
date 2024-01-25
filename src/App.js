// import React, { useState } from "react";
// import Sidebar from "./components/Sidebar";
// import MemoryGame from "./Games/MemoryGame";
// import Marketplace1 from "./frontend/components/Marketplace1";
// import MainBoard from "./Games/Game2/MainBoard";

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Profile from "./components/Profile";
// import ClaimNFT from "./frontend/components/ClaimNFT";
// import UpdateNFT from "./frontend/components/UpdateNFT";
// import Leaderboard from "./components/Leaderboard";
// import Games from "./components/Games";
// import Faq from "./components/Faq";
// import Pricing from "./components/Pricing";
// import MyPurchases from "./frontend/components/MyPurchases";
// import Swapping from "./frontend/components/Swapping";
// import Game2048 from "./Games/Game2048";
// import Page404 from "./components/Page404";
// import DisplayMintedNFT from "./frontend/components/DisplayMintedNFT";
// import DailyChallenge from "./components/DailyChallenge";
// import AboutUs from "./components/AboutUs";
// import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from '@clerk/clerk-react';

// const App = () => {
//   const [mintedTokenURI, setMintedTokenURI] = useState(null);
//   const { user } = useUser();

//   console.log(user);
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Sidebar />} />
//         <Route path="/memorygame" element={<MemoryGame />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/marketplace" element={<Marketplace1 />} />
//         <Route path="/claimNFT" element={<ClaimNFT />} />
//         <Route path="/updateNFT" element={<UpdateNFT />} />
//         <Route path="/leaderboard" element={<Leaderboard />} />
//         <Route path="/games" element={<Games />} />
//         <Route path="/faq" element={<Faq />} />
//         <Route path="/pricing" element={<Pricing />} />
//         <Route path="/swapping" element={<Swapping />} />
//         <Route path="/board" element={<MainBoard />} />
//         <Route path="/game2048" element={<Game2048 />} />
//         <Route path="/daily" element={<DailyChallenge/>} />
//         <Route path="*" element={<Page404 />} />
//         <Route path="/about" element={<AboutUs/>} />
//         {/* <Routes path="/display" element={<DisplayMintedNFT mintedTokenURI={mintedTokenURI}/>} /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;




import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar";
import MemoryGame from "./Games/MemoryGame";
import Marketplace1 from "./frontend/components/Marketplace1";
import MainBoard from "./Games/Game2/MainBoard";
import Profile from "./components/Profile";
import ClaimNFT from "./frontend/components/ClaimNFT";
import UpdateNFT from "./frontend/components/UpdateNFT";
import Leaderboard from "./components/Leaderboard";
import Games from "./components/Games";
import Faq from "./components/Faq";
import Pricing from "./components/Pricing";
import MyPurchases from "./frontend/components/MyPurchases";
import Swapping from "./frontend/components/Swapping";
import Game2048 from "./Games/Game2048";
import Page404 from "./components/Page404";
import DisplayMintedNFT from "./frontend/components/DisplayMintedNFT";
import DailyChallenge from "./components/DailyChallenge";
import AboutUs from "./components/AboutUs";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from '@clerk/clerk-react';

const AppContent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { user } = useUser();

  useEffect(() => {
    setIsAuthenticated(!!user?.id);
  }, [user]);

  const redirectToHome = () => {
    if (!isAuthenticated) {
    }
    return <Navigate to="/" />;
  };

  return (
    <Routes>
      <Route path="/" element={<Sidebar />} />
      <Route path="/memorygame" element={isAuthenticated ? <MemoryGame /> : redirectToHome()} />
      <Route path="/profile" element={isAuthenticated ? <Profile /> : redirectToHome()} />
      <Route path="/marketplace" element={isAuthenticated ? <Marketplace1 /> : redirectToHome()} />
      <Route path="/claimNFT" element={isAuthenticated ? <ClaimNFT /> : redirectToHome()} />
      <Route path="/updateNFT" element={isAuthenticated ? <UpdateNFT/> : redirectToHome()} />
      <Route path="/leaderboard" element={isAuthenticated ? <Leaderboard /> : redirectToHome()} />
      <Route path="/games" element={isAuthenticated ? <Games /> : redirectToHome()} />
      <Route path="/faq" element={isAuthenticated ? <Faq /> : redirectToHome()} />
      <Route path="/pricing" element={isAuthenticated ? <Pricing /> : redirectToHome()} />
      <Route path="/swapping" element={isAuthenticated ? <Swapping /> : redirectToHome()} />
      <Route path="/board" element={isAuthenticated ? <MainBoard /> : redirectToHome()} />
      <Route path="/game2048" element={isAuthenticated ? <Game2048 /> : redirectToHome()} />
      <Route path="/daily" element={isAuthenticated ? <DailyChallenge /> : redirectToHome()} />
      <Route path="*" element={<Page404 />} />
      <Route path="/about" element={isAuthenticated ? <AboutUs /> : redirectToHome()} />
    </Routes>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      {/* <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable /> */}
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
