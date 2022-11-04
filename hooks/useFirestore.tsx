import React from 'react';
import {
  getDoc,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  collection,
  getDocs,
  setDoc,
} from 'firebase/firestore';
import { db } from '../config/firebase';
import toast, { Toaster } from 'react-hot-toast';

const useFirestore = () => {
  const userCollectionRef = collection(db, 'giphy');

  const checkIfUserExist = async (email: string) => {
    const data = await getDocs(userCollectionRef);
    const userExist = data.docs.find((doc) => doc.id === email);
    return userExist ? true : false;
  };

  const createUser = async (email: string) => {
    const userDoc = doc(userCollectionRef, email);
    await setDoc(userDoc, {
      gifs: [],
    });
  };

  const getGifsData = async (email: string) => {
    const gifRef = doc(db, 'giphy', email);
    try {
      const response = await getDoc(gifRef);
      return response.data()!.gifs;
    } catch (error) {
      console.log(error);
    }
  };

  const addGifData = async (email: string, title: string, src: string) => {
    const gifRef = doc(db, 'giphy', email);
    try {
      updateDoc(gifRef, {
        gifs: arrayUnion({
          title,
          src,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteGifData = async (email: string, title: string, src: string) => {
    const gifRef = doc(db, 'giphy', email);
    try {
      updateDoc(gifRef, {
        gifs: arrayRemove({
          title,
          src,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const checkGifExistence = async (
    email: string,
    src: string,
    title: string
  ) => {
    const gifRef = doc(db, 'giphy', email);
    getDoc(gifRef)
      .then((data) => {
        const exist = data.data()!.gifs.find((gif: any) => gif.src === src);
        if (exist) {
          deleteGifData(email, title, src);
          toast.error('Gif removed from Favourites!');
        } else {
          addGifData(email, title, src);
          toast.success('Gif added to Favourites!');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    getGifsData,
    addGifData,
    deleteGifData,
    checkGifExistence,
    checkIfUserExist,
    createUser,
  };
};

export default useFirestore;
