const SubTab = ({data, onClickHandler, active}) => {
  const activeClass = active ? 'active' : 'inactive';

  return (
    <>
      <a
        className={`${activeClass}`}
        onClick={() => onClickHandler(data.id)}
      >{data.name}</a>
      { active && data.content }
    </>
  );
}

export default SubTab;
