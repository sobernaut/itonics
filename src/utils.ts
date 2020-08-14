function appendZero(val) {
  return val < 10 ? `0${val}` : val;
}

export function formatDate() {
  const newDate = new Date();

  return `${newDate.getFullYear()}-${appendZero(newDate.getMonth() + 1)}-${appendZero(newDate.getDate())}`;
}


export function objectifyQuery(query) {
  return query.replace('?', '').split('&').reduce((res, s) => {
    const [query, value] = s.split('=');
    res[query] = value;
    return res;
  }, {});
}
