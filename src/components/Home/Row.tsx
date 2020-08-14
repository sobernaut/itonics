import React from 'react';
import { useHistory } from 'react-router-dom';

function Row({
  teamId = null, name ='TEAM', pld = 'PLD', w = 'W', d = 'D', l = 'L', pos = 'POS', pts = 'PTS'
}) {
  const history = useHistory();
  const handleClick = () => {
    if (!teamId) return;
    history.push(`/results?team=${teamId}`)
  }

  return (
    <div style={{ display: 'flex' }}>
      <span className="league-table--cell">{pos}</span>
      <span onClick={handleClick} className={`league-table--cell large ${teamId ? 'link' : ''}`}>{name}</span>
      <span className="league-table--cell">{pld}</span>
      <span className="league-table--cell">{w}</span>
      <span className="league-table--cell">{l}</span>
      <span className="league-table--cell">{d}</span>
      <span className="league-table--cell">{pts}</span>
    </div>
  )
}

export default Row;
