.IGNORE: default run

build:
	docker run -t -i \
		-v $$(pwd):/workspace \
		-w /workspace \
		-e LOCAL_USER_ID=`id -u $$USER` \
		adambene/react-native-android /bin/sh \
		-c "cd android && ./gradlew --stacktrace assembleRelease"

build-debug:
	docker run -t -i \
	-v $$(pwd):/workspace \
	-w /workspace \
	-e LOCAL_USER_ID=`id -u $$USER` \
	adambene/react-native-android /bin/sh \
	-c "cd android && ./gradlew --stacktrace assembleDebug"

default: build



# docker run -t -i -v $(pwd):/workspace -w /workspace -e LOCAL_USER_ID=`id -u $USER` adambene/react-native-android /bin/sh