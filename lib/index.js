import './main.css';
import Game from './game';
import Config from './config';
import { startModalSetup, winModalSetup, loseModalSetup } from './modals';

let game = new Game(Config.columns, Config.rows);
game.start();

startModalSetup();
winModalSetup();
loseModalSetup();

var startModal = document.getElementById('startModal');

window.onload = function() {
  startModal.style.display = "block";
};
