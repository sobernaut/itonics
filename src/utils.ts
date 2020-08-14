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

export function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function getItem(key) {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : undefined;
}

export function throttle(cb, delay) {
  let enable = true;
  return () => {
    if (!enable) return;
    enable = false;
    cb.apply(this, arguments);
    setTimeout(() => enable = true, delay);
  }
}
