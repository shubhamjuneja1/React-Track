import { useState, useEffect } from 'react';

import ActionButtons from 'components/Game/ActionButtons';
import GameHistory from 'components/Game/GameHistory';
import HealthMeter from "components/Game/HealthMeter";
import { PLAYER_ATTACK_MIN_PERCENTAGE, PLAYER_ATTACK_MAX_PERCENTAGE, 
  MONSTER_ATTACK_MIN_PERCENTAGE, MONSTER_ATTACK_MAX_PERCENTAGE, 
  SPECIAL_ATTACK_MIN_PERCENTAGE, SPECIAL_ATTACK_MAX_PERCENTAGE, 
  SPECIAL_ATTACK_MIN_HEALTH, PLAYER_HEAL_PERCENTAGE, 
  GAME_OVER_HEALTH, ATTACK_KEY, 
  HEAL_KEY, PLAYER_KEY, ENEMY_KEY } from 'components/Game/constants';

const GameArea = (() => {

  const gameState = {
    player: 100,
    enemy: 100,
    started: false
  };

  const historyState = {
    movesLog: []
  };
  
  const getRandomNumber = ((min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  });

  const generateHistoryMessage = ((actionDoneBy, damage, actionType = ATTACK_KEY) => {
    if(actionType == HEAL_KEY) {
      return `Player heals for ${damage}`;
    }
    if(actionDoneBy == PLAYER_KEY) {
      return `Player hits monster for ${damage}`;
    }
    return `Monster hits player for ${damage}`;
  });

  const [currentGameState, updateGameState] = useState(gameState);
  const [currentHistoryState, updateHistoryState] = useState(historyState);

  const updatePlayerHealth = ((health, attackType = ATTACK_KEY) => {
    updateHealth(
      PLAYER_KEY,
      health,
      attackType
    );
    setHistoryMessage(ENEMY_KEY, health, attackType);
  });

  useEffect(() => {
    isGameOver()
  }, [currentGameState.player, currentGameState.player]);

  const updateEnemyHealth = ((health) => {
    updateHealth(
      ENEMY_KEY,
      health,
    );
    setHistoryMessage(PLAYER_KEY, health);
  });

  const setHistoryMessage = ((actionDoneBy, health, attackType) => {
    updateHistoryState(({movesLog}) => (
      {
        movesLog: [
          ...movesLog,
          { message: generateHistoryMessage(actionDoneBy, health, attackType) }
        ]
      }));
  });

  const updateHealth = ((attacker, health) => {
    updateGameState(
      (previousSate) => (
        {
        ...previousSate,
        [attacker]: currentGameState[attacker] + health
      })
    );
  });

  const onAttack = (() => {
    updateEnemyHealth(-getRandomNumber(PLAYER_ATTACK_MIN_PERCENTAGE, PLAYER_ATTACK_MAX_PERCENTAGE));
    updatePlayerHealth(-getRandomNumber(MONSTER_ATTACK_MIN_PERCENTAGE, MONSTER_ATTACK_MAX_PERCENTAGE));
  });

  const isGameOver = (() => {
    if (currentGameState.player < GAME_OVER_HEALTH || currentGameState.enemy < GAME_OVER_HEALTH) {
      onGiveUp();
    }
  });

  const onSpecialAttack = (() => {
    if(currentGameState.player > SPECIAL_ATTACK_MIN_HEALTH) {
      updateEnemyHealth(-getRandomNumber(SPECIAL_ATTACK_MIN_PERCENTAGE, SPECIAL_ATTACK_MAX_PERCENTAGE, "special_attack"));
      updatePlayerHealth(-getRandomNumber(MONSTER_ATTACK_MIN_PERCENTAGE, MONSTER_ATTACK_MAX_PERCENTAGE));
    } else {
      alert("You don't have sufficient health");
    }
  });

  const onHeal = (() => {
    updatePlayerHealth(PLAYER_HEAL_PERCENTAGE, HEAL_KEY);
    updatePlayerHealth(-getRandomNumber(MONSTER_ATTACK_MIN_PERCENTAGE, MONSTER_ATTACK_MAX_PERCENTAGE));
  });

  const onGiveUp = (() => {
    alert("Game Over");
    updateGameState(gameState);
  });

  return (
    <div>
      <ActionButtons
        onAttack={onAttack}
        onGiveUp={onGiveUp}
        onSpecialAttack={onSpecialAttack}
        onHeal={onHeal}
      />
      <GameHistory
        movesLog={currentHistoryState.movesLog}
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
