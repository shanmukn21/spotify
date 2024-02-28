let lfta = ['homeb'],arr = [], darr = [],nsa=[],num,i, j;let rgta = [],sb2co = 0,sb2c = "grey", psc = 1, k;

let homeb = document.getElementById('homeb');
homeb.addEventListener('click', function () {
    document.getElementById('srchd').style.display = 'none';
    document.getElementById('sd').style.display = 'none';
    document.getElementById('home').style.display = 'block';
    lfta.push('homeb');
    console.log('lfta:', lfta);
    console.log('rgta:', rgta);
    // rgta = [];
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

let selectFolder = document.getElementById('selectFolder');
selectFolder.addEventListener('click', function () {
    document.getElementById('folder-input').click();
});
document.getElementById('folder-input').addEventListener('change', async function () {
    const folderInput = document.getElementById('folder-input');
    const folderDetails = document.getElementById('folder-details');
    folderDetails.innerHTML = '';

    const folders = {};
    for (const file of folderInput.files) {
        if (file instanceof File) {
            const folderName = file.webkitRelativePath.split('/')[0];
            if (!folders[folderName]) {
                folders[folderName] = [];
            }
            folders[folderName].push(file);
        }
    }

    const folderNames = Object.keys(folders).reverse();
    for (const folderName of folderNames) {
        if (folders.hasOwnProperty(folderName)) {

            const subfolderDetailsDiv = document.createElement('div');
            subfolderDetailsDiv.classList.add('subfolder-details');
            folderDetails.appendChild(subfolderDetailsDiv);

            displaySubfolders(folderName, folderInput, subfolderDetailsDiv);
        }
    }
    filesearchd([...folderInput.files]);
});
function filesearchd(songs) {
    let srchDiv = document.querySelector('.srchinfo');
    songs.forEach((song, index) => {
        let slsongInfoDiv = createFileInfoDivfs(song, index + 1);
        srchDiv.appendChild(slsongInfoDiv);
        displaysFileDetails(song, slsongInfoDiv);
    });
    for (let i = 1; i <= songs.length; i++) {
        let divs = document.querySelector('.si' + i);

        divs.addEventListener('click', () => {
            if (sb2co === 0) {
                osb2();
            }
            document.querySelector('.niq').style.display = 'none';
            playmusicsi(divs);
        });

    }
}
function playmusicsi(snginf) {
    if (snginf) {
        let song = {
            title: snginf.querySelector('#sltitle').textContent,
            artist: snginf.querySelector('#slartist').textContent,
            album: snginf.querySelector('#slalbum').textContent,
            cover: snginf.querySelector('#slcover').style.backgroundImage
        };
        updateSongDetails(song);
        // console.log('push:', darr);
        audioPlayer.src = snginf.data;

        audioPlayer.addEventListener('canplay', function () {
            audioPlayer.play();
        });

        playBtn.style.backgroundImage = 'url(assets/paus.png)';
    }
}
function displaysFileDetails(file, fileInfo) {
    let jsmediatags = window.jsmediatags;
    let fileCover = fileInfo.querySelector('#slcover');
    let fileTitle = fileInfo.querySelector('#sltitle');
    let fileArtist = fileInfo.querySelector('#slartist');
    let fileAlbum = fileInfo.querySelector('#slalbum');
    let fileDateAdded = fileInfo.querySelector('#sldateAdded');
    let fileLength = fileInfo.querySelector('#sllength');
    let xhr = new XMLHttpRequest();
    xhr.open("GET", URL.createObjectURL(file), true);
    xhr.responseType = "blob";

    xhr.onload = function () {
        if (xhr.status === 200) {
            let blob = xhr.response;

            jsmediatags.read(blob, {
                onSuccess: function (tag) {
                    if (tag && tag.tags) {
                        fileTitle.textContent = (tag.tags.title || file.name).replace(/\.mp3$/, '');
                        fileArtist.textContent = tag.tags.artist || 'Unknown Artist';
                        fileAlbum.textContent = `${tag.tags.album || 'Unknown Album'}`;
                        fileDateAdded.textContent = `${formatDate(file.lastModifiedDate)}`;

                        getDuration(blob, function (duration) {
                            fileLength.textContent = `${duration}`;
                        });

                        if (tag.tags.picture) {
                            let data = tag.tags.picture.data;
                            let format = tag.tags.picture.format;
                            let base64String = "";
                            for (let i = 0; i < data.length; i++)
                                base64String += String.fromCharCode(data[i]);

                            fileCover.style.backgroundImage = `url(data:${format};base64,${window.btoa(base64String)})`;
                        }
                    } else {
                        fileInfo.remove();
                    }
                },
                onError: function (error) {
                }
            });
        }
    };

    xhr.send();
}
let fc, sc;
function createFileInfoDivfs(file, fileIndex) {
    let fileInfo = document.createElement('div');
    let filepath = file.path || `${file.webkitRelativePath}`;
    fileInfo.data = filepath;
    fileInfo.className = 'si' + `${fileIndex}`;
    fileInfo.id = 'sinfo';

    let fileCS = document.createElement('div');
    fileCS.id = 'slcs';

    let fileCover = document.createElement('div');
    fileCover.id = 'slcover';

    let fileSinfo = document.createElement('div');
    fileSinfo.id = 'slsinfo';

    let fileTitle = document.createElement('p');
    fileTitle.id = 'sltitle';
    fileTitle.setAttribute('alt', 'sltitle');

    let fileArtist = document.createElement('p');
    fileArtist.id = 'slartist';
    fileArtist.setAttribute('alt', 'slartist');

    let fileAlbum = document.createElement('div');
    fileAlbum.id = 'slalbum';
    fileAlbum.setAttribute('alt', 'slalbum');

    let fileDateAdded = document.createElement('div');
    fileDateAdded.id = 'sldateAdded';
    fileDateAdded.setAttribute('alt', 'sldateAdded');

    let fileLength = document.createElement('div');
    fileLength.id = 'sllength';
    fileLength.setAttribute('alt', 'sllength');

    fileSinfo.appendChild(fileTitle);
    fileSinfo.appendChild(fileArtist);
    fileCS.appendChild(fileCover);
    fileCS.appendChild(fileSinfo);
    fileInfo.appendChild(fileCS);
    fileInfo.appendChild(fileAlbum);
    fileInfo.appendChild(fileDateAdded);
    fileInfo.appendChild(fileLength);
    return fileInfo;
}
function createFileInfoDiv(file, fileIndex) {
    let fileInfo = document.createElement('div');
    let filepath = file.path || `${file.webkitRelativePath}`;
    fileInfo.data = filepath;
    fileInfo.className = 's' + `${fileIndex}`;
    fileInfo.id = 'info';

    let fileSerialNumber = document.createElement('div');
    fileSerialNumber.id = 'lserial';
    fileSerialNumber.setAttribute('alt', 'lserial');
    fileInfo.appendChild(fileSerialNumber);

    let fileCS = document.createElement('div');
    fileCS.id = 'lcs';

    let fileCover = document.createElement('div');
    fileCover.id = 'lcover';

    let fileSinfo = document.createElement('div');
    fileSinfo.id = 'lsinfo';

    let fileTitle = document.createElement('p');
    fileTitle.id = 'ltitle';
    fileTitle.setAttribute('alt', 'ltitle');

    let fileArtist = document.createElement('p');
    fileArtist.id = 'lartist';
    fileArtist.setAttribute('alt', 'lartist');

    let fileAlbum = document.createElement('div');
    fileAlbum.id = 'lalbum';
    fileAlbum.setAttribute('alt', 'lalbum');

    let fileDateAdded = document.createElement('div');
    fileDateAdded.id = 'ldateAdded';
    fileDateAdded.setAttribute('alt', 'ldateAdded');

    let fileLength = document.createElement('div');
    fileLength.id = 'llength';
    fileLength.setAttribute('alt', 'llength');

    fileSinfo.appendChild(fileTitle);
    fileSinfo.appendChild(fileArtist);
    fileCS.appendChild(fileCover);
    fileCS.appendChild(fileSinfo);
    fileInfo.appendChild(fileCS);
    fileInfo.appendChild(fileAlbum);
    fileInfo.appendChild(fileDateAdded);
    fileInfo.appendChild(fileLength);
    fileSerialNumber.textContent = `${fileIndex}`;
    return fileInfo;
}
function displayFileDetails(file, fileInfo) {
    let jsmediatags = window.jsmediatags;
    let fileCover = fileInfo.querySelector('#lcover');
    let fileTitle = fileInfo.querySelector('#ltitle');
    let fileArtist = fileInfo.querySelector('#lartist');
    let fileAlbum = fileInfo.querySelector('#lalbum');
    let fileDateAdded = fileInfo.querySelector('#ldateAdded');
    let fileLength = fileInfo.querySelector('#llength');
    let xhr = new XMLHttpRequest();
    xhr.open("GET", URL.createObjectURL(file), true);
    xhr.responseType = "blob";

    xhr.onload = function () {
        if (xhr.status === 200) {
            let blob = xhr.response;

            jsmediatags.read(blob, {
                onSuccess: function (tag) {
                    if (tag && tag.tags) {
                        fileTitle.textContent = (tag.tags.title || file.name).replace(/\.mp3$/, '');
                        fileArtist.textContent = tag.tags.artist || 'Unknown Artist';
                        fileAlbum.textContent = `${tag.tags.album || 'Unknown Album'}`;
                        fileDateAdded.textContent = `${formatDate(file.lastModifiedDate)}`;

                        getDuration(blob, function (duration) {
                            fileLength.textContent = `${duration}`;
                        });

                        if (tag.tags.picture) {
                            let data = tag.tags.picture.data;
                            let format = tag.tags.picture.format;
                            let base64String = "";
                            for (let i = 0; i < data.length; i++)
                                base64String += String.fromCharCode(data[i]);

                            fileCover.style.backgroundImage = `url(data:${format};base64,${window.btoa(base64String)})`;
                        }
                    } else {
                        fileInfo.remove();
                    }
                },
                onError: function (error) {
                }
            });
        }
    };

    xhr.send();
}
function formatDate(inputDate) {

    let dateObj = new Date(inputDate);

    let day = dateObj.getDate();
    let month = dateObj.getMonth() + 1;
    let year = dateObj.getFullYear();

    let formattedDay = (day < 10 ? '0' : '') + day;
    let formattedMonth = (month < 10 ? '0' : '') + month;

    let formattedDate = formattedDay + '/' + formattedMonth + '/' + year;

    return formattedDate;
}
function getDuration(blob, callback) {
    let audio = new Audio();
    audio.src = URL.createObjectURL(blob);

    audio.addEventListener('loadedmetadata', function () {
        let duration = audio.duration;
        audio.remove();

        if (isNaN(duration)) {
            callback('N/A');
        } else {
            callback(formatDuration(duration));
        }
    });

    audio.addEventListener('error', function () {
        audio.remove();
        callback('N/A');
    });
}

function formatDuration(durationInSeconds) {
    let minutes = Math.floor(durationInSeconds / 60);
    let seconds = Math.round(durationInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function formatDurationl(durationInSeconds) {
    let minutes = (durationInSeconds / 60);
    let hours = Math.floor(minutes / 60);
    minutes = Math.floor(minutes % 60);
    return `about ${hours > 0 ? `${hours} hr` : ''} ${minutes} min`
}

function updateSubfolderCover(subfolderCover, mp3File) {
    let jsmediatags = window.jsmediatags;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", URL.createObjectURL(mp3File), true);
    xhr.responseType = "blob";

    xhr.onload = function () {
        if (xhr.status === 200) {
            let blob = xhr.response;

            jsmediatags.read(blob, {
                onSuccess: function (tag) {
                    if (tag.tags.picture) {
                        let data = tag.tags.picture.data;
                        let format = tag.tags.picture.format;
                        let base64String = "";
                        for (let i = 0; i < data.length; i++)
                            base64String += String.fromCharCode(data[i]);
                        subfolderCover.style.backgroundImage = `url(data:${format};base64,${window.btoa(base64String)})`;
                        subfolderCover.data = `data:${format};base64,${window.btoa(base64String)}`;
                    }
                },
                onError: function (error) {
                    console.log(error);
                }
            });
        }
    };

    xhr.send();
}

function displaySubfolders(folderName, folderInput, container) {
    let subfolders = {};
    for (let file of folderInput.files) {
        if (file instanceof File) {
            let filePathParts = file.webkitRelativePath.split('/');
            if (filePathParts.length > 1 && filePathParts[0] === folderName) {
                let subfolderName = filePathParts[1];
                if (!subfolders[subfolderName]) {
                    subfolders[subfolderName] = [];
                }
                subfolders[subfolderName].push(file);
            }
        }
    }
    let cnt = 1;
    for (let subfolderName in subfolders) {
        if (subfolders.hasOwnProperty(subfolderName)) {
            let filesInSubfolder = subfolders[subfolderName];
            // console.log(filesInSubfolder);
            let fileCount = filesInSubfolder.length;
            let subfolderContainer = document.createElement('div');
            subfolderContainer.id = "sfc" + `${cnt++}`;
            subfolderContainer.className = "sfcontainer";
            let subfolderCover = document.createElement('div');
            subfolderCover.className = "sfc";

            let subfoldersinfo = document.createElement('div');
            subfoldersinfo.className = "sfsinfo";
            let subfolderNameElement = document.createElement('p');
            subfolderNameElement.className = 'sbd';
            let subfolderCountElement = document.createElement('p');
            subfolderCountElement.className = 'sbd';
            let subfolderlength = document.createElement('p');
            subfolderlength.className = 'sfl';
            subfolderlength.classList.add('sbd');

            subfolderCover.textContent = ``;
            subfolderNameElement.textContent = `${subfolderName}`;
            subfolderCountElement.textContent = `${fileCount}`;

            subfoldersinfo.appendChild(subfolderNameElement);
            subfoldersinfo.appendChild(subfolderCountElement);
            subfolderContainer.appendChild(subfolderCover);
            subfolderContainer.appendChild(subfoldersinfo);
            subfolderContainer.appendChild(subfolderlength);

            container.appendChild(subfolderContainer);
            let firstMp3File = filesInSubfolder.find(file => file.name.toLowerCase().endsWith('.mp3'));
            updateSubfolderCover(subfolderCover, firstMp3File);

            subfolderContainer.addEventListener('click', () => {
                document.getElementById('home').style.display = 'none';
                document.getElementById('srchd').style.display = 'none';
                document.getElementById('sd').style.display = 'block';

                lfta.push(subfolderContainer.id);
                // rgta = [];
                let fldrname = document.getElementById('fldrname');
                fldrname.textContent = subfolderName;
                let scount = document.getElementById('scount');
                scount.textContent = fileCount + ' songs';

                let mnt = document.querySelector('.mnt');
                document.getElementById('fvcv').style.backgroundImage = subfolderCover.style.backgroundImage;
                var colorThief = new ColorThief();
                let image = new Image();
                image.onload = function () {
                    let averageColor = colorThief.getColor(image);
                    let averageColorString = `rgb(${averageColor.join(', ')})`;
                    mnt.style.background = `linear-gradient(to top, rgb(21,21,21) 0,${averageColorString} 100%)`;
                };
                image.src = subfolderCover.data;
                displaySongs(filesInSubfolder, fileCount);
            });
            logSubfolderTotalLength(filesInSubfolder, subfolderContainer);
        }
    }
}

function logSubfolderTotalLength(files, subfolderContainer) {
    let totalDuration = 0;
    files.forEach(file => {
        getDuration(file, duration => {
            totalDuration += parseDuration(duration);
            if (file === files[files.length - 1]) {

                subfolderContainer.addEventListener('click', () => {
                    let lcount = document.getElementById('lcount');
                    lcount.textContent = `${formatDurationl(totalDuration)}`;
                });

            }
        });
    });
}

function parseDuration(durationString) {

    let [minutes, seconds] = durationString.split(':').map(Number);

    return minutes * 60 + seconds;
}

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

function displaySongs(songs, fileCount) {
    let mnbDiv = document.querySelector('.mnb');
    mnbDiv.innerHTML = '';
    songs.forEach((song, index) => {
        let songInfoDiv = createFileInfoDiv(song, index + 1);
        mnbDiv.appendChild(songInfoDiv);
        displayFileDetails(song, songInfoDiv);
    });

    fc = fileCount;
    for (let i = 1; i <= fileCount; i++) {
        let divs = document.querySelector('.s' + i);

        divs.addEventListener('click', () => {
            darr = [];
            rndma();
            if (sb2co === 0) {
                osb2();
            }
            sc = i;
            playmusic(divs);

        });

    }

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
        darr.push(sc);
        // console.log('push:', darr);
        audioPlayer.src = snginf.data;

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
    darr = [];
    rndma();
    if (sb2co === 0) {
        osb2();
    }
    sc = 1;
    let sng = document.querySelector(`#info:nth-child(${sc})`);
    playmusic(sng);
    nsd();
});
let prevsng;
prevBtn.addEventListener('click', function () {
    if (darr.length > 1) {
        nsa.push(darr.pop());
        sc = darr.pop();
        playmusic(document.querySelector(`#info:nth-child(${sc})`));
    }
});
let nsc, nextsng;
nextBtn.addEventListener('click', function () {
    if (rptc === 'green') {
        if (odn === 't') {
            if (sflc === 'grey') {
                if (sc === fc) {
                    sc = 1;
                } else {
                    sc = sc + 1;
                }
            } else {
                sc = nsc;
            }
            nextsng = document.querySelector(`#info:nth-child(${sc})`);
            playmusic(nextsng);
        } else {
            nextsng = document.querySelector(`#info:nth-child(${sc})`);
            playmusic(nextsng);
        }
    } else {
        if (sc !== fc) {
            if (sflc === 'grey') {
                sc = sc + 1;
                nextsng = document.querySelector(`#info:nth-child(${sc})`);
                playmusic(nextsng);
            } else {
                if (cz()) {
                } else {
                    sc = nsc;
                    nextsng = document.querySelector(`#info:nth-child(${sc})`);
                    playmusic(nextsng);
                }
            }
        } else {
            if (sflc !== 'grey') {
                if (cz()) {
                } else {
                    sc = nsc;
                    nextsng = document.querySelector(`#info:nth-child(${sc})`);
                    playmusic(nextsng);
                }
            }
        }
    }
    nsd();
});

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

    
    if (rptc === 'green') {
        if (odn === 't') {
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

    let nsxtsng = document.querySelector(`#info:nth-child(${nsc})`);
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
    document.getElementById('sd').style.display = 'none';
    document.getElementById('home').style.display = 'none';
    document.querySelector('.srchd').style.display = 'block';
    lfta.push('searchb');
    // rgta = [];
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
    nextBtn.click();
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
        document.getElementById(lfta.pop()).click();
    }
});

let rgt = document.getElementById('rgt');
rgt.addEventListener('click', function () {
    if (rgta.length > 0) {
        let lstn = rgta.pop();
        document.getElementById(lstn).click();
    }
});

// let lstn;
// let lft = document.getElementById('lft');
// lft.addEventListener('click', function () {
//     if (lfta.length > 1) {
//         rgta.push(lfta.pop());
//         lstn = lfta.pop();
//         backnforth();
//         console.log('lfta:', lfta);
//         console.log('rgta:', rgta);
//     }
// });

// let rgt = document.getElementById('rgt');
// rgt.addEventListener('click', function () {
//     if (rgta.length > 0) {
//         lstn = rgta.pop();
//         backnforth();
//         console.log('lfta:', lfta);
//         console.log('rgta:', rgta);
//     }
// });

// function backnforth(){
//     if (lstn === 'homeb') {
//         document.getElementById('srchd').style.display = 'none';
//         document.getElementById('sd').style.display = 'none';
//         document.getElementById('home').style.display = 'block';
//     } else if (lstn === 'searchb') {
//         document.getElementById('sd').style.display = 'none';
//         document.getElementById('home').style.display = 'none';
//         document.querySelector('.srchd').style.display = 'block';
//     } else {
//         document.getElementById('home').style.display = 'none';
//         document.getElementById('srchd').style.display = 'none';
//         document.getElementById(lstn).style.display = 'block';
//     }
// }