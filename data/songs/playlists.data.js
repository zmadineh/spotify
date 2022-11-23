import todayTopHitImg from '../../public/image/song-image/today-top-hit.jpg';
import rapCaviarImg from '../../public/image/song-image/rap-caviar.jpg';
import moodBoosterImg from '../../public/image/song-image/mood-booster.jpg';
import feelinGoodImg from '../../public/image/song-image/feelin-good.jpg';
import sadHourImg from '../../public/image/song-image/sad-hour.jpg';
import peacefulPianoImg from '../../public/image/song-image/peaceful-piano.jpg';
import deepFocusImg from '../../public/image/song-image/deep-focus.jpg';
import instrumentalStudyImg from '../../public/image/song-image/instrumental-study.jpg';

export const playlistsData =
    [
        {
            id: 1,
            category_id: 2,
            playlist: "Today's Top Hit",
            title: "Today's Top Hit",
            information: 'The hottest tracks in the United States',
            image: todayTopHitImg,
            imagePath: '/image/song-image/today-top-hit.jpg',
        },
        {
            id: 2,
            category_id: 2,
            playlist: "RapCaviar",
            title: 'RapCaviar',
            information: 'The hottest tracks in the United States',
            image: rapCaviarImg,
            imagePath: '/image/song-image/rap-caviar.jpg',
        },
        {
            id: 3,
            category_id: 3,
            playlist: 'Mood Booster',
            title: 'Mood Booster',
            information: 'Get happy with today\'s does of feel-good songs!',
            image: moodBoosterImg,
            imagePath: '/image/song-image/mood-booster.jpg',
        },
        {
            id: 4,
            category_id: 3,
            playlist: "Feelin'Good",
            title: "Feelin\'Good",
            information: 'Feel good with this positively timeless playlists!',
            image: feelinGoodImg,
            imagePath: '/image/song-image/feelin-good.jpg',
        },
        {
            id: 5,
            category_id: 3,
            playlist: 'Sad hour',
            title: 'Sad hour',
            information: 'Somehow heartbreak feels good in a place like this',
            image: sadHourImg,
            imagePath: '/image/song-image/sad-hour.jpg',
        },
        {
            id: 6,
            category_id: 4,
            playlist: 'Peaceful Piano',
            title: 'Peaceful Piano',
            information: 'Relax and indulge with beautiful piano pieces',
            image: peacefulPianoImg,
            imagePath: '/image/song-image/peaceful-piano.jpg',
        },
        {
            id: 7,
            category_id: 4,
            playlist: 'Deep Focus',
            title: 'Deep Focus',
            information: 'Keep calm and focus with ambient and post-rock',
            image: deepFocusImg,
            imagePath: '/image/song-image/deep-focus.jpg',
        },
        {
            id: 8,
            category_id: 4,
            playlist: 'Instrumental Study',
            title: 'Instrumental Study',
            information: 'Focus with soft study music in the background',
            image: instrumentalStudyImg,
            imagePath: '/image/song-image/instrumental-study.jpg',
        },
    ];