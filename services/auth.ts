import { provider, auth } from '../config/firebase';
import { signInWithPopup, UserCredential } from 'firebase/auth';

interface ErrorResponse {
  error: string;
}

export const authUser = async (): Promise<UserCredential | ErrorResponse> => {
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
