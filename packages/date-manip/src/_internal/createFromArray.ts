
// eslint-disable-next-line max-params
function createDate(
  y: number,
  m: number,
  d: number,
  h: number,
  minute: number,
  s: number,
  ms: number,
): Date {
  // can't just apply() to create a date:
  // https://stackoverflow.com/q/181348
  let date: Date;
  // the date constructor remaps years 0-99 to 1900-1999
  if (y < 100 && y >= 0) {
    // preserve leap years using a full 400 year cycle, then reset
    date = new Date(y + 400, m, d, h, minute, s, ms);
    if (isFinite(date.getFullYear())) {
      date.setFullYear(y);
    }
  }
  else {
    date = new Date(y, m, d, h, minute, s, ms);
  }

  return date;
}

// eslint-disable-next-line max-params
function createUTCDate(
  y: number,
  m: number,
  d: number,
  h: number,
  minute: number,
  s: number,
  ms: number,
): Date {
  let date: Date;
  // the Date.UTC function remaps years 0-99 to 1900-1999
  if (y < 100 && y >= 0) {
    // preserve leap years using a full 400 year cycle, then reset
    y += 400;
    date = new Date(Date.UTC(y, m, d, h, minute, s, ms));
    if (isFinite(date.getUTCFullYear())) {
      date.setUTCFullYear(y);
    }
  }
  else {
    date = new Date(Date.UTC(y, m, d, h, minute, s, ms));
  }

  return date;
}

// eslint-disable-next-line max-params
export default function createFromArray(input: number[]): Date {
  const utcOffset = input[7];
  const currentDate = new Date();

  // 时区，如东八区：timezoneOffset = -480
  // 内定 utcOffset 为 NaN 表示 utc 时间，undefined 为 本地时间
  const isUTC = Number.isNaN(utcOffset);
  const flag = isUTC ? 'UTC' : '';
  const currentStuffing = [
    currentDate[`get${flag}FullYear`](),
    currentDate[`get${flag}Month`](),
    currentDate[`get${flag}Date`]()
  ];
  let i = 0;
  const array = new Array(7);

  for (; i < 3 && input[i] == null; ++i) {
    array[i] = currentStuffing[i];
  }

  for (; i < 7; i++) {
    array[i] = input[i] == null ? 0 : input[i];
  }

  let day = array[2];
  if (day === 0) {
    day = 1;
  }

  let minute = array[4];
  if (!isUTC && typeof utcOffset === 'number') {
    minute -= utcOffset + currentDate.getTimezoneOffset();
  }

  return (isUTC ? createUTCDate : createDate)(
    array[0],
    array[1],
    day,
    array[3],
    minute,
    array[5],
    array[6]
  );
}
