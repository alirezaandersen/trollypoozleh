////////////////////////////////////////////
export function startModalSetup(){

  var startModal = document.getElementById('startModal');

  var closeStart = document.getElementsByClassName("closeStart")[0];

  closeStart.onclick = function() {
    startModal.style.display = "none";
  };
}

////////////////////////////////////////////
export function winModalSetup(){
  var winModal = document.getElementById('winGameModal');

  var closeWin = document.getElementsByClassName("closeWinGame")[0];

  closeWin.onclick = function() {
    winModal.style.display = "none";
    resetPonies();
  };
}

////////////////////////////////////////////
export function loseModalSetup(){
  var endModal = document.getElementById('loseGameModal');
  var close = document.getElementsByClassName("closeLoseGame")[0];

  close.onclick = function() {
    endModal.style.display = "none";
    resetPonies();
  };
}

function resetPonies(){
  document.querySelector('.lt3').style.visibility='visible';
  document.querySelector('.lt2').style.visibility='visible';
  document.querySelector('.lt1').style.visibility='visible';
}
module.exports = {startModalSetup, winModalSetup, loseModalSetup};
