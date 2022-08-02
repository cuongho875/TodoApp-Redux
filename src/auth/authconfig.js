import {GoogleAuthProvider,signOut,
  signInWithPopup,
  FacebookAuthProvider,
GithubAuthProvider} from "firebase/auth";
import {db,auth} from '../firebase'
import {
    query,
    getDocs,
    collection,
    where,
    addDoc,
  } from "firebase/firestore";
const signInWithSocial= async (provider) =>{
  try {
    const res = await signInWithPopup(auth, provider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: provider.providerId,
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
  }
}
const signInWithGoogle = () =>{
  signInWithSocial(new GoogleAuthProvider);
};
const signInWithFacebook = () =>{
  signInWithSocial(new FacebookAuthProvider);
};
const signInWithGithub = () =>{
  signInWithSocial(new GithubAuthProvider);
};
const logout = () => {
  signOut(auth);
};
export {signInWithGoogle,
  signInWithFacebook,
  signInWithGithub,
    logout}