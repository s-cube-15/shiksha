import "../App.css"; 
import Header from './../MyComponents/Header';
import { useSpeechSynthesis } from "react-speech-kit";


import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
} from "firebase/auth"; 
import app from "../firebase"; 
import { useState } from "react"; 
 
function Login() { 
  const auth = getAuth(app); 
  const { speak } = useSpeechSynthesis()
  const emailinp = 'Enter your email'
  const pass = 'Enter the password'
  const acc = 'Create Account'
  const signin = 'Sign In'
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
 
  const signUp = () => { 
    createUserWithEmailAndPassword(auth, email, password) 
      .then((userCredential) => { 
        // Signed in 
        const user = userCredential.user; 
        console.log(user); 
        alert("Successfully created an account"); 
        // ... 
      }) 
      .catch((error) => { 
        const errorCode = error.code; 
        const errorMessage = error.message; 
        alert(errorCode); 
        // .. 
      }); 
  }; 
  const signIn = () => { 
    signInWithEmailAndPassword(auth, email, password) 
      .then((userCredential) => { 
        // Signed in 
        const user = userCredential.user; 
        console.log(user); 
        alert("You are now signed in"); 
        // ... 
      }) 
      .catch((error) => { 
        const errorCode = error.code; 
        const errorMessage = error.message; 
        alert(errorCode); 
      }); 
      
  }; 
  
 
  return ( 
    <div className="App"> 
    <Header/>
      <input onMouseOver={() => speak({ text: emailinp })}
        type={"email"} 
        className="block p-2.5 mt-2 mb-2 ml-2 w-50 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="please enter your email" 
        onChange={(e) => setEmail(e.target.value)} 
      /> 
      <input onMouseOver={() => speak({ text: pass })}
        type={"password"} 
        placeholder="Enter New Password"
        className="block p-2.5 mt-2 mb-2 ml-2 w-50 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        onChange={(e) => setPassword(e.target.value)} 
      /> 
 
      <button onMouseOver={() => speak({ text: acc })} className="bg-transparent  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={signUp}>Create account</button> 
      <button onMouseOver={() => speak({ text: signin })} className="bg-transparent mt-2 mb-2 ml-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={signIn}>Sign in</button> 
    </div> 
  ); 
} 
 
export default Login;