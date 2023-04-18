import {getApps, getApp,initializeApp }from 'firebase/app';
import { getFirestore , collection , addDoc, setDoc ,getDocs,doc ,deleteDoc  } from "firebase/firestore";
import images from "../json/images.json";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APPID,
};

const app_length = getApps().length > 0;  //判斷是否讀取過
const app = app_length ? getApp() : initializeApp(firebaseConfig);

// REFERENCE DB
const db = getFirestore(app);

// REFERENCE COLLECTION
const imagesCollection = collection(db, "images"); 



//讀取json資料from"../json/images.json"
export const feedImages = async() => {
      // DELETE ALL EXISTING DOCS
  const querySnapshot = await getDocs(imagesCollection);
  querySnapshot.forEach(async (image) => {
    await deleteDoc(doc(db, "images", image.id));
  });
  // ADD NEW DOCS
    images.forEach(async(image)=>{
        const docRef = await doc(imagesCollection);
        await setDoc(docRef,{...image,id:docRef.id});
    })
}

//取得firebase裡的image物件(陣列))
export const getImages = async () => {
    const querySnapshot = await getDocs(imagesCollection);
    // Convert query to a json array.
    let result = [];
    querySnapshot.forEach(async (image) => {
       await result.push(image.data());
    });
    return result;
 };