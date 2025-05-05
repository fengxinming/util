const UTF8_ACCEPT = 12;
const UTF8_REJECT = 0;
const UTF8_DATA = [
  // The first part of the table maps bytes to character to a transition.
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
  3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
  6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 7, 7,
  10, 9, 9, 9, 11, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,

  // The second part of the table maps a state to a new state when adding a
  // transition.
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  12, 0, 0, 0, 0, 24, 36, 48, 60, 72, 84, 96,
  0, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 24, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 24, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 48, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 48, 48, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 48, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,

  // The third part maps the current transition to a mask that needs to apply
  // to the byte.
  0x7F, 0x3F, 0x3F, 0x3F, 0x00, 0x1F, 0x0F, 0x0F, 0x0F, 0x07, 0x07, 0x07
];


const HEX = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  a: 10,
  A: 10,
  b: 11,
  B: 11,
  c: 12,
  C: 12,
  d: 13,
  D: 13,
  e: 14,
  E: 14,
  f: 15,
  F: 15
};
function hexCodeToInt(char: string, shift: number): number {
  const i = HEX[char];
  return i === void 0 ? 255 : i << shift;
}

export function unescape(str: string): string {
  str = String(str);

  let percentPosition = str.indexOf('%');
  if (percentPosition === -1) {
    return str;
  }

  const { length } = str;
  let decoded = '';
  let last = 0;
  let codepoint = 0;
  let startOfOctets = percentPosition;
  let state = UTF8_ACCEPT;

  while (percentPosition > -1 && percentPosition < length) {
    const high = hexCodeToInt(str[percentPosition + 1], 4);
    const low = hexCodeToInt(str[percentPosition + 2], 0);
    const byte = high | low;
    const type = UTF8_DATA[byte];
    state = UTF8_DATA[256 + state + type];
    codepoint = (codepoint << 6) | (byte & UTF8_DATA[364 + type]);

    if (state === UTF8_ACCEPT) {
      decoded += str.slice(last, startOfOctets);

      decoded += (codepoint <= 0xFFFF)
        ? String.fromCharCode(codepoint)
        : String.fromCharCode(
          (0xD7C0 + (codepoint >> 10)),
          (0xDC00 + (codepoint & 0x3FF))
        );

      codepoint = 0;
      last = percentPosition + 3;
      startOfOctets = str.indexOf('%', last);
      percentPosition = startOfOctets;
    }
    else if (state === UTF8_REJECT) {
      return '';
    }
    else {
      percentPosition += 3;
      if (percentPosition < length && str.charCodeAt(percentPosition) === 37) {
        continue;
      }
      return '';
    }
  }

  return decoded + str.slice(last);
}
