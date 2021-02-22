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
var btnMuteChange = document.querySelector('#volume-icon');
var barVol = document.querySelector('#volume');
var volValue = document.querySelector('.volume-show');
var barDuration = document.querySelector('#duration-slider');
var showTime = document.querySelector('.time-duration');
var btnRepeat = document.querySelector('#btn-repeat');
var btnRandom = document.querySelector('#btn-random');
var txtRandomInfo = document.querySelector('#infoRandom');

var confCancel = selecScreen.querySelector('#close-screen');
var confAdd = selecScreen.querySelector('#add-list');
var confPlay = selecScreen.querySelector('#play-song');
var confRemove = selecScreen.querySelector('#remove-song');

var inPlay = '<i class="fa fa-play" aria-hidden="true"></i>';
var inPause = '<i class="fa fa-pause" aria-hidden="true"></i>';
var imgIni = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNkoPTlwRCUZTbGBAdVQOvB07atgfB7wPVHw&usqp=CAU';
var inMute = false;
var lastValueVol = 0;
var durantPosition = 0;
let timer;
var inRepeat = false;
var inRandom = false;
var listRandom = new Set();

let track = document.createElement('audio');
var songIdCur = 0;
var myList = [];
var listCur = true; //A lista que sendo mostrada atualmente, sendo false para myList
var searchMyL = true;
var playCur = true;
var initSong = true; //Se nenhuma música for selecionada, essa condição manda para tocar a 
                    // primeira linha da lista que esta atualmente aparecendo, após isso a condição
                    //  é desativada, só volta a ser ativada quando apertar STOP
var listPlaying = true; // Indica qual lista esta tocando atualmente. sendo false para myList
var contR; //Contador do Random que pega o index, e devolve seu valor no final
var idFort; //Contador de escolha fora de ordem, transformando id em linha
var cleanListR = false;
var maxR; // Valor total de uma lista, para prencher a lista Random, e fazer sua limpeza, quando finalizada
var playChoice = false; //Quando a musica é escolhida pelo link da lista
var btnDisabled = 'btn btn-primary disabled'; // Variavel para verificar se o botão esta desabilidato
var btnDisDang = 'btn btn-danger';
