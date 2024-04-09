let pmp = 1, ss = 0, cnt = 1, cnts, rgtc = 0, lstn, lfta = ['homeb'], arr = [], darr = [], nsa = [], num, i, j; let rgta = [], sb2co = 0, sb2c = "grey", psc = 1, k;
for (i = 0; i < 45; i++) {
    let slsongInfoDiv = document.querySelector('.si' + `${i + 1}`);
    slsongInfoDiv.addEventListener('click', () => {
        if (sb2co === 0) {
            osb2();
        }
        ss = 1;
        nsa = [];
        darr = [];
        document.querySelector('.niq').style.display = 'none';
        playmusicsi(slsongInfoDiv);
    });
}
for (i = 1; i <= 3; i++) {
    let subfolderContainer = document.querySelector('#sfc' + `${i}`);
    let tfc = parseInt(subfolderContainer.childNodes[3].childNodes[3].textContent);
    for (j = 1; j <= tfc*2; j=j+2) {
        let songInfoDiv = document.querySelector('.sfc' + `${i}` + 'f').childNodes[j];
        songInfoDiv.addEventListener('click', () => {
            ss = 0;
            fc = parseInt(document.getElementById('scount').textContent);
            cnts = lfta[lfta.length - 1];
            nsa = [];
            darr = [];
            rndma();
            if (sb2co === 0) {
                osb2();
            }
            sc = parseInt(songInfoDiv.childNodes[1].textContent);
            nsd();
            playmusic(songInfoDiv);
        });
    }
    subfolderContainer.addEventListener('click', () => {
        subfolderCover = subfolderContainer.childNodes[1];
        subfolderName = subfolderContainer.childNodes[3].childNodes[1].textContent;
        fileCount = subfolderContainer.childNodes[3].childNodes[3].textContent;
        if (subfolderContainer.id !== lfta[lfta.length - 1]) {
            document.getElementById('home').style.display = 'none';
            document.getElementById('srchd').style.display = 'none';
            document.getElementById('sd').style.display = 'block';
            lfta.push(subfolderContainer.id);
            if (rgtc === 0) {
                rgta = [];
            }
            document.getElementById('fldrname').textContent = subfolderName;
            document.getElementById('scount').textContent = fileCount;
            document.getElementById('fvcv').style.backgroundImage = subfolderCover.style.backgroundImage;
            for (let sf = 1; sf <= 3; sf++) {
                let sfcnt = document.querySelector('.sfc' + `${sf}` + 'f');
                if ((`${subfolderContainer.id}` + 'f') === sfcnt.className) {
                    sfcnt.style.display = 'block';
                } else {
                    sfcnt.style.display = 'none';
                }
            }
        }
    });
}
i = 0;
let homeb = document.getElementById('homeb');
homeb.addEventListener('click', function () {
    if ('homeb' !== lfta[lfta.length - 1]) {
        document.getElementById('srchd').style.display = 'none';
        document.getElementById('sd').style.display = 'none';
        document.getElementById('home').style.display = 'block';
        lfta.push('homeb');
        if (rgtc === 0) {
            rgta = [];
        }
    }
});
function osb2() {
    document.getElementById('ocg').style.fill = '#1db954';
    document.getElementById('sb2').style.width = '22.632%';
    document.getElementById('sb2').style.minWidth = '280px';
    document.getElementById('main').style.marginLeft = '0px';
    document.getElementById('top').style.gap = '8px';
    document.getElementById('sb2c').style.paddingLeft = '16px';
    document.getElementById('sb2c').style.paddingRight = '16px';
    sb2c = "green";
    scrltxt();
}
let sidebar2 = document.getElementById('sidebar2');
sidebar2.addEventListener('click', function () {
    sb2co = 1;
    if (sb2c === "grey") {
        osb2();
    } else {
        document.getElementById('ocg').style.fill = 'rgb(179, 179, 179)';
        document.getElementById('sb2').style.width = '0%';
        document.getElementById('sb2').style.minWidth = '0px';
        document.getElementById('main').style.marginLeft = '8px';
        document.getElementById('top').style.gap = '0px';
        document.getElementById('sb2c').style.paddingLeft = '0px';
        document.getElementById('sb2c').style.paddingRight = '0px';
        sb2c = "grey";
    }
});

let libraryb = document.querySelector('.lib');
libraryb.addEventListener('click', function () {
    if (document.getElementById('sb').style.width == '72px') {
        var sbd = document.getElementsByClassName('sbd');
        for (var i = 0; i < sbd.length; i++) {
            sbd[i].style.display = 'flex';
        }
        document.querySelector('.srchflt').style.display = 'flex';
        document.querySelector('.lh').style.paddingLeft = '0px';
        document.getElementById('library').style.paddingLeft = '12px';
        document.getElementById('library').style.paddingRight = '12px';
        document.getElementById('sb').style.width = '25%';
        document.getElementById('sb').style.minWidth = '280px';
    } else {
        var sbd = document.getElementsByClassName('sbd');
        for (var i = 0; i < sbd.length; i++) {
            sbd[i].style.display = 'none';
        }
        document.querySelector('.srchflt').style.display = 'none';
        document.querySelector('.lh').style.paddingLeft = '8px';
        document.getElementById('library').style.paddingLeft = '4px';
        document.getElementById('library').style.paddingRight = '4px';
        document.getElementById('sb').style.width = '72px';
        document.getElementById('sb').style.minWidth = '72px';
    }
});

let viewtype = document.getElementById('viewtype');
viewtype.addEventListener('click', function () {

    var list = document.querySelector('.list');
    var grid = document.querySelector('.grid');
    var sfcontainer = document.querySelector('.subfolder-details');
    var sfsinfo = document.getElementsByClassName('sfsinfo');
    var items = document.getElementsByClassName('sfcontainer');
    var itemimgs = document.getElementsByClassName('sfc');
    var sfcurrentStyle = window.getComputedStyle(sfcontainer).flexDirection;
    if (sfcurrentStyle === 'column-reverse') {
        document.getElementById('vt').textContent = 'Grid';
        grid.style.display = 'flex';
        list.style.display = 'none';
        sfcontainer.style.flexDirection = 'row-reverse';
        for (var i = 0; i < items.length; i++) {
            items[i].style.flexDirection = 'column';
            itemimgs[i].style.marginRight = '0px';
            sfsinfo[i].style.display = 'none';
        }
        sfcontainer.style.flexWrap = 'wrap';

    } else {
        document.getElementById('vt').textContent = 'List';
        grid.style.display = 'none';
        list.style.display = 'flex';
        sfcontainer.style.flexDirection = 'column-reverse';
        for (var i = 0; i < items.length; i++) {
            items[i].style.flexDirection = 'row';
            itemimgs[i].style.marginRight = '10px';
            sfsinfo[i].style.display = 'flex';
        }
        sfcontainer.style.flexWrap = 'nowrap';
    }
});
function playmusicsi(snginf) {
    if (snginf) {
        let song = {
            title: snginf.querySelector('#sltitle').textContent,
            artist: snginf.querySelector('#slartist').textContent,
            album: snginf.querySelector('#slalbum').textContent,
            cover: snginf.querySelector('#slcover').style.backgroundImage
        };
        updateSongDetails(song);
        audioPlayer.src = snginf.classList[1];
        audioPlayer.play();
        playBtn.style.backgroundImage = 'url(assets/paus.png)';
    }
}
let fc, sc;
function updateSongDetails(song) {
    var divs = document.querySelectorAll('.artist1');
    divs.forEach(function (div) {
        div.parentNode.removeChild(div);
    });
    let sb2album = document.getElementById('album');
    let sb2Title = document.getElementById('title');
    let sb2Artist = document.getElementById('artist');
    let sb2cover = document.getElementById('cover');
    let barTitle = document.getElementById('title2');
    let barArtist = document.getElementById('artist2');
    let barcover = document.getElementById('cover2');

    sb2Title.textContent = song.title || 'Unknown Title';
    scrltxt();
    sb2Artist.textContent = song.artist || 'Unknown Artist';
    sb2album.textContent = song.album || 'Unknown Album';

    sb2cover.style.backgroundImage = song.cover;

    barTitle.textContent = song.title || 'Unknown Title';
    barArtist.textContent = song.artist || 'Unknown Artist';
    barcover.style.backgroundImage = song.cover;

    let songArtist = song.artist.trim();

    let artists = songArtist.split(/,|\/|&/);

    let artsinfo = document.getElementById("artsinfo");

    artists.forEach(function (artist) {

        let artistDiv = document.createElement("div");

        artistDiv.classList.add("artist1");

        artistDiv.textContent = artist.trim();

        artsinfo.appendChild(artistDiv);
    });
}

function scrltxt() {
    const title = document.getElementById('title');
    const cover = document.getElementById('cover');
    const actlwidth = cover.offsetWidth;
    const textWidth = title.scrollWidth;
    title.style.setProperty('--text-width', `-${textWidth - actlwidth}px`);
    const duration = (textWidth - actlwidth) / 3;
    title.style.animation = `scrollText ${duration}s linear infinite`;
}
function updatenxtinq(song) {
    let niqTitle = document.getElementById('ntitle');
    let niqArtist = document.getElementById('nartist');
    let niqcover = document.getElementById('ncover');

    niqTitle.textContent = song.title || 'Unknown Title';
    niqArtist.textContent = song.artist || 'Unknown Artist';
    niqcover.style.backgroundImage = song.cover;
}

let ninfo = document.getElementById('ninfo');
ninfo.addEventListener('click', function () {
    nextBtn.click();
});

function playmusic(snginf) {
    if (snginf) {
        let song = {
            title: snginf.querySelector('#ltitle').textContent,
            artist: snginf.querySelector('#lartist').textContent,
            album: snginf.querySelector('#lalbum').textContent,
            cover: snginf.querySelector('#lcover').style.backgroundImage
        };
        updateSongDetails(song);
        nsd();
        if (sc !== nsc) {
            darr.push(sc);
        }
        audioPlayer.src = snginf.classList[1];

        audioPlayer.addEventListener('canplay', function () {
            audioPlayer.play();
        });

        playBtn.style.backgroundImage = 'url(assets/paus.png)';
    }
}

let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');
let shuffle = document.getElementById('shuffle');
let repeat = document.getElementById('repeat');

let sflc = 'grey';
shuffle.addEventListener('click', function () {
    if (sflc === 'grey') {
        document.querySelector('.shuffle').style.fill = '#1db954';
        sflc = 'green';
    } else {
        document.querySelector('.shuffle').style.fill = 'rgb(179,179,179)';
        sflc = 'grey';
    }
    nsd();
});

let rptc = 'grey', odn = 't';
repeat.addEventListener('click', function () {
    if (rptc === 'grey') {
        document.querySelector('.repeat').style.fill = '#1db954';
        rptc = 'green';
    } else {
        if (odn === 't') {
            document.querySelector('.one').style.display = 'flex';
            odn = 'f';
        } else {
            document.querySelector('.one').style.display = 'none';
            document.querySelector('.repeat').style.fill = 'rgb(179,179,179)';
            rptc = 'grey';
            odn = 't';
        }
    }
    nsd();
});

let gpb = document.querySelector('.gpb');
gpb.addEventListener('click', function () {
    fc = parseInt(document.getElementById('scount').textContent);
    cnts = lfta[lfta.length - 1];
    ss = 0;
    nsa = [];
    darr = [];
    rndma();
    if (sb2co === 0) {
        osb2();
    }
    sc = 1;
    playmusic(document.querySelector('.' + `${cnts}` + 'fs' + `${sc}`));
    nsd();
});
let prevsng;
prevBtn.addEventListener('click', function () {
    if (ss === 0) {
        if (darr.length > 1) {
            nsa.push(darr.pop());
            sc = darr.pop();
            playmusic(document.querySelector('.' + `${cnts}` + 'fs' + `${sc}`));
        }
        nsd();
    }
});
let nsc, nextsng;
nextBtn.addEventListener('click', function () {
    if (ss === 0) {
        pmp = 1;
        if (nsa.length > 0) {
            nsc = nsa.pop();
            sc = nsc;
            nspm(sc);
        } else {
            if (rptc === 'green') {
                if (sflc === 'grey') {
                    if (sc === fc) {
                        sc = 1;
                    } else {
                        sc = sc + 1;
                    }
                    nspm(sc);
                } else {
                    sc = nsc;
                    nspm(sc);
                }
            } else {
                if (sc !== fc) {
                    if (sflc === 'grey') {
                        sc = sc + 1;
                        nspm(sc);
                    } else {
                        if (cz()) {
                        } else {
                            sc = nsc;
                            nspm(sc);
                        }
                    }
                } else {
                    if (sflc !== 'grey') {
                        if (cz()) {
                        } else {
                            sc = nsc;
                            nspm(sc);
                        }
                    }
                }
            }
        }
        nsd();
    }
});
function nspm(sc) {
    playmusic(document.querySelector('.' + `${cnts}` + 'fs' + `${sc}`));
}
function rndma() {
    arr = [];
    for (i = 1; i <= fc; i++) {
        do {
            num = Math.floor(Math.random() * fc) + 1;
        } while (arr.includes(num));
        arr[i] = num;
    }
}
function rndm() {
    for (k = 1; k <= fc; k++) {
        if (arr[k] === sc) {
            arr[k] = 0;
            break;
        }
    }
    if (cn() !== 0) {
        nsc = cn();
    }
}
function cn() {
    for (i = 1; i <= fc; i++) {
        if (arr[i] !== 0) {
            return arr[i];
        }
    }
    return 0;
}
function cz() {
    for (i = 1; i <= fc; i++) {
        if (arr[i] !== 0) {
            return 0;
        }
    }
    return 1;
}

function nsd() {
    nsc = sc;
    let niq = document.querySelector('.niq');
    niq.style.display = 'flex';
    if (nsa.length > 0) {
        nsc = nsa[nsa.length - 1];
    } else {
        if (rptc === 'green') {
            if (sflc === 'grey') {
                if (nsc === fc) {
                    nsc = 1;
                } else {
                    nsc = nsc + 1;
                }
            } else {
                if (cz()) {
                    rndma();
                }
                rndm();
            }
        } else {
            if (sflc === 'grey') {
                if (nsc !== fc) {
                    nsc = nsc + 1;
                } else {
                    niq.style.display = 'none';
                }
            } else {
                if (cz()) {
                    niq.style.display = 'none';
                } else {
                    rndm();
                }
            }
        }
    }

    let nsxtsng = document.querySelector('.' + `${cnts}` + 'fs' + `${nsc}`);
    if (nsxtsng) {
        let nxtsngd = {
            title: nsxtsng.querySelector('#ltitle').textContent,
            artist: nsxtsng.querySelector('#lartist').textContent,
            cover: nsxtsng.querySelector('#lcover').style.backgroundImage,
        };
        updatenxtinq(nxtsngd);
    }
}

let searchb = document.getElementById('searchb');
searchb.addEventListener('click', function () {
    if ('searchb' !== lfta[lfta.length - 1]) {
        document.getElementById('sd').style.display = 'none';
        document.getElementById('home').style.display = 'none';
        document.querySelector('.srchd').style.display = 'block';
        lfta.push('searchb');
        if (rgtc === 0) {
            rgta = [];
        }
    }
});

let audioPlayer = document.getElementById('audioPlayer');
let playBtn = document.getElementById('playBtn');
let volumeControl = document.getElementById('volumeControl');
let progressBar = document.getElementById('progressBar');

let currentTimeDisplay = document.getElementById('currentTime');
let durationDisplay = document.getElementById('duration');
var prangeTrack = document.getElementById('prange-track');
var vrangeTrack = document.querySelector('.vrange-track');

audioPlayer.addEventListener('timeupdate', function () {
    let progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress;
    prangeTrack.style.width = progress + '%';
    currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
});

volumeControl.addEventListener('input', function () {
    audioPlayer.volume = volumeControl.value / 100;
    var percent = (volumeControl.value - volumeControl.min) / (volumeControl.max - volumeControl.min) * 96.5;
    vrangeTrack.style.width = percent + '%';
});

playBtn.addEventListener('click', function () {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playBtn.style.backgroundImage = 'url(assets/paus.png)';
    } else {
        audioPlayer.pause();
        playBtn.style.backgroundImage = 'url(assets/play.png)';
    }
});

volumeControl.addEventListener('input', function () {
    audioPlayer.volume = volumeControl.value / 100;
});

audioPlayer.addEventListener('timeupdate', function () {
    let progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.value = progress;
    currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime);
});

progressBar.addEventListener('input', function () {
    let seekTime = (progressBar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;

});

audioPlayer.addEventListener('loadedmetadata', function () {
    durationDisplay.textContent = formatTime(audioPlayer.duration);
});

audioPlayer.addEventListener('ended', () => {
    if (ss === 0) {
        if (odn !== 't') {
            nspm(sc);
        } else {
            nextBtn.click();
        }
        pmp = 0;
    }
});

navigator.mediaSession.setActionHandler('previoustrack', () => {
    prevBtn.click();
});

navigator.mediaSession.setActionHandler('nexttrack', () => {
    nextBtn.click();
});

navigator.mediaSession.setActionHandler('play', () => {
    playBtn.click();
});

function formatTime(time) {
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return minutes + ':' + seconds;
} let jsmediatags = window.jsmediatags;

let folderSearchInput = document.getElementById('folderSearchInput');
folderSearchInput.addEventListener('input', function () {
    let searchTerm = folderSearchInput.value.toLowerCase();
    let subfolderContainers = document.querySelectorAll('.sfcontainer');

    subfolderContainers.forEach(function (container) {
        let subfolderName = container.querySelector('.sfsinfo .sbd').textContent.toLowerCase();
        if (subfolderName.includes(searchTerm)) {
            container.style.display = 'flex';
        } else {
            container.style.display = 'none';
        }
    });
});
let srchInput = document.getElementById('searchInput');
srchInput.addEventListener('input', function () {
    let searchTerm = srchInput.value.toLowerCase();
    let songContainers = document.querySelectorAll('#sinfo');

    songContainers.forEach(function (container) {
        let songTitle = container.querySelector('#sltitle').textContent.toLowerCase();
        let songArtist = container.querySelector('#slartist').textContent.toLowerCase();
        let songAlbum = container.querySelector('#slalbum').textContent.toLowerCase();
        if (songTitle.includes(searchTerm) || songArtist.includes(searchTerm) || songAlbum.includes(searchTerm)) {
            container.style.display = 'flex';
        } else {
            container.style.display = 'none';
        }
    });
});

let libSearchButton = document.getElementById('libsearch');
let searchFolder = document.getElementById('searchFolder');

libSearchButton.addEventListener('click', function () {
    searchFolder.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function () {
    var stickyDiv = document.querySelector('.stky');
    var gpbDiv = document.querySelector('.gpb');
    var scrollDiv = document.querySelector('#sd');
    function updatePosition() {
        var currentOffset = stickyDiv.getBoundingClientRect().top;
        if (currentOffset <= 55) {
            stickyDiv.classList.add('sticky');
            gpbDiv.style.transform = 'translateX(80px)';
        } else {
            stickyDiv.classList.remove('sticky');
            gpbDiv.style.transform = 'translateX(0)';
        }
    }
    scrollDiv.addEventListener('scroll', updatePosition);
});

let lft = document.getElementById('lft');
lft.addEventListener('click', function () {
    if (lfta.length > 1) {
        rgta.push(lfta.pop());
        rgtc = 1;
        document.getElementById(lfta.pop()).click();
        rgtc = 0;
    }
});

let rgt = document.getElementById('rgt');
rgt.addEventListener('click', function () {
    if (rgta.length > 0) {
        lstn = rgta.pop();
        rgtc = 1;
        document.getElementById(lstn).click();
        rgtc = 0;
    }
});