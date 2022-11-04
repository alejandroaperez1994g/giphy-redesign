import { getDoc, doc } from 'firebase/firestore';
import { db } from '../config/firebase';

export const getGifsData = async (email: string) => {
  const gifRef = doc(db, 'giphy', email);
  const docSnap = await getDoc(gifRef);
};
