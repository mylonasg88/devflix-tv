# Streamer TV app

A template for a TV Streaming app 

## Stack Recap 📦

| Purpose              | Library/Tool           |
|----------------------|------------------------|
| React Native Runtime | Expo                   |
| State Management     | Zustand                |
| API Handling         | React Query            |
| Styling              | NativeWind (Tailwind CSS) |
| UI Components        | React Native Paper     |
| Video Playback       | expo-av                |
| Push Notifications   | expo-notifications     |

## Run 

``` 
$ npm install 
$ npm start
```

## Build Android

install packages
```shell
$ npm install -g eas-cli
$ eas login
$ eas build:configure
$ eas build --platform android
```
👉 It will ask whether to generate a keystore (for publishing) or upload an existing one. Choose Generate new unless you're reusing a Play Store upload key.

⏳ 4. Wait for build to complete
You’ll get a link like:

` Build details: https://expo.dev/accounts/yourname/projects/devflix-tv/builds/...
`

Once it finishes, you’ll get a .apk or .aab file:
- .apk = good for testing on real devices
- .aab = required for Google Play Store publishing

📦 5. Download the APK or AAB
- Expo will host the download link

- You can share it or install it on a device manually via:
``` bash 
adb install your-app.apk 
```
_(If you use Android Studio or a physical device with dev mode enabled)_

### Build Locally
🧪 You can build locally installable .apk for preview
```shell
eas build --platform android --profile preview --local
```

Install via USB	`adb install your-app.apk`

Output a .aab file in the project root with:
``` shell
eas build --platform android --profile production --local
```

🚀 6. ✅ (Optional) Submit to Play Store

```
$ eas submit --platform android
```

_It will ask for your Google Play JSON credentials, or you can upload via the Play Console manually._

## Build iOS

```shell
$ npm build
```

## ⚠️ Caveats
