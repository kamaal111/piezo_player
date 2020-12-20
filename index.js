const { Board, Button, Piezo } = require('johnny-five');

const rememberTheTime = require('./songs/rememberTheTime');

const board = new Board({ port: '/dev/tty.usbmodem143101' });

board.on('ready', () => {
  const activationButton = new Button({ pin: 2, invert: true });
  const bigRedButton = new Button({ pin: 4, invert: false });
  const piezo = new Piezo({ pin: 8, invert: false });

  board.repl.inject({ button: [activationButton, bigRedButton], piezo });

  activationButton.on('press', () => {
    if (piezo.isPlaying) return null;
    piezo.play({
      song: rememberTheTime,
      tempo: 100,
    });
  });

  bigRedButton.on('press', () => {
    if (piezo.isPlaying) {
      piezo.noTone();
    }
  });
});
