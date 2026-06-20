import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RoleDice from "./RoleDice";
import { Button, OutLineButton } from "../styled/styled/button";
import Rules from "./Rules";

const GamePlay = () => {

  const [SelectedNumber, setSelectedNumber] = useState();
  const [currentDice, setcurrentDice] = useState(1);
  const [Score, setScore] = useState(0);
  const [error, seterror] = useState();
  const [showRules, setshowRules] = useState(false);


  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };


  const roledice = () => {
    if (!SelectedNumber) {
      seterror("You have Not Selected any Number");
      return;
    }
    
    const randNumber = generateRandomNumber(1, 7);
    setcurrentDice(randNumber);

    if (SelectedNumber === randNumber) {
      setScore((prev) => prev + randNumber);
    }     
    else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };


  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore Score={Score} />
        <NumberSelector
          seterror={seterror}
          error={error}
          SelectedNumber={SelectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roledice={roledice} />
      <div className="btns">
        <OutLineButton onClick={resetScore}>Reset Game</OutLineButton>
        <Button onClick={() => setshowRules((prev) => !prev)}>
          {" "}
          {showRules ? "Hide " : "Show "} Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  padding-top: 70px;
  .top_section {
    display: flex;
    align-items: end;
    justify-content: space-around;
  }
  .btns {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    align-items: center;
  }
`;
