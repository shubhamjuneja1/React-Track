const GameHistory = ({movesLog}) => (
  <ul className="border border-primary list-group">
    <span className="font-weight-bold">HISTORY</span>
    {
      movesLog.map((log, index) => {
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

export default GameHistory;
