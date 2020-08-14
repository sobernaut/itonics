export type Action = {
  type: string,
  payload: any
}

export type Club = {
  id: string,
  name: string,
  stadium: string,
  city: string,
  current_league_position: number,
}

export type Result = {
  home_club: string,
  away_club: string,
  home_score: number,
  away_score: number,
  date: string,
}

export type State = {
  byId: { [id: string] : Result, }
  allIds: string[],
}
