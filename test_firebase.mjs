import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadString, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

async function testUpload() {
  try {
    const storageRef = ref(storage, 'test.txt');
    console.log("Uploading...");
    await uploadString(storageRef, 'SGVsbG8=', 'base64', { contentType: 'text/plain' });
    console.log("Upload successful!");
    const url = await getDownloadURL(storageRef);
    console.log("URL:", url);
  } catch (error) {
    console.error("Firebase error:", error);
  }
}

testUpload();
