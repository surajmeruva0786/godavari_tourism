import {
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
    onSnapshot,
    query,
    orderBy,
    Timestamp
} from 'firebase/firestore';
import {
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User
} from 'firebase/auth';
import { db, auth } from '../config/firebase.config';
import { BookingFormData, PackageData, WebsiteSettings } from '../utils/types';

// ==================== BOOKINGS ====================

export async function addBooking(booking: Omit<BookingFormData, 'id'>): Promise<string> {
    try {
        const docRef = await addDoc(collection(db, 'bookings'), {
            ...booking,
            createdAt: Timestamp.now()
        });
        return docRef.id;
    } catch (error) {
        console.error('Error adding booking:', error);
        throw error;
    }
}

export async function getAllBookings(): Promise<BookingFormData[]> {
    try {
        const q = query(collection(db, 'bookings'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        })) as BookingFormData[];
    } catch (error) {
        console.error('Error getting bookings:', error);
        throw error;
    }
}

export function subscribeToBookings(callback: (bookings: BookingFormData[]) => void): () => void {
    const q = query(collection(db, 'bookings'), orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const bookings = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        })) as BookingFormData[];
        callback(bookings);
    }, (error) => {
        console.error('Error subscribing to bookings:', error);
    });

    return unsubscribe;
}

// ==================== PACKAGES ====================

export async function addPackage(pkg: PackageData): Promise<string> {
    try {
        const docRef = await addDoc(collection(db, 'packages'), pkg);
        return docRef.id;
    } catch (error) {
        console.error('Error adding package:', error);
        throw error;
    }
}

export async function updatePackage(id: string, pkg: PackageData): Promise<void> {
    try {
        const docRef = doc(db, 'packages', id);
        await updateDoc(docRef, { ...pkg });
    } catch (error) {
        console.error('Error updating package:', error);
        throw error;
    }
}

export async function deletePackage(id: string): Promise<void> {
    try {
        await deleteDoc(doc(db, 'packages', id));
    } catch (error) {
        console.error('Error deleting package:', error);
        throw error;
    }
}

export async function getAllPackages(): Promise<PackageData[]> {
    try {
        const querySnapshot = await getDocs(collection(db, 'packages'));
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        })) as PackageData[];
    } catch (error) {
        console.error('Error getting packages:', error);
        throw error;
    }
}

// ==================== SETTINGS ====================

export async function getSettings(): Promise<WebsiteSettings | null> {
    try {
        const querySnapshot = await getDocs(collection(db, 'settings'));
        if (!querySnapshot.empty) {
            return querySnapshot.docs[0].data() as WebsiteSettings;
        }
        return null;
    } catch (error) {
        console.error('Error getting settings:', error);
        throw error;
    }
}

export async function updateSettings(settings: WebsiteSettings): Promise<void> {
    try {
        const querySnapshot = await getDocs(collection(db, 'settings'));
        if (!querySnapshot.empty) {
            const docRef = doc(db, 'settings', querySnapshot.docs[0].id);
            await updateDoc(docRef, { ...settings });
        } else {
            await addDoc(collection(db, 'settings'), settings);
        }
    } catch (error) {
        console.error('Error updating settings:', error);
        throw error;
    }
}

// ==================== AUTHENTICATION ====================

export async function loginAdmin(email: string, password: string): Promise<User> {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
}

export async function logoutAdmin(): Promise<void> {
    try {
        await signOut(auth);
    } catch (error) {
        console.error('Error logging out:', error);
        throw error;
    }
}

export function onAuthStateChange(callback: (user: User | null) => void): () => void {
    return onAuthStateChanged(auth, callback);
}
