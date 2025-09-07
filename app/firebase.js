// Firebase configuration - TEMPORARILY DISABLED
// import { initializeApp } from 'firebase/app';
// import { getAuth, GoogleAuthProvider, TwitterAuthProvider } from 'firebase/auth';

// const firebaseConfig = {
//   // Add your Firebase config here
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app);

// // Initialize providers
// export const googleProvider = new GoogleAuthProvider();
// export const twitterProvider = new TwitterAuthProvider();

// Mock Firebase functions for now
export const auth = null;
export const googleProvider = null;
export const twitterProvider = null;

// Export mock signInWithGoogle function
export const signInWithGoogle = async () => {
  console.log('Firebase auth temporarily disabled');
  throw new Error('Firebase auth temporarily disabled');
};

// Export mock signInWithTwitter function
export const signInWithTwitter = async () => {
  console.log('Firebase auth temporarily disabled');
  throw new Error('Firebase auth temporarily disabled');
};
