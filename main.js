const songs = {
    kpop: [
        { title: 'BTS - Dynamite', videoId: 'gdZLi9oWNZg' },
        { title: 'BLACKPINK - DDU-DU DDU-DU', videoId: 'IHNzOHi8sJs' },
        { title: 'TWICE - Fancy', videoId: 'kOHB85vDuow' },
        { title: 'Red Velvet - Psycho', videoId: 'uR8Mrt1_osM' },
        { title: 'EXO - Love Shot', videoId: 'pSudEWBAYRE' },
        { title: 'ITZY - WANNABE', videoId: 'fE2h3lGlOsk' },
        { title: 'Stray Kids - God\'s Menu', videoId: 'TQTlCHxyuu8' },
        { title: 'NCT 127 - Kick It', videoId: '2OvyA2__Eas' },
        { title: 'aespa - Next Level', videoId: '4TWR90KJl84' },
        { title: 'IVE - LOVE DIVE', videoId: 'Y8JFxS1HlDo' },
    ],
    kballad: [
        { title: 'IU - Through the Night', videoId: 'em6x0l_C2gU' },
        { title: 'Paul Kim - Me After You', videoId: 'YvX_y_N63P0' },
        { title: 'Taeyeon - Four Seasons', videoId: '4OrCA1OInoo' },
        { title: 'Sung Si Kyung - Every moment of you', videoId: '2r_2s5g_bSc' },
        { title: 'Heize - You, Clouds, Rain', videoId: 'afxLaQiLu-o' },
        { title: 'AKMU - How can I love the heartbreak, you\'re the one I love', videoId: 'm3DZsBw5bnE' },
        { title: 'Baek Yerin - Maybe It\'s Not Our Fault', videoId: 'b1kQvZhQ6_M' },
        { title: 'Crush - Beautiful', videoId: 'W0cs6ciCt_k' },
        { title: 'Gummy - You Are My Everything', videoId: 'a11gd93f2rM' },
        { title: 'Yoon Mi-rae - ALWAYS', videoId: 'aE0-DaoNn_c' },
    ],
    pop: [
        { title: 'The Weeknd - Blinding Lights', videoId: '4NRXx6U8ABQ' },
        { title: 'Ed Sheeran - Shape of You', videoId: 'JGwWNGJdvx8' },
        { title: 'Dua Lipa - Don\'t Start Now', videoId: 'oygrmJFKYZY' },
        { title: 'Billie Eilish - bad guy', videoId: 'DyDfgMOUjCI' },
        { title: 'Harry Styles - Watermelon Sugar', videoId: 'E07s5ZYygMg' },
        { title: 'Post Malone - Circles', videoId: 'wXhTHyIgQ_U' },
        { title: 'Ariana Grande - 7 rings', videoId: 'QYh6mYIJG2Y' },
        { title: 'Justin Bieber - Peaches', videoId: 'tQ0yjYUFKAE' },
        { title: 'Olivia Rodrigo - drivers license', videoId: 'ZmDBbn5HeM0' },
        { title: 'Lizzo - Good As Hell', videoId: 'SmbmeOgWsqE' },
    ],
};

let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: '',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
        }
    });
}

function onPlayerReady(event) {
    // Player is ready
}

function playRandomSong(genre) {
    const songList = songs[genre];
    const randomSong = songList[Math.floor(Math.random() * songList.length)];
    player.loadVideoById(randomSong.videoId);
    document.getElementById('song-title').textContent = randomSong.title;
}

document.getElementById('kpop').addEventListener('click', () => playRandomSong('kpop'));
document.getElementById('kballad').addEventListener('click', () => playRandomSong('kballad'));
document.getElementById('pop').addEventListener('click', () => playRandomSong('pop'));
