import { TEAM_OPTIONS } from '../../constants';
import { TextInput, NumberInput, DateInput, SelectInpt } from '../../lib';

export const INPUTS = {
  'TextInput': TextInput,
  'NumberInput': NumberInput,
  'DateInput': DateInput,
  'SelectInpt': SelectInpt,
}

export const VALIDATOR = {
  home_club: 'string',
  away_club: 'string',
  home_score: 'number',
  away_score: 'number',
  date: 'required',
}

export const FORM = [
  { name: 'home_club', input: 'SelectInpt', label: 'Home Team', placeholder: 'Enter home team', options: TEAM_OPTIONS },
  { name: 'home_score', input: 'NumberInput', label: 'Home Score', placeholder: 'Enter home team score' },
  { name: 'away_club', input: 'SelectInpt', label: 'Away Team', placeholder: 'Enter away team', options: TEAM_OPTIONS },
  { name: 'away_score', input: 'NumberInput', label: 'Away Score', placeholder: 'Enter away team score' },
  { name: 'date', input: 'DateInput', label: 'Date' },
]
