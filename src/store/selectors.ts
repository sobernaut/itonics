import { createSelector } from 'reselect';


export const ASCENDING = 'sort_results_ascending';
export const DESCENDING = 'sort_results_descending';

const selectParams = name => (_, params) => params[name];
const getTimeStamp = date => new Date(date).getTime();
const groupByDate = data => data.reduce((res, d) => {
  if (res[d.date]) res[d.date].push(d);
  else res[d.date] = [d];
  return res;
}, {});
const getById = schema => (state, id) => state[schema].byId[id] ? { ...state[schema].byId[id], id } : null;


export const getResultById = getById('results');
export const getTeamById = getById('teams');

const getTeams = state => state.teams.allIds.map((id) => getTeamById(state, id));
const getResults = state => state.results.allIds.map((id) => getResultById(state, id));
const getResultByTeam = (list, teamId) => teamId ? list.filter(l => l.home_club === teamId || l.away_club === teamId) : list;


export const getResultsByDate = createSelector(
  getResults,
  selectParams('sortOrder'),
  selectParams('selectedTeam'),
  (list, sortOrder, selectedTeam) => {
    const group = groupByDate(getResultByTeam(list, selectedTeam));
    const dates = Object.keys(group);

    switch(sortOrder) {
      case ASCENDING: {
        const sorted = dates.sort((a, b) => getTimeStamp(a) - getTimeStamp(b));
        return [sorted, group];
      }
      case DESCENDING: {
        const sorted = dates.sort((a, b) => getTimeStamp(b) - getTimeStamp(a));
        return [sorted, group];
      }
      default:
        return [];
    }
  }
)

function editResult(res, team, { w = 0, l = 0, d = 0, pts = 0 }: { [key: string]: number }) {
  if (res[team]) {
    res[team].pld += 1;
    res[team].l += l;
    res[team].w += w;
    res[team].d += d;
    res[team].pts += pts;
  }
  else res[team] = { pld: 1, w, l, d, pts }
  return res;
}

function getPoint(status, home) {
  if (!status) return [{ d:1, pts:1 }, { d:1, pts:1 }]
  if (status === home) return [{ w:1, pts:3 }, { l:1 }];
  return [{ l:1 }, { w:1, pts:3 }];
}

function makeTeamPoints(results) {
  return results.reduce((res, l) => {
    const { home_club, away_club, status } = l;
    const [home_pt, away_pt] = getPoint(status, home_club);

    return { ...editResult(res, home_club, home_pt), ...editResult(res, away_club, away_pt) };
  }, {});
}


const pointsSelector = createSelector(
  getResults,
  makeTeamPoints,
)

export const getTeamsByRank = createSelector(
  pointsSelector,
  getTeams,
  (teamWithPoints, teams) => {
    const allTeams = teams.map((t) => {
      const found = teamWithPoints[t.id];
      if (found) return { ...found, teamId: t.id, name: t.name };
      return { teamId: t.id, name: t.name, w: 0, l: 0, pld: 0, pts: 0 }
    })

    return allTeams.sort((a, b) => {
      const sortByPoints = b.pts - a.pts;
      if (!sortByPoints) {
        const sortByPlayed = b.pld - a.pld;
        if (!sortByPlayed) {
          const sortByName = a.name - b.name;
          return sortByName;
        }
        return sortByPlayed;
      }
      return sortByPoints;
    })
  }
);
