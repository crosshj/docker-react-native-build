# docker-react-native-android-build
Docker React Native Android builds with example project(s).

![image](https://user-images.githubusercontent.com/1816471/38717895-aec11612-3eb7-11e8-9568-58ebcd2304c6.png)

## notes on progress
This started life as a fork of https://github.com/adambene/react-native-android
  - image build went fine
  - added react-native-cli to build
  - used to build the following examples

Added an example project from https://github.com/react-native-material-design/demo-app  
  - debug build went fine
  - app installed
  - app crashed after Splash screen

Add another example project from https://github.com/taskrabbit/ReactNativeSampleApp
  - build went fine
  - app would not install
  - rebuilt in debug mode
  - installed fine but show error, fixed with - https://stackoverflow.com/a/38874952/1627873
  - installed, ran fine
  - release mode will not install because unsigned

Add example built from ground up:
  - started with just Makefile
  - ran `react-native init project` to create needed files
  - built with assets, release and debug modes
  - now realise that unsigned release will not install on Android
  - everything seems to work fine with debug apk: build, install, run
  - will explore signed release
  - will explore watch mode (can this work in docker container?)

## overall status / goals
- [X] Got a project building an Android apk.
- [X] Installed apk and works on Android phone.   
- [ ] Build some stuff.
- [ ] Polish readme
  - [ ] what versions of key items are included
  - [X] screenshots
  - [ ] steps to get it to work (hopefully just a few)
  - [X] minimize uneeded items, brutal simplification - see [basic_example](example_projects/basic_example)
