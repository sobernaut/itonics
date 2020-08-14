import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

import { SelectInpt } from '../../lib';
import ResultDetail from './ResultDetail';
import { objectifyQuery } from '../../utils';
import { TEAM_OPTIONS } from '../../constants';
import { ASCENDING, DESCENDING, getResultsByDate } from '../../store';


export default function ResultsList() {
  const location = useLocation();
  const objectified = objectifyQuery(location.search);
  const [sortOrder, setSortOrder] = useState(DESCENDING);
  const [selectedTeam, setSelectedTeam] = useState(objectified['team']);
  const [dates, results] = useSelector((state) => getResultsByDate(state, { sortOrder, selectedTeam }));
  let history = useHistory();


  return (
    <div>
      <div className="filters">
        <div>
          <p className="filter_title">Sort By Date</p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <SortButton value={sortOrder} onChange={setSortOrder} id={ASCENDING} label="ASC" />
            <SortButton value={sortOrder} onChange={setSortOrder} id={DESCENDING} label="DESC" />
          </div>
        </div>
        <div>
          <p className="filter_title">Sort By Team</p>
          <SelectInpt value={selectedTeam} onChange={(_, team) => setSelectedTeam(team)} options={TEAM_OPTIONS} />
          <div style={{ position: 'absolute' }} onClick={() => selectedTeam && setSelectedTeam(undefined)}>
            {`${selectedTeam ? 'Reset Team' : ''}`}
          </div>
        </div>
        <button onClick={() => history.push('/results/new')}>Add New Result</button>
      </div>
      {dates.length ? dates.map(date => {
        const data = results[date];
        return (
          <div className="date_results" key={date}>
            <div>{date}</div>
            {data.map(d => <ResultDetail key={d.id} result={d} />)}
          </div>
        )
      }) : <div className="body"><p>NO RESULTS !!</p></div>}
    </div>
  );
}

function SortButton({ value, onChange, id, label }) {
  return <span onClick={() => onChange(id)} className={value === id ? 'selected_filter' : ''}>{label}</span>
}
