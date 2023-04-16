import { signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';

import { auth, provider } from "../utils/firebaseConfig";
import Image from 'next/image';

import googleLogo from "../public/google.png";
import logo from "../public/logo.svg";

export const signOutHandle = () => {
  signOut(auth)
  .then(()=>{
    console.log("success")
    window.location.href = '/login';
  })
  .catch((error)=>{
    console.log(error);
  });
};

export const signInHandle = () => {
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      window.location.href = '/'
    }).catch((error) => {
      const errorCode = error.code;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode);
  });
  
}

export default function App(){
  return (
    <div className='flex flex-col bg-primary h-screen items-center justify-center space-y-10'>
      <div className='h-48 w-72 outline outline-black absolute rounded-lg top-1/2 -translate-y-5 z-0'/>
      {/* <h1 className='font-montserrat font-extrabold text-7xl bg-primary text-white z-10'>VAULT</h1> */}
      <Image src={logo} alt='' width={150} height={150} className='z-50'/>
      
      <button className='bg-blue-800 p-3 cursor-pointer hover:shadow-sm text-white z-10 font-hindRegular rounded-sm flex items-center justify-center space-x-3' onClick={signInHandle}> <Image src={googleLogo} width={40} height={40} className='bg-white p-2'/> <span>Sign In With Google</span></button> 
    </div>
  );
}