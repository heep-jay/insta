import { data } from "autoprefixer";
import { collection, getDocs, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { db } from '../firebase'


export const getUsername = async (params) => {
    let data = {}
    const userRef = collection(db, "profiles");
    const q2 = query(userRef, where("username", "==", params));
     const querysnapshot = await getDocs(q2)
     querysnapshot.docs.map(
        (snapshot) => {
             data = {
                username:snapshot.data().username,
                bio: snapshot.data().bio,
                image: snapshot.data().profileImg,
                id: snapshot.data().id,
               
            }
        }    
        
    )
    return data;
}

export const getPosts = async (params) =>{
    let snapshots =[];

    const postsRef = collection(db, "posts");
    const q = query(postsRef, where("username", "==", params));
     await getDocs(q).then((snap) => {
        snapshots =  snap.docs
        snapshots.map((snapshot) => ( snapshot.data()))
        data = JSON.parse(JSON.stringify(snapshots))})
    return data;
}