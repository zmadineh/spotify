import todayTopHitImg from '../../public/image/track-image/today-top-hit.jpg';
import rapCaviarImg from '../../public/image/track-image/rap-caviar.jpg';
import moodBoosterImg from '../../public/image/track-image/mood-booster.jpg';
import feelinGoodImg from '../../public/image/track-image/feelin-good.jpg';
import sadHourImg from '../../public/image/track-image/sad-hour.jpg';
import peacefulPianoImg from '../../public/image/track-image/peaceful-piano.jpg';
import deepFocusImg from '../../public/image/track-image/deep-focus.jpg';
import instrumentalStudyImg from '../../public/image/track-image/instrumental-study.jpg';

export const trackData =
    [
        {
            id: 1,
            category_id: 2,
            playlist_id: 1,
            type: 'track',
            title: 'title',
            album: 'album',
            singer: 'singer',
            date: '21-2-2022',
            time: '3:49',
            image: todayTopHitImg,
            imagePath: '/image/track-image/today-top-hit.jpg',
            favorite: false,
            playing: false,
            pause: true,
            src: "https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3",
        },
        {
            id: 2,
            category_id: 3,
            playlist_id: 4,
            type: 'track',
            title: 'title',
            album: 'album',
            singer: 'singer',
            date: '21-2-2022',
            time: '4:19',
            image: feelinGoodImg,
            imagePath: '/image/track-image/feelin-good.jpg',
            favorite: false,
            playing: false,
            pause: false,
            src: "https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3",

        },
        {
            id: 3,
            category_id: 4,
            playlist_id: 6,
            type: 'track',
            title: 'title',
            album: 'album',
            singer: 'singer',
            date: '21-2-2022',
            time: '3:55',
            image: peacefulPianoImg,
            imagePath: '/image/track-image/peaceful-piano.jpg',
            favorite: false,
            playing: false,
            pause: false,
            src: "https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3",

        },
    ];