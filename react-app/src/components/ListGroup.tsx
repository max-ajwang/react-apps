import { useState } from 'react';

function ListGroup() {
  let footballTeams = [
    'Manchester United',
    'Real Madrid',
    'Barcelona',
    'Manchester City',
  ];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>

      {footballTeams.length === 0 ? (
        <p>No Teams Found</p>
      ) : (
        <ul className="list-group">
          {footballTeams.map((team, index) => (
            <li
              className={
                selectedIndex === index
                  ? 'list-group-item active'
                  : 'list-group-item'
              }
              key={team}
              onClick={() => setSelectedIndex(index)}
            >
              {team}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ListGroup;
