'use strict';

class Level {

  constructor(level){
    return this.levelSelector(level);
  }

  levelSelector(level){ //selects currentLevel data
    if (level === 1){
      return this.levelOne();
    } else if (level === 2) {
      return this.levelTwo();
    } else if (level === 3) {
      return this.levelThree();
    } else if (level === 4) {
      return this.levelFour();
    } else if (level === 5) {
      return this.levelFive();
    } else{
      return this.levelOne();
    }
  }

  levelOne(){
    return {
      columns: 3,
      rows: 3,
      invalidClicks: ["highlighted-red"],
      levelPictures: "./assets/images/pig_troll_sq.jpg",
      levelInstructions: "Click all GREEN tiles to win level.   Color of Death is: RED",
      soundtrack: "./assets/audio/level1.mp3"
    };
  }

  levelTwo() {
    return {
      columns: 4,
      rows: 4,
      invalidClicks: ["highlighted-red",
                      "highlighted-blue"],
      levelPictures: "./assets/images/family_sq.jpg",
      levelInstructions: "Click all GREEN tiles to win level.  Colors of Death are: RED & BLUE",
      soundtrack: "./assets/audio/level2.mp3"
    };
  }

  levelThree() {
    return {
      columns: 5,
      rows: 5,
      invalidClicks: ["highlighted-red",
                      "highlighted-blue",
                      "highlighted-purple"],
      levelPictures: "./assets/images/suprize.jpg",
      levelInstructions: "Click all GREEN tiles to win level.  Colors of Death are: RED, BLUE, & PURPLE",
      soundtrack: "./assets/audio/level3.mp3"

    };
  }

  levelFour() {
    return {
      columns: 8,
      rows: 8,
      invalidClicks: ["highlighted-red",
                      "highlighted-blue",
                      "highlighted-purple",
                      "highlighted-orange"],
      levelPictures: "./assets/images/horsetroll.jpg",
      levelInstructions: "Click all GREEN tiles to win level.  Colors of Death are: RED, BLUE, PURLE, & ORANGE",
      soundtrack: "./assets/audio/level4.mp3"

    };
  }

  levelFive() {
    return {
      columns: 10,
      rows: 10,
      invalidClicks: ["highlighted-red",
                      "highlighted-blue",
                      "highlighted-purple",
                      "highlighted-orange",
                      "highlighted-yellow"],
      levelPictures: "./assets/images/hermagesty.jpg",
      levelInstructions: "Click all GREEN tiles to win level.  Colors of Death are: RED, BLUE, PURLE, ORANGE, & YELLOW.  Best of luck with that, friend.",
      soundtrack: "./assets/audio/level5.mp3"
    };
  }
}

module.exports = Level;
