import { initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FB_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FB_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FB_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FB_MESSAGEING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FB_APP_ID
}
// // Initialize Firebase App
const app = initializeApp(firebaseConfig)

// // Initialize Firebase Auth with React Native Persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})

// // Initialize Firestore
const db = getFirestore(app)

// // Export the initialized instances
export { app, auth, db }
