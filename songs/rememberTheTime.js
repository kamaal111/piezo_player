const doYouRemember = [
  ['D#3', 1 / 2],
  ['F3', 1 / 2],
  ['G#3', 1 / 4],
  ['A#3', 1 / 4],
  ['A#3', 1 / 2],
];
const endOfLine = [null, 1 / 2];
const whenWeFellInLove = [
  ['F3', 1 / 2],
  ['G#3', 1 / 2],
  ['A#3', 1 / 2],
  ['C4', 1 / 2],
  ['C4', 1 / 4],
  ['A#3', 1 / 2],
];
const weWereSoYoungAndInnocentThen = [
  ['F3', 1 / 2],
  ['G#3', 1 / 2],
  ['C4', 1 / 2],
  ['C4', 1 / 2],
  ['C4', 1 / 2],
  ['A#3', 1 / 4],
  ['G#3', 1 / 4],
  ['F3', 1 / 4],
  ['G#3', 1 / 2],
];
const howItAllBegan = [
  ['F3', 1 / 2],
  ['G#3', 1 / 2],
  ['A#3', 1 / 2],
  ['C4', 1 / 4],
  ['A#3', 1 / 4],
];

module.exports = [
  ...doYouRemember,
  endOfLine,
  ...whenWeFellInLove,
  endOfLine,
  ...weWereSoYoungAndInnocentThen,
  endOfLine,
  ...doYouRemember,
  endOfLine,
  ...howItAllBegan,
  endOfLine,
];
