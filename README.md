# docker-react-native-android-build
Docker React Native build with example project(s).

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


# overall status
- [X] Got a project building an apk.
- [X] Installed apk and works on Android phone.
- [ ] Customized and modified like crazy.   
- [ ] Built some stuff.
