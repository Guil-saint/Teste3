var listaAll =  document.querySelector('#lista-musica');
var btnAll = document.querySelector('#btn-allMusic');
var btnMy = document.querySelector('#btn-myMusic');
var btnStop = document.querySelector('#btn-stop');
var btnPlayPause = document.querySelector('#btn-play-pause');
var btnBack = document.querySelector('#btn-backward');
var btnPrev = document.querySelector('#btn-forward');
var imgUrl = document.querySelector('.imageUrl');
var selecScreen = document.querySelector('#choicePlay');
var titleBand = document.querySelector('.band-info');
var titleSong = document.querySelector('.song-info');

var confCancel = selecScreen.querySelector('#close-screen');
var confAdd = selecScreen.querySelector('#add-list');
var confPlay = selecScreen.querySelector('#play-song');
var confRemove = selecScreen.querySelector('#remove-song');

var inPlay = '<i class="fa fa-play" aria-hidden="true"></i>';
var inPause = '<i class="fa fa-pause" aria-hidden="true"></i>';
var imgIni = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNkoPTlwRCUZTbGBAdVQOvB07atgfB7wPVHw&usqp=CAU';

let track = document.createElement('audio');
var songIdCur = 0;
var myList = [];
var listCur = true;
var searchMyL = true;
var playCur = true;
var initSong = true;
var listPlaying = true;