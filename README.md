# docker-react-native-android-build
Docker React Native Android builds with example project(s).

![image](https://user-images.githubusercontent.com/1816471/38717895-aec11612-3eb7-11e8-9568-58ebcd2304c6.png)

## notes on progress
This started life as a fork of https://github.com/adambene/react-native-android
  - image build went fine
  - added react-native-cli to build
  - used to build the following

Added an example project from https://github.com/react-native-material-design/demo-app  
  - build went fine
  - app installed
  - app crashed after Splash screen

Add another example project from https://github.com/taskrabbit/ReactNativeSampleApp
  - build went fine
  - app would not install
  - rebuilt in debug mode
  - installed fine but show error, fixed with - https://stackoverflow.com/a/38874952/1627873
  - installed, ran fine
  - will rebuild in release mode to verify

## overall status
- [X] Got a project building an apk.
- [X] Installed apk and works on Android phone.
- [ ] Customized and modified like crazy.   
- [ ] Built some stuff.
- [ ] polish this readme to help anyone in the future that happens on it
  - [ ] what versions of key items are included
  - [X] screenshots
  - [ ] steps to get it to work (hopefully just a few)
  - [ ] minimize uneeded items, brutal simplification
