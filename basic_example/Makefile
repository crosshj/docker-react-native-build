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

run:
	docker run -t -i -v $$(pwd):/workspace -w /workspace --entrypoint "/bin/sh" adambene/react-native-android

default: build



