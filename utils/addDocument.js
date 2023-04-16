import { collection, addDoc } from "firebase/firestore"; 
import { db } from "./firebaseConfig";

export default async function addNewDoc(data) {
    console.log(data.uid, data.name, data.email, data.phone, data.college);
    const docRef = await addDoc(collection(db, "userData"), {
        uid: data.uid,
        name: data.name,
        email: data.email,
        number: data.phone,
        college: data.college
    });
}