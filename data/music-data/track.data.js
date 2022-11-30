import todayTopHitImg from '../../public/image/track-image/today-top-hit.jpg';
import rapCaviarImg from '../../public/image/track-image/rap-caviar.jpg';
import moodBoosterImg from '../../public/image/track-image/mood-booster.jpg';
import feelinGoodImg from '../../public/image/track-image/feelin-good.jpg';
import sadHourImg from '../../public/image/track-image/sad-hour.jpg';
import peacefulPianoImg from '../../public/image/track-image/peaceful-piano.jpg';
import deepFocusImg from '../../public/image/track-image/deep-focus.jpg';
import instrumentalStudyImg from '../../public/image/track-image/instrumental-study.jpg';
import {emptyTrack} from "./emptyTrack";

export const trackData =
    [
        emptyTrack,
        {
            id: 1,
            category_id: 2,
            playlist_id: 1,
            type: 'track',
            title: 'bikalam',
            album: 'album',
            singer: 'singer',
            date: '21-2-2022',
            time: '3:49',
            image: todayTopHitImg,
            imagePath: '/image/track-image/today-top-hit.jpg',
            favorite: false,
            playing: false,
            pause: false,
            src: "/tracks/bikalam.mp3",
        },
        {
            id: 2,
            category_id: 2,
            playlist_id: 1,
            type: 'track',
            title: 'bikalam1',
            album: 'album',
            singer: 'singer2',
            date: '21-2-2022',
            time: '2:11',
            image: todayTopHitImg,
            imagePath: '/image/track-image/today-top-hit.jpg',
            favorite: false,
            playing: false,
            pause: false,
            src: "/tracks/bikalam1.mp3",
        },
        {
            id: 3,
            category_id: 3,
            playlist_id: 4,
            type: 'track',
            title: 'bikalam2',
            album: 'album',
            singer: 'singer',
            date: '21-2-2022',
            time: '2:25',
            image: feelinGoodImg,
            imagePath: '/image/track-image/feelin-good.jpg',
            favorite: false,
            playing: false,
            pause: false,
            src: "/tracks/bikalam2.mp3",
        },
        {
            id: 4,
            category_id: 4,
            playlist_id: 6,
            type: 'track',
            title: 'bikalam3',
            album: 'album',
            singer: 'singer',
            date: '21-2-2022',
            time: '5:17',
            image: peacefulPianoImg,
            imagePath: '/image/track-image/peaceful-piano.jpg',
            favorite: false,
            playing: false,
            pause: false,
            src: "/tracks/bikalam3.mp3",
        },
        {
            id: 5,
            category_id: 4,
            playlist_id: 6,
            type: 'track',
            title: 'bikalam4',
            album: 'album',
            singer: 'singer',
            date: '21-2-2022',
            time: '2:45',
            image: peacefulPianoImg,
            imagePath: '/image/track-image/peaceful-piano.jpg',
            favorite: false,
            playing: false,
            pause: false,
            src: "/tracks/bikalam4.mp3",

        },
        {
            id: 6,
            category_id: 4,
            playlist_id: 6,
            type: 'track',
            title: 'bikalam5',
            album: 'album',
            singer: 'singer',
            date: '21-2-2022',
            time: '2:25',
            image: peacefulPianoImg,
            imagePath: '/image/track-image/peaceful-piano.jpg',
            favorite: false,
            playing: false,
            pause: false,
            src: "/tracks/bikalam5.mp3",

        },
    ];