import { provider, auth } from '../config/firebase';
import { signInWithPopup, UserCredential } from 'firebase/auth';

export const authUser = async (): Promise<UserCredential> => {
  try {
    const response = await signInWithPopup(auth, provider);
    return response;
  } catch (error) {
    let errorMessage = '';
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return { error: errorMessage };
  }
};
