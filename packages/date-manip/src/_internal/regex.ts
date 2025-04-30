export const BASIC_ISO_REGEX = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

export const EXTENDED_ISO_REGEX = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

// eslint-disable-next-line max-len
// export const COMPAT_NON_ISO_REGEX = /^\s*((?:\d\d[-/]\d\d|W\d\d[-/]\d|W\d\d|\d\d\d|\d\d)[-/](?:\d{6}|\d{4}))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)\s*([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

export const ISO_TIMES_REGEX = [
  /(\d\d):(\d\d):(\d\d)\.(\d+)/, // 'HH:mm:ss.SSSS'
  /(\d\d):(\d\d):(\d\d),(\d+)/, // 'HH:mm:ss,SSSS'
  /(\d\d):(\d\d):(\d\d)/, // 'HH:mm:ss'
  /(\d\d):(\d\d)/, // 'HH:mm'
  /(\d\d)(\d\d)(\d\d)\.(\d+)/, // 'HHmmss.SSSS'
  /(\d\d)(\d\d)(\d\d),(\d+)/, // 'HHmmss,SSSS'
  /(\d\d)(\d\d)(\d\d)/, // 'HHmmss'
  /(\d\d)(\d\d)/, // 'HHmm'
  /(\d\d)/ // 'HH'
];

export const TZ_REGEX = /(Z)|([+-]\d\d)(?::?(\d\d))?/;

export const ISO_DATES_REGEX = [
  /(\d{4})-(\d\d)-(\d\d)/, // 'YYYY-MM-DD'
  /(\d{4})-(\d\d)/, // 'YYYY-MM'
  /(\d{4})(\d\d)(\d\d)/, // 'YYYYMMDD'
  /(\d{4})(\d\d)/, // 'YYYYMM'
  /(\d{4})/ // 'YYYY'
];
