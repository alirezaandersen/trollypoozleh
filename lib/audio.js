'use strict';

export class Audio{
  static load(file){

    //check if audio tag already exists
    var audio = document.getElementById('soundtrack');
    if(!audio){
      //<audio></audio>
      audio = document.createElement('audio');
      audio.id = 'soundtrack';
      audio.loop = true;
      document.body.appendChild(audio);
    }

    //assumes file === levelData
    if(file && typeof(file) === 'object'){
      file = file.soundtrack; //so we set file to levelData.soundtrack
    }

    audio.src = file || './assets/audio/level1.mp3';

    audio.play();
  }
}

module.exports = Audio;
