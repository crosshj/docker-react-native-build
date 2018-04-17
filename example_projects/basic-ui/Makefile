.IGNORE: default run

assets:
	mkdir -p android/app/src/main/assets
	docker run -t -i \
		-v $$(pwd):/workspace \
		-w /workspace \
		--entrypoint "/bin/sh" \
		adambene/react-native-android \
		-c "npm run android-linux && rm -rf metro-cache-* && rm -rf haste-map*"

build-release:
	docker run -t -i \
		-v $$(pwd):/workspace \
		-w /workspace \
		-e LOCAL_USER_ID=`id -u $$USER` \
		adambene/react-native-android \
		/bin/sh \
		-c "cd android && ./gradlew clean && ./gradlew assembleRelease"

build:
	docker run -t -i \
		-v $$(pwd):/workspace \
		-w /workspace \
		-e LOCAL_USER_ID=`id -u $$USER` \
		adambene/react-native-android \
		/bin/sh \
		-c "cd android && ./gradlew clean && ./gradlew --stacktrace assembleDebug"

run:
	docker run -t -i \
		-v $$(pwd):/workspace \
		-w /workspace \
		--entrypoint "/bin/sh" \
		adambene/react-native-android

default: build



