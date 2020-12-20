// index.js

const { Board, Button, Piezo } = require('johnny-five');

const board = new Board({ port: '/dev/tty.usbmodem143101' });

const rickRoll = [
  ['C4', 1 / 4],
  ['D4', 1 / 4],
  ['F4', 1 / 4],
  ['D4', 1 / 4],
  ['A4', 1 / 4],
  [null, 1 / 4],
  ['A4', 1],
  ['G4', 1],
  [null, 1 / 2],
  ['C4', 1 / 4],
  ['D4', 1 / 4],
  ['F4', 1 / 4],
  ['D4', 1 / 4],
  ['G4', 1 / 4],
  [null, 1 / 4],
  ['G4', 1],
  ['F4', 1],
  [null, 1 / 2],
];

board.on('ready', () => {
  const activationButton = new Button({ pin: 2, invert: false });
  const bigRedButton = new Button({ pin: 4, invert: false });
  const piezo = new Piezo({ pin: 8, invert: false });

  board.repl.inject({ button: [activationButton, bigRedButton], piezo });

  activationButton.on('press', () => {
    piezo.play({
      song: rickRoll,
      tempo: 100,
    });
  });

  bigRedButton.on('press', () => {
    console.log(Piezo.Notes);
    if (piezo.isPlaying) {
      piezo.noTone();
    }
  });
});
