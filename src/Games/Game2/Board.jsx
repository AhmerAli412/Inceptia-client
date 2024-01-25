import React, { Component } from "react";
import PropTypes from "prop-types";
import Box from "./Box";
import BoardLogic from "./BoardLogic";
import { ethers } from "ethers";
import {
  rewardsAbi,
  rewardsContractAddress,
  inceptiaAbi,
  inceptiaContractAddress,
} from "../../contract/index";
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer";

class Board extends Component {
  static defaultProps = {
    size: 3,
    onMove: (i, j) => {
      console.log(`Clicked tile ${i},${j}`);
    },
  };

  constructor(props) {
    super(props);
    this.state = this.initialGameState();
    this.state.timer = 60; // Set timer to 60 seconds (adjust as needed)

    this.state.provider = new ethers.providers.Web3Provider(window.ethereum);
    this.state.signer = this.state.provider.getSigner();
    this.state.contract = new ethers.Contract(
      rewardsContractAddress,
      rewardsAbi,
      this.state.signer
    );
    this.state.inceptiaContract = new ethers.Contract(
      inceptiaContractAddress,
      inceptiaAbi,
      this.state.signer
    );

    this.startTimer(); // Start the timer when the game starts
  }

  startTimer = () => {
    this.timerInterval = setInterval(() => {
      if (this.state.timer > 0) {
        this.setState((prevState) => ({ timer: prevState.timer - 1 }));
      } else {
        clearInterval(this.timerInterval);
        this.handleGameLost();
      }
    }, 1000);
  };

  initialGameState = () => {
    this.boardLogic = new BoardLogic(this.props.data || this.props.size);
    return {
      board: this.props.data
        ? this.boardLogic.matrix
        : this.boardLogic.scramble(),
      moves: 0,
      isWin: this.boardLogic.checkWin(),
      balance: "", // Add this line for balance state
      timer: 60, // Add timer to initial state (adjust as needed)
    };
  };



  move = (i, j) => {
    if (this.state.isWin || this.state.timer === 0)
      // Check if game is won or timer is zero
      return;

    if (this.boardLogic.move(i, j)) {
      this.props.onMove(i, j);
      const newMoves = this.state.moves + 1;
      const isWin = newMoves === 5;

      this.setState({
        board: this.boardLogic.matrix,
        moves: newMoves,
        isWin: isWin,
      });

      if (isWin) {
        clearInterval(this.timerInterval); // Stop the timer when the game is won
        setTimeout(() => {
          alert("You have won!");
          this.handleGameWon();
        }, 100);
      }
    }
  };




  //complete
  // move = (i, j) => {
  //   if (this.state.isWin || this.state.timer === 0)
  //     // Check if game is won or timer is zero
  //     return;
  
  //   if (this.boardLogic.move(i, j)) {
  //     this.props.onMove(i, j);
  //     const newMoves = this.state.moves + 1;
  //     const isWin = this.boardLogic.checkWin(); // Check if the board is in the correct order
  
  //     this.setState({
  //       board: this.boardLogic.matrix,
  //       moves: newMoves,
  //       isWin: isWin,
  //     });
  
  //     if (isWin) {
  //       clearInterval(this.timerInterval); // Stop the timer when the game is won
  //       setTimeout(() => {
  //         alert("You have won!");
  //         this.handleGameWon();
  //       }, 100);
  //     }
  //   }
  // };
  



  // handleGameWon = async () => {
  //   try {
  //     console.log(this.state);
  //     const transaction = await this.state.contract.calculateRewards(1, 2);
  //     let bal = parseInt(this.state.balance) + 50;
  //     // this.setState({ balance: ethers.utils.parseEther(bal.toString) });
  //   } catch (error) {
  //     console.error("Error calculating rewards:", error);
  //   }
  // };


  // Example in Game 2 component
  handleGameWon = async () => {
  console.log("Game - userId:", this.props.userId);
  console.log("Game - gameNumber:", this.props.gameNumber);

  try {
    const rewardAmountWei = ethers.utils.parseUnits("1", 0);
    const response = await this.state.contract.calculateRewards(
      rewardAmountWei,
      2
    ); // Use the correct order of parameters
    let bal = parseInt(this.state.balance) + 50;

    // Check if the board is in ascending order
    const isBoardInOrder = this.state.board
      .flat()
      .every((value, index, array) => index === 0 || value >= array[index - 1]);

    if (isBoardInOrder) {
      // Send the win count increment request to the server
      const userId = this.props.userId;
      const winCountResponse = await fetch(
        'https://inceptia.onrender.com/incrementWinCount',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ userId, gameNumber: this.props.gameNumber }),
        }
      );

      const winCountData = await winCountResponse.json();
      console.log("Game - Server Response:", winCountData);
    } else {
      console.log("Game - Board is not in ascending order. Game not won.");
    }
  } catch (error) {
    console.error("Game - Error calculating rewards:", error);
  }
};

 
  
  
  handleGameLost = () => {
    alert("Game lost. Time's up!");
    this.setState(this.initialGameState());
    this.startTimer(); // Restart the timer for a new game
  };

  newGame = () => {
    clearInterval(this.timerInterval); // Stop the timer when starting a new game
    this.setState(this.initialGameState());
    this.startTimer(); // Start the timer for the new game
  };

  getRow = (rowData, j) => {
    return (
      <div key={j}>
        {rowData.map((bNum, i) => (
          <Box key={bNum} boxNumber={bNum} onClick={() => this.move(i, j)} />
        ))}
      </div>
    );
  };

  render() {
    let rows = this.state.board.map(this.getRow);
    let message =
      (this.state.isWin ? "Winner !!! " : "Total ") +
      `Moves: ${this.state.moves}`;
    return (
      <>
      <Navbar/>
      <div className="slider-board">
        {rows}
        <span className="slider-msg">{message}</span>
        <div className="btn-new-game">
          <button onClick={this.newGame}>New Game</button>
        </div>

        {this.state.isWin && this.state.rewards !== null && (
          <div>
            <p>Rewards: {this.state.rewards} INCEPTIA</p>
          </div>
        )}

        <div>
          <p>Time Remaining: {this.state.timer} seconds</p>
        </div>
      </div>
      {/* <Footer/> */}
      </>
    );
  }
}

Board.propTypes = {
  data: PropTypes.array,
  size: PropTypes.number,
  onMove: PropTypes.func,
};

export default Board;