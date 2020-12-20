// index.js

const { Board, Led } = require("johnny-five");
const board = new Board({ port: "/dev/tty.usbmodem14301" });

board.on("ready", () => {
  const led = new Led(13);
  led.blink(500);
});
