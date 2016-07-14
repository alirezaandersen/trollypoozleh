'use strict';
import $ from 'jQuery';
import Grid from './grid';
import Level from './level';
let classToggler = require('./helpers.js');
const events = require('events');
const gameLifeCycle = new events.EventEmitter();

export default class Game {
  constructor(columns, rows) {
    this.columns = columns;
    this.rows = rows;
    this.colorsArray = ["highlighted-green",
                        "highlighted-red",
                        "highlighted-blue",
                        "highlighted-purple",
                        "highlighted-yellow",
                        "highlighted-orange"];
    this.currentLevel = 1;
    this.levelData = new Level(this.currentLevel).data; //sets level of rows and columns
    this.grid = new Grid({columns: this.levelData.columns, rows: this.levelData.rows});
    this.lives = this.resetLives();
    this.interval = null;
    this.clicks = 1;
    this.totalScore = 1;
  }

  scoreTracker(){
    console.log('number of clicks' + ' = ' + this.clicks);
    const livesSelector = document.querySelector('#clicks-galada');
    if(livesSelector){
      livesSelector.innerHTML = "Score " + this.clicks;
    }
    return this.clicks++;
  }

  levelTracker(){
    console.log("this.currentLevel = " + this.currentLevel);
    const currentLevelSelector = document.querySelector('#level-galada');
    if(currentLevelSelector){
      currentLevelSelector.innerHTML = "Level " + this.currentLevel;
    }
  }

  scoreBoard(){
    this.scoreTracker();
    this.levelTracker();
    this.totalScore ++;
  }

  resetLives(){
    var newLives = [ "troll1", "troll2", "troll3" ];
    const newLivesSelector = document.querySelector('#lives-galada');
    if(newLivesSelector){
      newLivesSelector.innerHTML = "Lives " + newLives.length;
    }
    return newLives;
  }

  callbackToChangeClickState(e, game){
    let el = e.target;
    classToggler(el, game, gameLifeCycle);
  }

  setupEvents(callback){
    let self = this;
    $('.game-table').on('click', 'td', function(e){
      self.scoreBoard();
      return callback(e, self);
    });
    gameLifeCycle.on("end-game", function(outcome) {
      console.log(outcome);
      self.levelTracker();
      self.handleOutcome(outcome);
      self.restart();
    });
  }

  handleOutcome(outcome) {
    if (outcome === "win") {
      this.currentLevel++;
      $('#winGameModal').show();
    } else {
      $('#loseGameModal').show();
      this.playAgain();
    }
  }

  playAgain(){
    this.lives = this.resetLives();
    if (confirm("Well, you managed to loose.... Wanna try again?") === true) {
        //do nothing stay on currentLevel
    } else {
        this.currentLevel = 1;
    }
  }

  start(levelData = null){
    this.grid.buildGrid(levelData);
    const initialScoreSelector = document.querySelector('#clicks-galada');
    if(initialScoreSelector) {
      initialScoreSelector.innerHTML = "Score: " + 0 ;
    }
    const levelImageSelector = document.querySelector('.level-image');
    if(levelImageSelector) {
      levelImageSelector.src = this.levelData.levelPictures;
    }
    this.interval = setInterval(this._assignClasses(), 500);
    this.setupEvents(this.callbackToChangeClickState);
  }

  restart() {
    this.end();
    this.start(this.levelData);

  }

  end() {
    clearInterval(this.interval);
    this.clicks = 1;
    this.clearEvents();
    this.levelData = new Level(this.currentLevel).data;
    $('.game-table').remove();
  }

  clearEvents() {
    gameLifeCycle.removeAllListeners('end-game');
  }

  isInvalidClick(el) {
    return this.levelData.invalidClicks.includes(el.className);
  }

  _assignClasses() {
  	let self = this;
    return function() {
      var number = Math.floor((Math.random() * self.colorsArray.length));
      var cell = self.grid.cellArray[Math.floor(Math.random() * self.grid.cellArray.length)];
      var id = cell.id;
      var colors = self.colorsArray[number];
      $("td" +"#" + id).attr('class', colors);
      console.log("going");
    };
  }
}

module.exports = Game;
