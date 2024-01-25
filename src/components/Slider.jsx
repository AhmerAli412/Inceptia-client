// import React, { useEffect, useState } from "react";
// import "../components/Slider.css";

// const Slider = () => {
//   const images = [
//     "https://bc.imgix.net/banner/a6/68/e9/167929759359439.png?auto=format&q=80&dpr=1&w=320",
//     "https://bc.imgix.net/banner/b7/43/52/167903007661032.png?auto=format&q=80&dpr=1&w=320",
//     "https://bc.imgix.net/banner/b9/20/bd/167903216435116.png?auto=format&q=80&dpr=1&w=320",
//     "https://bc.imgix.net/banner/83/c5/44/166936355032979.png?auto=format&q=80&dpr=1&w=320"
//   ];

//   const [shuffledImages, setShuffledImages] = useState(images);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShuffledImages((prevImages) => {
//         const shuffled = [...prevImages];
//         let currentIndex = shuffled.length;
//         let randomIndex;

//         while (currentIndex !== 0) {
//           randomIndex = Math.floor(Math.random() * currentIndex);
//           currentIndex--;
//           [shuffled[currentIndex], shuffled[randomIndex]] = [
//             shuffled[randomIndex],
//             shuffled[currentIndex],
//           ];
//         }

//         return shuffled;
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="parent">
//       <div className="images-row">
//         {shuffledImages.map((src, index) => (
//           <div className="image11" key={index}>
//             <img src={src} alt="" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;
import React from 'react'

const Slider = () => {
  return (
    <div>
     <div class="w-full mt-12  inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <li>
            <img src="https://bc.imgix.net/banner/a6/68/e9/167929759359439.png?auto=format&q=80&dpr=1&w=320" alt="Facebook" />
        </li>
        <li>
            <img src="https://bc.imgix.net/banner/b7/43/52/167903007661032.png?auto=format&q=80&dpr=1&w=320" alt="Disney" />
        </li>
        <li>
            <img src="https://bc.imgix.net/banner/b9/20/bd/167903216435116.png?auto=format&q=80&dpr=1&w=320" alt="Airbnb" />
        </li>
        <li>
            <img src="https://bc.imgix.net/banner/83/c5/44/166936355032979.png?auto=format&q=80&dpr=1&w=320" alt="Apple" />
        </li>
      
    </ul>
    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
    <li>
            <img src="https://bc.imgix.net/banner/a6/68/e9/167929759359439.png?auto=format&q=80&dpr=1&w=320" alt="Facebook" />
        </li>
        <li>
            <img src="https://bc.imgix.net/banner/b7/43/52/167903007661032.png?auto=format&q=80&dpr=1&w=320" alt="Disney" />
        </li>
        <li>
            <img src="https://bc.imgix.net/banner/b9/20/bd/167903216435116.png?auto=format&q=80&dpr=1&w=320" alt="Airbnb" />
        </li>
        <li>
            <img src="https://bc.imgix.net/banner/83/c5/44/166936355032979.png?auto=format&q=80&dpr=1&w=320" alt="Apple" />
        </li>
      
    </ul>
</div>
    </div>
  )
}

export default Slider