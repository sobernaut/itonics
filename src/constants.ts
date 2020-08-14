const TEAMS  = [
  {"id": 1, "name": "Arsenal", "location": "London (Holloway)", "stadium": "Emirates Stadium", "capacity": "60,704"},
  {"id": 2, "name": "Aston Villa", "location": "Birmingham", "stadium": "Villa Park", "capacity": "42,785"},
  {"id": 3, "name": "Brighton & Hove Albion", "location": "Brighton", "stadium": "Falmer Stadium", "capacity": "30,750"},
  {"id": 4, "name": "Burnley", "location": "Burnley", "stadium": "Turf Moor", "capacity": "21,944"},
  {"id": 5, "name": "Chelsea", "location": "London (Fulham)", "stadium": "Stamford Bridge", "capacity": "40,834"},
  {"id": 6, "name": "Crystal Palace", "location": "London (Selhurst)", "stadium": "Selhurst Park", "capacity": "25,486"},
  {"id": 7, "name": "Everton", "location": "Liverpool (Walton)", "stadium": "Goodison Park", "capacity": "39,414"},
  {"id": 8, "name": "Fulham", "location": "London (Fulham)", "stadium": "Craven Cottage", "capacity": "19,000[6]"},
  {"id": 9, "name": "Leeds United", "location": "Leeds", "stadium": "Elland Road", "capacity": "37,890"},
  {"id": 10, "name": "Leicester City", "location": "Leicester", "stadium": "King Power Stadium", "capacity": "32,312"},
  {"id": 11, "name": "Liverpool", "location": "Liverpool (Anfield)", "stadium": "Anfield", "capacity": "53,394"},
  {"id": 12, "name": "Manchester City", "location": "Manchester", "stadium": "City of Manchester Stadium", "capacity": "55,097"},
  {"id": 13, "name": "Manchester United", "location": "Old Trafford", "stadium": "Old Trafford", "capacity": "74,879"},
  {"id": 14, "name": "Newcastle United", "location": "Newcastle upon Tyne", "stadium": "St James' Park", "capacity": "52,388"},
  {"id": 15, "name": "Sheffield United", "location": "Sheffield", "stadium": "Bramall Lane", "capacity": "32,125"},
  {"id": 16, "name": "Southampton", "location": "Southampton", "stadium": "St Mary's Stadium", "capacity": "32,505"},
  {"id": 17, "name": "Tottenham Hotspur", "location": "London (Tottenham)", "stadium": "Tottenham Hotspur Stadium", "capacity": "62,303"},
  {"id": 18, "name": "West Bromwich Albion", "location": "West Bromwich", "stadium": "The Hawthorns", "capacity": "26,850"},
  {"id": 19, "name": "West Ham United", "location": "London (Stratford)", "stadium": "London Stadium", "capacity": "60,000"},
  {"id": 20, "name": "Wolverhampton Wanderers", "location":	"Wolverhampton", "stadium":	"Molineux Stadium", "capacity":	"32,050"}
];

export const NORMALIZED_TEAM = TEAMS.reduce((res, team) => {
  res.allIds.push(team.id);
  res.byId[team.id] = team;
  return res;
}, { byId: {}, allIds: [] });

export const TEAM_OPTIONS = TEAMS.map(team => ({ label: team.name, value: team.id }));

export const STATE_KEY = 'itonic_league_redux'
