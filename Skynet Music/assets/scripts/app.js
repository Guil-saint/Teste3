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
    }
];



function listandoTeste(listaCurrent) {
    if (listaCurrent) {
        if (myList.length > 1) {
            myList.forEach(element => {
                listaAll.removeChild(listaAll.childNodes[0]);  
            });
        }

        listaPrime.forEach(music => {
            var linhaM1 = document.createElement('li');
            linhaM1.setAttribute('id', music.id);
            linhaM1.innerHTML = `
            ${music.name} - ${music.band}
            `;
            linhaM1.addEventListener('click', () => {
                confirmChoice(music.id-1);
            });
            listaAll.appendChild(linhaM1);
        });
    } else {
        listaPrime.forEach(element => {
            listaAll.removeChild(listaAll.childNodes[0]);  
        });
        if (myList.length > 0) {
            myList.forEach(music => {
                var linhaM = document.createElement('li');
                linhaM.setAttribute('id', music.id);
                linhaM.innerHTML = `
                ${music.name} - ${music.band}
                `;
                linhaM.addEventListener('click', () => {
                    confirmChoice(music.id);
                });
                listaAll.appendChild(linhaM);
            });
        } else {
            emptyMyList();
        }
    }
}

function emptyMyList() {
    var linhaM = document.createElement('li');
            linhaM.innerHTML = `
            Sem música :'(
            `;
            listaAll.appendChild(linhaM);
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

    confPlay.addEventListener('click', () => {
        listCur ? listPlaying = true : listPlaying = false;
        searchMyL = true;
        load_track(params);
        track.play();
        btnStop.getAttribute('class') === 'btn btn-primary disabled' ? btnStop.classList.toggle('disabled') : null;
        selecScreen.classList.toggle('visible');
        backdrop.classList.toggle('visible');
    });

    confAdd.addEventListener('click', () => {
        myList.push(listaPrime[params]);
        selecScreen.classList.toggle('visible');
        backdrop.classList.toggle('visible');
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
        // listaAll.removeChild(listaAll.childNodes[foundInex]);
        myList.length == 0 ? emptyMyList() : null;
    });
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
    stopFull();
});

btnPlayPause.addEventListener('click', () => {
    if (btnPlayPause.innerHTML == inPlay) {
        if (initSong) {
            listCur ? listPlaying = true : listPlaying = false;
            load_track(0);
        }
        track.play();
        btnStop.getAttribute('class') === 'btn btn-primary disabled' ? btnStop.classList.toggle('disabled') : null;
        btnPlayPause.innerHTML = inPause;
    } else {
        track.pause();
        btnPlayPause.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    }
});

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
    confRemove.classList.toggle('disabled');
    myList.length === 0 && initSong ? btnPlayPause.classList.toggle('disabled') : null;
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
	// clearInterval(timer);
	// reset_slider();
    if (listPlaying) {
        track.src = listaPrime[index_no].pathMusic;
        imgUrl.setAttribute('src', listaPrime[index_no].pathImage);
        titleBand.innerHTML = listaPrime[index_no].band;
        titleSong.innerHTML = listaPrime[index_no].name;
    } else {
        if (initSong) {
            index_no = 0;
        } else {
            if (searchMyL) {
                let cont = 0;
                myList.forEach(el => {
                    if (index_no === el.id) {
                        index_no = cont;
                    }
                    cont++;
                });
                searchMyL = false;
            }
        }

        track.src = myList[index_no].pathMusic;
        imgUrl.setAttribute('src', myList[index_no].pathImage);
        titleBand.innerHTML = myList[index_no].band;
        titleSong.innerHTML = myList[index_no].name;
    }

	songIdCur = index_no;
    track.load();
    playersVer();
    initSong = false;

    btnPlayPause.innerHTML == inPause ? null : btnPlayPause.innerHTML = inPause;
    btnStop.getAttribute('class') === 'btn btn-primary disabled' ? btnStop.classList.toggle('disabled') : null;
    
	// timer = setInterval(range_slider ,1000);
	// total.innerHTML = All_song.length;
	// present.innerHTML = index_no + 1;
}

function playersVer() {
    let tempP = btnPrev.getAttribute('class');
    let tempB = btnBack.getAttribute('class');
    if (songIdCur === 0) {
        if (!listPlaying && myList.length < 2) {
            stopFull();
        } else {
            tempP === 'btn btn-primary disabled' ? btnPrev.classList.toggle('disabled') : null;
            tempB === 'btn btn-primary disabled' ? null : btnBack.classList.toggle('disabled');
        }
    }  else if (songIdCur === listaPrime.length - 1 && listPlaying === true || songIdCur === myList.length - 1 && listPlaying === false) {
        tempP === 'btn btn-primary disabled' ? null : btnPrev.classList.toggle('disabled');
        tempB === 'btn btn-primary disabled' ? btnBack.classList.toggle('disabled') : null;
    } else {
        tempP === 'btn btn-primary disabled' ? btnPrev.classList.toggle('disabled') : null;
        tempB === 'btn btn-primary disabled' ? btnBack.classList.toggle('disabled') : null;
    }
}

function stopFull() {
    let tempP = btnPrev.getAttribute('class');
    let tempB = btnBack.getAttribute('class');
    tempP === 'btn btn-primary disabled' ? null : btnPrev.classList.toggle('disabled');
    tempB === 'btn btn-primary disabled' ? null : btnBack.classList.toggle('disabled');
}
