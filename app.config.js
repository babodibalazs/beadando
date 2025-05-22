import "dotenv/config"

export default {
  "expo": {
    "name": "beadando",
    "slug": "beadando",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "beadando",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "edgeToEdgeEnabled": true
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/splash-icon.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff"
        }
      ]
    ],
    "experiments": {
      "typedRoutes": true
    },
    "extra": {
      "firebaseConfig": {
        "apiKey": process.env.apiKey,
        "authDomain": process.env.authDomain,
        "projectId": process.env.projectId,
        "storageBucket": process.env.storageBucket,
        "messagingSenderId": process.env.messagingSenderId,
        "appId": process.env.appId,
        "measurementId": process.env.measurementId
      }
    }
  }
}
