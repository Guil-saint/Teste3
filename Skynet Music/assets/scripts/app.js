var listaPrime = [
    {
        name: "September ends",
        band: "Green Day",
        id: 1,
        pathMusic: "../Skynet Music/assets/songs/Green Day - Wake Me Up When September Ends.mp3",
        pathImage: "https://cadetcall.org/wp-content/uploads/2017/12/green-day-gfb-900x900.jpg"
   },
    {
        name: "All The Small Things",
        band: "Blink 182",
        id: 2,
        pathMusic: "../Skynet Music/assets/songs/Blink 182 - all the small things.mp3",
        pathImage: "https://static.stereogum.com/uploads/2019/05/100000x100000-999-1559309907-compressed.jpg"
    },
    {
        name: "American Jesus",
        band: "Bad Religion",
        id: 3,
        pathMusic: "../Skynet Music/assets/songs/Bad Religion - American Jesus.mp3",
        pathImage: "https://miro.medium.com/max/1000/0*O8G5OvbUUdIFbKbR.jpg"
    },
    {
        name: "This Means War",
        band: "Nickelback",
        id: 4,
        pathMusic: "../Skynet Music/assets/songs/Nickelback - This Means War.mp3",
        pathImage: "https://upload.wikimedia.org/wikipedia/en/f/f9/Nickelback_Here_and_Now_170x170-75.jpg"
    },
    {
        name: "Rock Estrela",
        band: "Leo Jaime",
        id: 5,
        pathMusic: "../Skynet Music/assets/songs/Leo Jaime - Rock Estrela.mp3",
        pathImage: "https://img.discogs.com/Qe2OHaSYk3Biej38qojCZrL_2ls=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-9537970-1482323448-3105.jpeg.jpg"
    },
    {
        name: "Pretty Fly for a White Guy",
        band: "The Offspring",
        id: 6,
        pathMusic: "../Skynet Music/assets/songs/The Offspring - Pretty Fly for a White Guy.mp3",
        pathImage: "https://lastfm.freetls.fastly.net/i/u/ar0/3f16ce16c0ac44c6c48d4deee06fa853.jpg"
    },
    {
        name: "Bad Medicine",
        band: "Bon Jovi",
        id: 7,
        pathMusic: "../Skynet Music/assets/songs/Bon Jovi - Bad Medicine.mp3",
        pathImage: "https://a-static.mlcdn.com.br/618x463/cd-bon-jovi-cross-road-the-best-of-polygram/amusical/7817501961/e710389916897fb5da89e080c4e31623.jpg"
    },
    {
        name: "Song 2",
        band: "Blur",
        id: 8,
        pathMusic: "../Skynet Music/assets/songs/Blur - Song 2.mp3",
        pathImage: "https://static.spin.com/files/2015/04/Blur-Roundtable.jpg"
    }
];

function listandoTeste(listaCurrent) {
    if (listaCurrent) { 
        if(inRandom) {
            listaPrime.forEach(element => {
                listaAll.removeChild(listaAll.childNodes[0]);  
            });
            listRandom.forEach(music => {
                generalListing(listaPrime[music]);
            });
        } else {
            if (myList.length > 1) {
                myList.forEach(element => {
                    listaAll.removeChild(listaAll.childNodes[0]);  
                });
            }
            if(cleanListR) {
                listaPrime.forEach(e => {
                    listaAll.removeChild(listaAll.childNodes[0]);
                });
                cleanListR = false;
            }

            listaPrime.forEach(music => {
                generalListing(music)
            });
        }
    } else {
        if(inRandom) {
            myList.forEach(element => {
                listaAll.removeChild(listaAll.childNodes[0]);  
            });
            listRandom.forEach(music => {
                generalListing(myList[music]);
            });
        } else {
            if(cleanListR) {
                myList.forEach(e => {
                    listaAll.removeChild(listaAll.childNodes[0]);
                });
                cleanListR = false;
            } else {
                listaPrime.forEach(element => {
                    listaAll.removeChild(listaAll.childNodes[0]);  
                });
            }
            if (myList.length > 0) {
                myList.forEach(music => {
                    generalListing(music)
                });
            } else {
                emptyMyList();
            }
        }
        
    }

    function generalListing(music) {
        var linhaM = document.createElement('li');
            linhaM.setAttribute('id', music.id);
            linhaM.innerHTML = `
            ${music.name} - ${music.band}
            `;
            linhaM.addEventListener('click', () => {
                listaCurrent ? confirmChoice(music.id-1) : confirmChoice(music.id);
            });
            listaAll.appendChild(linhaM);
    }
}

function emptyMyList() {
    var linhaM = document.createElement('li');
    linhaM.innerHTML = `
    Sem música :'(
    `;
    listaAll.appendChild(linhaM);
    btnPlayPause.getAttribute('class') == btnDisabled ? null : btnPlayPause.classList.toggle('disabled');
}

listandoTeste(true);

function confirmChoice(params) {
    selecScreen.classList.toggle('visible');
    backdrop.classList.toggle('visible');

    confCancel.replaceWith(confCancel.cloneNode(true));
    confCancel = selecScreen.querySelector('#close-screen');

    confAdd.replaceWith(confAdd.cloneNode(true));
    confAdd = selecScreen.querySelector('#add-list');

    confPlay.replaceWith(confPlay.cloneNode(true));
    confPlay = selecScreen.querySelector('#play-song');
    
    confRemove.replaceWith(confRemove.cloneNode(true));
    confRemove = selecScreen.querySelector('#remove-song');

    confCancel.addEventListener('click', () => {
        selecScreen.classList.toggle('visible');
        backdrop.classList.toggle('visible');
    });

    if(!listCur && myList.length > 0) {
        let playCc = false;
        myList.forEach(song => {
            if (song.pathMusic == track.getAttribute('src') && song.id == params) {
                confRemove.getAttribute('class') == btnDisDang ? confRemove.classList.toggle('disabled') : null;
                playCc = true;
            } else {
                !(confRemove.getAttribute('class') == btnDisDang) && !playCc ? confRemove.classList.toggle('disabled') : null;
            }
        });
    }

    confPlay.addEventListener('click', () => {
        playChoice = true;
        listCur ? listPlaying = true : listPlaying = false;
        searchMyL = true;
        load_track(params);
        track.play();
        btnStop.getAttribute('class') === btnDisabled ? btnStop.classList.toggle('disabled') : null;
        selecScreen.classList.toggle('visible');
        backdrop.classList.toggle('visible');
    });

    confAdd.addEventListener('click', () => {
        myList.push(listaPrime[params]);
        selecScreen.classList.toggle('visible');
        backdrop.classList.toggle('visible');
        playersVer();
    });

    confRemove.addEventListener('click', () => {
        selecScreen.classList.toggle('visible');
        backdrop.classList.toggle('visible');
        let songIndex = 0;
        let foundInex = 0;
        myList.forEach(song => {
            song.id === params ? foundInex = songIndex : songIndex++;
        });
        myList.splice(foundInex, 1);
        listaAll.children[foundInex].remove();
        myList.length == 0 ? emptyMyList() : null;
        lineCurrent();
    });
}

function lineCurrent() {
    let contL = 0;
    myList.forEach(line => {
        line.pathMusic == track.getAttribute('src') ? songIdCur = contL : null;
        contL++;
    });
    playersVer();
}

btnStop.addEventListener('click', () => {
    track.pause();
    track.currentTime = 0;
    initSong = true;
    btnPlayPause.innerHTML = inPlay;
    btnStop.classList.toggle('disabled');
    imgUrl.setAttribute('src', imgIni);
    titleBand.innerHTML = ' --- ';
    titleSong.innerHTML = ' --- ';
    showTime.innerHTML = ' --- / ---';
    btnRandom.getAttribute('class') == btnDisabled ? btnRandom.classList.toggle('disabled') : null;
    stopFull();
    if(inRandom) {
        btnRandom.className = 'btn btn-primary';
        listCur ? btnMy.classList.toggle('disabled') : btnAll.classList.toggle('disabled');
        txtRandomInfo.innerHTML = 'Titulos';
        inRandom = false;
        cleanListR = true;
        listandoTeste(listCur);
        for (x=0; maxR > x; x++) {
            let xCur = Math.floor(Math.random() * maxR);
            listRandom.has(xCur) ? null : x--;
            listRandom.delete(xCur);
        }
    }
});

btnPlayPause.addEventListener('click', playTheSong);

function playTheSong() {
    if (btnPlayPause.innerHTML == inPlay) {
        if (initSong) {
            listCur ? listPlaying = true : listPlaying = false;
            load_track(0);
        }
        track.play();
        btnStop.getAttribute('class') === btnDisabled ? btnStop.classList.toggle('disabled') : null;
        btnPlayPause.innerHTML = inPause;
    } else {
        track.pause();
        btnPlayPause.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    }
}

btnBack.addEventListener('click', () => {
    load_track(songIdCur-1);
    track.play();
});

btnPrev.addEventListener('click', () => {
    load_track(songIdCur+1);
    track.play();
});

btnAll.addEventListener('click', () => {
    btnMy.classList.toggle('disabled');
    btnAll.classList.toggle('disabled');
    confAdd.classList.toggle('disabled');
    confRemove.getAttribute('class') == btnDisDang ? confRemove.classList.toggle('disabled') : null;
    myList.length === 0 && initSong ? btnPlayPause.classList.toggle('disabled') : null; //verificar isso aqui, gera um bug, na troca da lista quando a outra for esvaziada
    myList.length < 2 ? listaAll.removeChild(listaAll.childNodes[0]) : null;
    listCur = true;
    listandoTeste(true);
});

btnMy.addEventListener('click', () => {
    btnMy.classList.toggle('disabled');
    btnAll.classList.toggle('disabled');
    confAdd.classList.toggle('disabled');
    confRemove.classList.toggle('disabled');
    myList.length === 0 && initSong ? btnPlayPause.classList.toggle('disabled') : null;
    listCur = false;
    listandoTeste(false);
});

// function load the track
function load_track(index_no){
    !inRandom && btnRandom.getAttribute('class') == 'btn btn-primary' ? btnRandom.classList.toggle('disabled') : null;
	clearInterval(timer);
    resetDurantion();
    if (inRandom) {
       let conR = 0;
       contR = index_no;
       if(playChoice) {
            if(listCur) {
                listaPrime.forEach(line => {
                    index_no == line.id ? contR = conR : null;
                    conR++;                    
                });
            } else {
                myList.forEach(line => {
                    index_no == line.id ? contR = conR : null;
                    conR++;                    
                });
            }
       }
       listRandom.forEach(line => {
            conR  == contR ? index_no = line : null;
            conR++;
       });
    }
    if (listPlaying) {
        // idFormat(index_no);
        // index_no = idFort;
        track.src = listaPrime[index_no].pathMusic;
        imgUrl.setAttribute('src', listaPrime[index_no].pathImage);
        titleBand.innerHTML = listaPrime[index_no].band;
        titleSong.innerHTML = listaPrime[index_no].name;
    } else {
        playChoice ? idFormat(index_no) : idFort = index_no;
        index_no = idFort;
        playChoice = false;
        track.src = myList[index_no].pathMusic;
        imgUrl.setAttribute('src', myList[index_no].pathImage);
        titleBand.innerHTML = myList[index_no].band;
        titleSong.innerHTML = myList[index_no].name;
    }
    inRandom ? index_no = contR : null;
	songIdCur = index_no;
    track.load();
    playersVer();
    initSong = false;

    btnPlayPause.innerHTML == inPause ? null : btnPlayPause.innerHTML = inPause;
    btnStop.getAttribute('class') === btnDisabled ? btnStop.classList.toggle('disabled') : null;
    
	timer = setInterval(rangeDuration ,1000);
}

function idFormat(idsong) {
    let contIdF = 0;
    if(inRandom) {
        if (listPlaying) {
            listaPrime.forEach(song => {
                song.id == idsong ? idFort = contIdF : null;
                contIdF++
            });
        } else {
            myList.forEach(song => {
                song.id == idsong ? idFort = contIdF : null;
                contIdF++;
            });
        }
       
    }  else if (!listPlaying) {
        myList.forEach(song => {
            song.id == idsong ? idFort = contIdF : null;
            contIdF++;
        });
    }

}

function resetDurantion() {
    barDuration.value = 0;
}

function rangeDuration() {
    let position = 0;
    let time1;
    let time2;

    if (isNaN(track.durantion)) {
        position = track.currentTime * (100 / track.duration);
        barDuration.value = position;
        time1 = track.duration/60;
        time2 = track.currentTime/60;
        showTime.innerHTML = Math.trunc(time1) + ':' + Math.trunc((time1 - Math.trunc(time1))*60) + ' / ' + Math.trunc(time2) + ':' + Math.trunc((time2 - Math.trunc(time2))*60);
    }
}

function playersVer() {
    let tempP = btnPrev.getAttribute('class');
    let tempB = btnBack.getAttribute('class');
    if (songIdCur === 0) {
        if (!listPlaying && myList.length < 2) {
            stopFull();
        } else {
            tempP === btnDisabled ? btnPrev.classList.toggle('disabled') : null;
            tempB === btnDisabled ? null : btnBack.classList.toggle('disabled');
        }
    }  else if (songIdCur === listaPrime.length - 1 && listPlaying === true || songIdCur === myList.length - 1 && listPlaying === false) {
        tempP === btnDisabled ? null : btnPrev.classList.toggle('disabled');
        tempB === btnDisabled ? btnBack.classList.toggle('disabled') : null;
    } else {
        tempP === btnDisabled ? btnPrev.classList.toggle('disabled') : null;
        tempB === btnDisabled ? btnBack.classList.toggle('disabled') : null;
    }
}

function stopFull() {
    let tempP = btnPrev.getAttribute('class');
    let tempB = btnBack.getAttribute('class');
    tempP === btnDisabled ? null : btnPrev.classList.toggle('disabled');
    tempB === btnDisabled ? null : btnBack.classList.toggle('disabled');
}

track.addEventListener('ended', () => {
    if (listPlaying) {
        if (songIdCur < listaPrime.length -1) {
            load_track(songIdCur + 1);
            track.play();
        } else {
            endOrNot();
        }
    } else {
        if (songIdCur < myList.length - 1) {
            load_track(songIdCur + 1);
            track.play();
        }  else {
           endOrNot();
        }
    }
    
});

function endOrNot() {
    track.currentTime = 0;
    btnPlayPause.innerHTML = inPlay;
    btnStop.classList.toggle('disabled');
    initSong = true;
    inRepeat ? playTheSong() : null;
}

btnMuteChange.addEventListener('click', () => {
    if (!inMute) {
        lastValueVol = barVol.value;
        track.volume = 0;
        barVol.value = 0;
        volValue.innerHTML = 0;
        verVol();
        inMute = true;
    } else {
        track.volume = lastValueVol / 100;
        barVol.value = lastValueVol;
        volValue.innerHTML = lastValueVol;
        verVol();
        inMute = false;
    }
    
});

barVol.addEventListener('change', () => {
    volValue.innerHTML = barVol.value;
    track.volume = barVol.value / 100;
    console.log(barVol.value);
    verVol();
});

function verVol() {
    if (barVol.value > 0) {
        barVol.value > 50 ? btnMuteChange.className = 'fa fa-volume-up' : btnMuteChange.className = 'fa fa-volume-down';
        inMute = false;
     } else {
         btnMuteChange.className = 'fa fa-volume-off';
     }
}

barDuration.addEventListener('change', () => {
    durantPosition = track.duration * (barDuration.value / 100);
    track.currentTime = durantPosition;
});

btnRepeat.addEventListener('click', () => {
    if (!inRepeat) {
        inRepeat = true;
        btnRepeat.className = 'btn btn-success';
    } else {
        inRepeat = false;
        btnRepeat.className = 'btn btn-primary';
    }
    
});

btnRandom.addEventListener('click', () => {
    btnRandom.className = 'btn btn-outline-info disabled';
    listCur ? btnMy.classList.toggle('disabled') : btnAll.classList.toggle('disabled');
    txtRandomInfo.innerHTML = 'Titulos em Random, para desativar clique em STOP';
    maxR=0;
    listCur || myList.length == 0 ? maxR = listaPrime.length : maxR = myList.length;
    for (x=0; maxR > x; x++) {
        let xCur = Math.floor(Math.random() * maxR);
        listRandom.has(xCur) ? x-- : null;
        listRandom.add(xCur);
    }
    inRandom = true;
    console.log(listRandom);
    listandoTeste(listCur);
    playTheSong();
});
