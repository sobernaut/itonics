import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { LineInput } from '../../lib';
import { formatDate } from '../../utils';
import { VALIDATOR, FORM, INPUTS } from './constants';
import { Result, getResultById, addResult, editResult } from '../../store';


const DEFAULT_STATE: Result = {
  home_club: '1',
  away_club: '2',
  home_score: 0,
  away_score: 0,
  date: formatDate(),
}

export default function AddResult() {
  const { resultId } = useParams();
  const defaultData = useSelector(state => getResultById(state, resultId));
  const isEdit = Boolean(defaultData);
  const [result, setResult] = useState<Result>(() => defaultData || DEFAULT_STATE);
  const [error, setErrors] = useState<{ [key: string]: boolean }>({});
  const dispatch = useDispatch();
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    let errors = {};
    for (const i of Object.keys(VALIDATOR)) {
      const validation = VALIDATOR[i];
      const val = result[i];

      if ((val === null || val === undefined) || (validation !== 'required' && typeof val !== validation)) {
        errors[i] = true;
      }
    }

    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }

    if (isEdit) dispatch(editResult(result));
    else dispatch(addResult(result));
    history.push('/results');
  }

  function handleChange(key, val) {
    if (error[key]) {
      const newErr = { ...error };
      delete newErr[key];
      setErrors(newErr);
    }
    setResult({ ...result, [key]: val })
  }

  return (
    <div>
      <h2 className="center">{`${isEdit ? 'Edit' : 'Add New'} Result`}</h2>
      <form onSubmit={handleSubmit}>
        {FORM.map((item) => {
          const { label, name, placeholder, input, ...rest } = item;
          const INPUT = INPUTS[input];

          return (
            <LineInput
              {...rest}
              key={name}
              name={name}
              Input={INPUT}
              label={label}
              error={error[name]}
              value={result[name]}
              onChange={handleChange}
              placeholder={placeholder}
            />
          )
        })}
        <button type="submit">{`${isEdit ? 'Edit' : 'Add'} Result`}</button>
      </form>
    </div>
  )
}


