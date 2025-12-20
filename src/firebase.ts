import { initializeApp } from '@firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAHVx4BGAxOTIm0VVQw-3EpM_w-IKxH8Ks',
  authDomain: 'cloudponics-bc383.firebaseapp.com',
  projectId: 'cloudponics-bc383',
  storageBucket: 'cloudponics-bc383.appspot.com',
  messagingSenderId: '615419170947',
  appId: '1:615419170947:web:d0669656f4182056724bb6',
  measurementId: 'G-3LBFQ98WJY',
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);