/**
 * @format
 */

import TrackPlayer from 'react-native-track-player';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { playbackService } from './Components/Sportify- like/src/MusicService';

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => playbackService);
