import React, { useState } from "react";
import styled from "styled-components";
const RoleDice = ({ currentDice, roledice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roledice}>
        <img src={`/images/cubess/dice_${currentDice}.png`} alt="Dice" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 48px;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;
