import { collection, getDocs, query, where } from "firebase/firestore"; 
import { db } from "./firebaseConfig";
import addNewDoc from "./addDocument";

export default async function getSpecificDoc(user) {
    const q = query(collection(db, "userData"), where("uid", "==", user.uid));
    const querySnapshot = await getDocs(q);

    let len = 0;
    querySnapshot.forEach(() => len++);
    
    if(len){
        const feedbacks = querySnapshot.docs.map((doc) => ({...doc.data()}))
        return feedbacks;
    }
    else {
        const newUserData = {
            uid: user.uid,
            name: user.displayName,
            email: user.email,
            phone: "",
            college: "National Institute of Technology Patna"
        }
        addNewDoc(newUserData);
        return newUserData;
    }
}