import { AppRegistry } from 'react-native';
import App from './App';
import HeadlessTask from './App/HeadlessTask';

AppRegistry.registerComponent('project', () => App);
AppRegistry.registerHeadlessTask('HeadlessTask', () => HeadlessTask);
