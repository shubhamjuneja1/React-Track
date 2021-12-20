const Button = ({onClickHandler, children, type})=> (
  <button className={`btn btn-${type}`} onClick={onClickHandler}>
    {children}
  </button>
);

export default Button;
