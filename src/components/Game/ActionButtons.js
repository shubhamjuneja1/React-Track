import Button from 'components/Button/Button.js';

const ActionButtons = ({onAttack, onSpecialAttack, onHeal, onGiveUp}) => (
  <>
    <Button
      onClickHandler={onAttack}
      type="primary">
        Attack
    </Button>
    <Button
      onClickHandler={onSpecialAttack}
      type="info">
        Special Attack
    </Button>
    
    <Button
      onClickHandler={onHeal}
      type="success">
        Heal
    </Button>
    
    <Button
      onClickHandler={onGiveUp}
      type="danger">
        Give Up
    </Button>
  </>
);

export default ActionButtons;
