// index.js

const { Board, Button, Piezo } = require('johnny-five');
const board = new Board({ port: '/dev/tty.usbmodem143101' });

board.on('ready', () => {
  const button = new Button(2);
  const piezo = new Piezo(8);

  board.repl.inject({ button, piezo });

  button.on('down', () => {
    piezo.play({
      song: [
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
      ],
      tempo: 100,
    });
  });
});
