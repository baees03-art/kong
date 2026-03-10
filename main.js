// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
}

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

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
        { title: 'NewJeans - Hype Boy', videoId: '11cta61wi0g' },
        { title: 'LE SSERAFIM - ANTIFRAGILE', videoId: 'pyfMvAbEl6o' },
        { title: 'SEVENTEEN - Super', videoId: 'jekm-9X5SIs' },
        { title: '(G)I-DLE - Queencard', videoId: '7HDeMeov774' },
        { title: 'BIGBANG - Still Life', videoId: 'eN5mG_yBQuU' },
        { title: 'V - Love Me Again', videoId: 'HYzyRHAHJl8' },
        { title: 'Jungkook - Seven (feat. Latto)', videoId: 'QU9c0053UAU' },
        { title: 'TXT - Sugar Rush Ride', videoId: 'P9tKTxvgkv4' },
        { title: 'ENHYPEN - Bite Me', videoId: 'wXFLzODnqi0' },
        { title: 'KISS OF LIFE - Midas Touch', videoId: 'oXyG2WRAH9E' },
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
        { title: 'Sung Si-kyung - Hee Jae', videoId: '3G20E6pX2v8' },
        { title: 'Park Hyo-shin - Wild Flower', videoId: 'OxgiiyLpbeE' },
        { title: 'Davichi - This Love', videoId: 'XyjhXbvW0v0' },
        { title: 'Kim Bum-soo - I Miss You', videoId: 'fTz0bNfT2Yw' },
        { title: 'Lim Young-woong - Love Always Flees', videoId: '6O_PnyRz8_s' },
        { title: 'MeloMance - Love, Maybe', videoId: 'Xy_v9O3L8vI' },
        { title: 'KyoungSeo - Shiny Star (2020)', videoId: '8o193tN8790' },
        { title: 'SG Wannabe - Timeless', videoId: 'lq5X52LqLqA' },
        { title: '2AM - Never Let You Go', videoId: '1Oqf0hY48q0' },
        { title: 'Urban Zakapa - I Don\'t Love You', videoId: '4F2v_2NfV8w' },
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
        { title: 'Taylor Swift - Anti-Hero', videoId: 'b1kbL_1I690' },
        { title: 'Miley Cyrus - Flowers', videoId: 'G7KNmW9qzW0' },
        { title: 'SZA - Kill Bill', videoId: 'SQNcS69uLpQ' },
        { title: 'Bruno Mars - Leave the Door Open', videoId: 'adLGHcj_jwQ' },
        { title: 'Doja Cat - Paint The Town Red', videoId: 'm4_9_SFrh3Y' },
        { title: 'Sam Smith - Unholy', videoId: 'Uq9gPaIzbe8' },
        { title: 'Stephen Sanchez - Until I Found You', videoId: 'GxldQ9eX2fc' },
        { title: 'Benson Boone - Beautiful Things', videoId: 'S_T8fW-i3XU' },
        { title: 'Sabrina Carpenter - Espresso', videoId: 'vW77_n5QWJ4' },
        { title: 'Teddy Swims - Lose Control', videoId: 'H6T3-f_m70A' },
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
