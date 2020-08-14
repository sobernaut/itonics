import React from 'react';
import { useSelector } from 'react-redux';

import Row from './Row';
import { getTeamsByRank } from '../../store';

export default function Home() {
  const teams = useSelector(getTeamsByRank);
  return (
    <>
      <Row />
      {teams.map((t, idx) => <Row key={t.teamId} pos={idx + 1} {...t} />)}
    </>
  );
}
