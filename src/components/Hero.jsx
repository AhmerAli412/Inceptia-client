// import React from 'react'
// import '../components/Hero.css'
// import bg from '../bg.png'
// import {Link} from 'react-router-dom'

// const Hero = () => {
//   return (
//     <div>
//         <div class="wrapper">

// <div class="background-container">
//     <div class="bg-1"></div>
//     <div class="bg-2"></div>

// </div>
// <div class="about-container">
    


// <div class="text-container">
//         <h1 class="animate-bounce duration-1s delay-0s">Inceptia</h1>
//         <p>Unlock a world of play-to-earn. Welcome to Inceptia, where gaming meets blockchain. Level up your NFTs, boost your rewards, and convert Inceptia Coins to ETH. Start gaming, start earning, start now.</p>
//         <Link to="/games">Play Games</Link>
//     </div>



//     <div class="image-container">
//         <img src={bg} alt=""/>
        
//     </div>

   
    
// </div>
// </div>

//     </div>
//   )
// }

// export default Hero





import React from 'react';
import bg from '../bg.png';
import { Link } from 'react-router-dom';
import '../components/Hero.css'

const Hero = () => {
  return (
    <div className="flex items-center heroo  justify-center h-96">
    
      <div className="container mt-36  mx-auto flex ml-20">
        <div className="flex-1  flex mb-20 justify-center items-center">
          <div className="mt-0">
            <h1 className="text-5xl mb-2 animate-bounce duration-1s delay-0s">
              Inceptia
            </h1>
            <p className="text-lg mb-6">
  Dive into the exciting realm of play-to-earn with Inceptia! Discover a fusion of gaming and blockchain where you can level up your NFTs, amplify rewards, and effortlessly convert Inceptia Coins to ETH. Start gaming, start earning – your adventure begins now!
</p>


            <Link
              to="/games"
              className="bg-gradient-to-r  from-green-800 to-green-600 text-white py-2 px-4 rounded-sm   hover:bg-transparent hover:text-black transition  duration-300"
            >
              Play Games
            </Link>
          </div>
        </div>

        <div className="flex-1 flex mb-20 justify-center items-center">
          <img src={bg} alt="" className="w-96 mb-10 h-96 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
