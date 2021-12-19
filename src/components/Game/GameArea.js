import { useState } from 'react';

import ActionButtons from 'components/Game/ActionButtons';
import History from 'components/Game/History';
import HealthMeter from "components/Game/HealthMeter";

const PLAYER_ATTACK_MIN_PERCENTAGE = 1;
const PLAYER_ATTACK_MAX_PERCENTAGE = 10;
const MONSTER_ATTACK_MIN_PERCENTAGE = 1;
const MONSTER_ATTACK_MAX_PERCENTAGE = 10;
const SPECIAL_ATTACK_MIN_PERCENTAGE = 11;
const SPECIAL_ATTACK_MAX_PERCENTAGE = 20;
const SPECIAL_ATTACK_MIN_HEALTH = 90;
const PLAYER_HEAL_PERCENTAGE = 10;
const GAME_OVER_HEALTH = 0;

const GameArea = (() => {
  const gameState = {
    player: 100,
    enemy: 100,
    started: false
  };

  const historyState = {
    movesLog: []
  };
  
  const randomNumber = ((min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  });

  const historyMessage = ((actionDoneBy, damage, actionType="attack") => {
    if(actionType == "heal") {
      return `Player heals for ${damage}`;
    }
    if(actionDoneBy == "player") {
      return `Player hits monster for ${damage}`;
    }
    return `Monster hits player for ${damage}`;
  });

  const [currentGameState, updateGameState] = useState(gameState);
  const [currentHistoryState, updateHistoryState] = useState(historyState);

  const updatePlayerHealth = ((health, attackType = "attack") => {
    updateHealth(
      "player",
      health,
      attackType
    );
    setHistoryMessage("player", health, attackType);
  });

  const updateEnemyHealth = ((health) => {
    updateHealth(
      "enemy",
      health,
    );
    setHistoryMessage("enemy", health);
  });

  const setHistoryMessage = ((actionDoneBy, health, attackType) => {
    updateHistoryState((previousSate) => (
      {
        movesLog: [
          ...previousSate.movesLog,
          { message: historyMessage(actionDoneBy, health, attackType) }
        ]
      }));
  });

  const updateHealth = ((attacker, health) => {
    updateGameState(
      (previousSate) => (
        {
        ...previousSate,
        [attacker]: currentGameState[attacker] + health
      }), 
      () => {
        isGameOver();
      }
    );
  });

  const playerAttackHandler = (() => {
    updateEnemyHealth(-randomNumber(PLAYER_ATTACK_MIN_PERCENTAGE, PLAYER_ATTACK_MAX_PERCENTAGE));
    updatePlayerHealth(-randomNumber(MONSTER_ATTACK_MIN_PERCENTAGE, MONSTER_ATTACK_MAX_PERCENTAGE));
  });

  const isGameOver = (() => {
    if (currentGameState.player < GAME_OVER_HEALTH || currentGameState.enemy < GAME_OVER_HEALTH) {
      giveUpHandler();
    }
  });

  const playerSpecialAttackHandler = (() => {
    if(currentGameState.player > SPECIAL_ATTACK_MIN_HEALTH) {
      updateEnemyHealth(-randomNumber(SPECIAL_ATTACK_MIN_PERCENTAGE, SPECIAL_ATTACK_MAX_PERCENTAGE, "special_attack"));
      updatePlayerHealth(-randomNumber(MONSTER_ATTACK_MIN_PERCENTAGE, MONSTER_ATTACK_MAX_PERCENTAGE));
    } else {
      alert("You don't have sufficient health");
    }
  });

  const healPlayerHandler = (() => {
    updatePlayerHealth(PLAYER_HEAL_PERCENTAGE, "heal");
    updatePlayerHealth(-randomNumber(MONSTER_ATTACK_MIN_PERCENTAGE, MONSTER_ATTACK_MAX_PERCENTAGE));
  });

  const giveUpHandler = (() => {
    alert("Game Over");
    updateGameState(gameState);
  });

  return (
    <div>
      <ActionButtons
        playerAttack={playerAttackHandler}
        playerGiveUp={giveUpHandler}
        playerSpecialAttack={playerSpecialAttackHandler}
        playerHeal={healPlayerHandler}
      />
      <History
        historyState={currentHistoryState}
      />
      <HealthMeter 
        name="Player" 
        health={currentGameState.player} 
      />
      <HealthMeter
        name="Monster" 
        health={currentGameState.enemy} 
      />
    </div>
  );
});

export default GameArea;
