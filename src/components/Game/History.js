const History = (props) => {
  return (
    <ul className="border border-primary list-group">
      <span className="font-weight-bold">HISTORY</span>
      {
        props.historyState.movesLog.map((log, index) => {
          return (
            <li
              className="list-group-item"
              key={index}
            >
              {log.message}
            </li>
          );
        })
      }
    </ul>
  );
};

export default History;
