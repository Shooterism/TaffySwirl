const bytesToUnits = (n) => {
  n = parseInt(n);
  let str = [];

  if (n >= 1024 * 1024 * 1024) cut(1024 * 1024 * 1024, 'GB');
  if (n >= 1024 * 1024) cut(1024 * 1024, 'MB');
  if (n >= 1024) cut(1024, 'kB');
  if (!str.length && n < 1024) cut(1, 'B');

  function cut(v, c) {
    str.push(Math.floor(n / v) + c);
    n = n % v;
  }
  return str.join(' ');
};

export { bytesToUnits };
