import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from "@clerk/clerk-react";

const DailyChallenge = () => {
  const [gameStats, setGameStats] = useState(null);
  const [error, setError] = useState(null);
  const { user } = useUser();

  useEffect(() => {
    const fetchGameStats = async () => {
      try {
        if (user && user.id) {
          const response = await axios.get(`https://inceptia.onrender.com/fetchGameStats?userId=${user.id}`);
          setGameStats(response.data);
        } else {
          setError('User is not defined.');
        }
      } catch (error) {
        console.error('Error fetching game stats:', error);
        setError('Error fetching game stats. Please try again later.');
      }
    };

    fetchGameStats();
  }, [user]);

  return (
    <div>
     
      {gameStats && (
        <div>
          <h2>Game Stats</h2>
          
          <p>Memory Game: {gameStats.MemoryGame}</p>
          <p>Shuffly: {gameStats.Shuffly}</p>
          <p>Game2048: {gameStats.Game2048}</p>
        </div>
      )}
    </div>
  );
};

export default DailyChallenge;









// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useUser } from '@clerk/clerk-react';

// const DailyChallenge = () => {
//   const [gameStats, setGameStats] = useState(null);
//   const [error, setError] = useState(null);
//   const [challengeCompletion, setChallengeCompletion] = useState(0); // Initial value can be anything
//   const [isChallengeCompleted, setIsChallengeCompleted] = useState(false);
//   const { user } = useUser();

//   useEffect(() => {
//     const fetchGameStats = async () => {
//       try {
//         if (user && user.id) {
//           const response = await axios.get(`https://inceptia.onrender.com/fetchGameStats?userId=${user.id}`);
//           setGameStats(response.data);
//         } else {
//           setError('User is not defined.');
//         }
//       } catch (error) {
//         console.error('Error fetching game stats:', error);
//         setError('Error fetching game stats. Please try again later.');
//       }
//     };

//     fetchGameStats();
//   }, [user]);

//   // Function to calculate games won in the last hour
//   const gamesWonLastHour = () => {
//     if (gameStats && gameStats.timestamp) {
//       const lastHourTimestamp = Date.now() - 3600000; // 1 hour in milliseconds
//       const gameTimestamp = parseInt(gameStats.timestamp, 10);

//       if (gameTimestamp > lastHourTimestamp) {
//         const memoryGameCount = gameStats.gameStats.MemoryGame || 0;
//         const shufflyCount = gameStats.gameStats.Shuffly || 0;
//         const game2048Count = gameStats.gameStats.Game2048 || 0;

//         return memoryGameCount + shufflyCount + game2048Count;
//       }
//     }

//     return 0;
//   };

//   // Check if the challenge is completed
//   useEffect(() => {
//     const totalGamesWon = gamesWonLastHour();

//     if (totalGamesWon >= challengeCompletion + 5) {
//       // Increment challenge completion by 5
//       setChallengeCompletion((prevCompletion) => prevCompletion + 5);
//       // Display completion message
//       setIsChallengeCompleted(true);
//     }
//   }, [gamesWonLastHour, challengeCompletion]);

//   return (
//     <div>
//       {gameStats && (
//         <div>
//           <h2>Game Stats</h2>
//           <p>Memory Game: {gameStats.gameStats.MemoryGame}</p>
//           <p>Shuffly: {gameStats.gameStats.Shuffly}</p>
//           <p>Game2048: {gameStats.gameStats.Game2048}</p>
//           <p>Games won in the last hour: {gamesWonLastHour()}</p>

//           {isChallengeCompleted && (
//             <p style={{ color: 'green', fontWeight: 'bold' }}>
//               Challenge Completed! Congratulations!
//             </p>
//           )}
//         </div>
//       )}

    
//     </div>
//   );
// };

// export default DailyChallenge;











// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useUser } from '@clerk/clerk-react';

// const DailyChallenge = () => {
//   const [gameStats, setGameStats] = useState(null);
//   const [error, setError] = useState(null);
//   const [isChallengeCompleted, setIsChallengeCompleted] = useState(false);
//   const { user } = useUser();

//   useEffect(() => {
//     const fetchGameStats = async () => {
//       try {
//         if (user && user.id) {
//           const response = await axios.get(`https://inceptia.onrender.com/fetchGameStats?userId=${user.id}`);
//           setGameStats(response.data);
//         } else {
//           setError('User is not defined.');
//         }
//       } catch (error) {
//         console.error('Error fetching game stats:', error);
//         setError('Error fetching game stats. Please try again later.');
//       }
//     };

//     fetchGameStats();
//   }, [user]);

//   const gamesWonLastHour = () => {
//     if (gameStats && gameStats.timestamp) {
//       const lastHourTimestamp = Date.now() - 3600000;
//       const gameTimestamp = parseInt(gameStats.timestamp, 10);

//       if (gameTimestamp > lastHourTimestamp) {
//         const memoryGameCount = gameStats.gameStats.MemoryGame || 0;
//         const shufflyCount = gameStats.gameStats.Shuffly || 0;
//         const game2048Count = gameStats.gameStats.Game2048 || 0;

//         return memoryGameCount + shufflyCount + game2048Count;
//       }
//     }

//     return 0;
//   };

//   useEffect(() => {
//     const logChallengeCompletion = async () => {
//       try {
//         await axios.post('https://inceptia.onrender.com/logChallengeCompletion', {
//           userId: user.id,
//           challenge_datetime: new Date().toISOString(),
//         });
  
//         console.log('Challenge completion logged successfully');
//         setIsChallengeCompleted(true);
//       } catch (error) {
//         console.error('Error logging challenge completion:', error);
//       }
//     };
  
//     const totalGamesWon = gamesWonLastHour();
//     const isChallengeCompletedToday = totalGamesWon >= 2;
  
//     console.log('Total games won:', totalGamesWon);
//     console.log('Is challenge completed today:', isChallengeCompletedToday);
//     console.log('Is challenge already completed:', isChallengeCompleted);
  
//     if (isChallengeCompletedToday && !isChallengeCompleted) {
//       console.log('Logging challenge completion...');
//       logChallengeCompletion();
//     }
//   }, [gamesWonLastHour, isChallengeCompleted, user]);
  

//   return (
//     <div>
//       {gameStats && (
//         <div>
//           <h2>Game Stats</h2>
//           <p>Memory Game: {gameStats.gameStats.MemoryGame}</p>
//           <p>Shuffly: {gameStats.gameStats.Shuffly}</p>
//           <p>Game2048: {gameStats.gameStats.Game2048}</p>
//           <p>Games won in the last hour: {gamesWonLastHour()}</p>

//           {isChallengeCompleted && (
//             <p style={{ color: 'green', fontWeight: 'bold' }}>
//               Challenge Completed! Congratulations!
//             </p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DailyChallenge;



// import React, { useEffect, useState } from 'react';
// import { useUser } from "@clerk/clerk-react";
// import moment from 'moment-timezone';

// const DailyChallenge = () => {
//   const [showMessage, setShowMessage] = useState(false);
//   const { user } = useUser();

//   useEffect(() => {
//     const checkWinningCondition = async () => {
//       try {
//         // Ensure user is signed in and user.id is defined
//         if (!user || !user.id) {
//           console.error('User information is not available');
//           return;
//         }

//         const response = await fetch(`https://inceptia.onrender.com/getGameStats?userId=${user.id}`);
//         const result = await response.json();

//         console.log('Fetched game stats:', result);

//         if (response.ok) {
//           const gameStats = result.gameStats;

//           const checkGameType = (gameType) => {
//             if (!gameStats[gameType]) {
//               console.error(`${gameType} data is missing`);
//               return false;
//             }

//             let latestTimestamp;

//             if (gameStats[gameType].latestTimestamp === undefined) {
//               console.warn(`${gameType} latestTimestamp is undefined. Setting it to the current time.`);
//               latestTimestamp = new Date();
//             } else {
//               latestTimestamp = new Date(gameStats[gameType].latestTimestamp);
//             }

//             if (isNaN(latestTimestamp.getTime())) {
//               console.error(`${gameType} latestTimestamp is invalid:`, gameStats[gameType].latestTimestamp);
//               return false;
//             }

//             console.log(`${gameType} latestTimestamp:`, latestTimestamp);

//             // Use moment to compare timestamps consistently
//             const timeThreshold = moment().subtract(10, 'minutes');
//             return gameStats[gameType].count >= 1 && moment(latestTimestamp).isAfter(timeThreshold);
//           };

//           if (checkGameType('MemoryGame') && checkGameType('Shuffly') && checkGameType('Game2048')) {
//             setShowMessage(true);
//             setTimeout(() => {
//               setShowMessage(false);
//             }, 60 * 1000); // Hide message after 1 minute
//           }
//         } else {
//           console.error('Error fetching game stats:', result.message);
//         }
//       } catch (error) {
//         console.error('Error checking winning condition:', error);
//       }
//     };

//     // Check winning condition on component mount
//     checkWinningCondition();
//   }, [user]);

//   return (
//     <div>
//       {showMessage && <div>You have done it!</div>}
//     </div>
//   );
// };

// export default DailyChallenge;
