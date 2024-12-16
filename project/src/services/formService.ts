import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';

export interface FormData {
  businessName: string;
  email: string;
  phone: string;
  businessDescription: string;
  ideas: string;
  services: string[];
  createdAt: any; // Using Firebase server timestamp
}

export const submitForm = async (data: Omit<FormData, 'createdAt'>): Promise<string> => {
  try {
    const formData: FormData = {
      ...data,
      createdAt: serverTimestamp(), // Use server timestamp for better consistency
    };

    const docRef = await addDoc(collection(db, 'submissions'), formData);
    return docRef.id;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw new Error('Failed to submit form');
  }
};