import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getTeamById } from '../../store';


export default function ResultDetail({ result }) {
  const { id, home_club, away_club, home_score, away_score, status } = result;
  const home = useSelector(state => getTeamById(state, home_club));
  const away = useSelector(state => getTeamById(state, away_club));

  const history = useHistory();
  const handleClick = () => {
    history.push(`/results/${id}`);
  }

  return (
    <div className="date_results--detail link" onClick={handleClick}>
      <span className={status === home_club ? 'winner' : ''}>{`${home.name} (${home_score})`}</span>
      {` vs `}
      <span className={status === away_club ? 'winner' : ''}>{`${away.name} (${away_score})`}</span>
    </div>
  )
}
