import Button from 'components/Button/Button.js';

const ActionButtons = ((props) => {
  return(
    <div>
      <Button
        text='Attack'
        onClickHandler={props.playerAttack}
        className="btn btn-primary"
      />
      <Button
        text='Special Attack'
        onClickHandler={props.playerSpecialAttack}
        className="btn btn-info"
      />
      <Button
        text='Heal'
        onClickHandler={props.playerHeal}
        className="btn btn-success"
      />
      <Button
        text='Give Up'
        onClickHandler={props.playerGiveUp}
        className="btn btn-danger"
      />
    </div>
  );
});

export default ActionButtons;
