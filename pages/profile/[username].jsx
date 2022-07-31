import React from 'react'
import { collection, getDocs, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { db } from '../../firebase';
import { Header, Feed } from '../../components';


const UserDetails = ({username}) => {
    console.log(username)

    
  return (
    <>
    <div className='dark:bg-black'>
    <Header className="dark:bg-black"/>
    <Feed/>
    </div>
    
    </>
        
    
  )
}

export default UserDetails;

export async function getStaticProps({ params }) {
    let snapshots =[];
    const postsRef = collection(db, "posts");
    const q = query(postsRef, where("username", "==", params?.username));
    await getDocs(q).then((snap) => {
        snapshots =  snap.docs
        snapshots.map((snapshot) => ( snapshot.data()

        
      ))
     snapshots = JSON.parse(JSON.stringify(snapshots))
    }
      
    )
     
 
    return {
      props: {
        username: snapshots,
      }
    };
  }

  export async function getStaticPaths() {
    let snapshots = [];
    let username = ''
    const postsRef = collection(db, "posts");
    const q = query(postsRef,  orderBy('timestamp', 'desc'));
      await getDocs(q).then((snap)=> {
         snapshots = snap.docs;
         console.log(snapshots)
         snapshots.map((snapshot) => (

           console.log(snapshot.data().username)

         ))
    })
 
 
    return {
      paths: snapshots.map((snapshot) => ({params:{username: snapshot.data().username }})),
      fallback: false,
    };
  }
//   .then((snap)=> {
//     snapshots = snap.docs;
//     console.log(snapshots)
//     snapshots.map((snapshot) => (
//         data = [snapshot?.data()?.username, snapshot?.data()?.caption, snapshot?.data()?.image, snapshot?.id]
//     )
//     )
// });