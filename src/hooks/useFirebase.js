import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged ,signOut,createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user)
        })
    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
            setError('');
          }).catch((error) => {
            setError(error.message)
          });
    }

    // Handle name change
    const handleChangeName = (e) =>{
      setName(e.target.value);
    }

    // Hanlde email chanage
    const handleEmailChange = (e) =>{
      setEmail(e.target.value);
    }
    // Handle password change
    const handlePasswordChange =(e) =>{
      setPassword(e.target.value);
    }
    // Registration handle
    const handleRegister = (e) => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
        // Signed in 
        setUser(user);
        setUserName();
        setError('');
      })
      .catch((error) => {
        setError(error.message);
      });
   
    }

    // User name set up
    const setUserName = () =>{
      updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {
        // Profile updated!
       
      }).catch((error) => {
        // An error occurred
        setError(error.message)
      });
    }

  //  handle login user
    const handleLogInUser = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          // Signed in 
          setUser(result.user);
          setError('');
        
        })
        .catch((error) => {
           setError(error.message);
        });
    }

    // Observe user auth state change or not
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
              // User is signed out
            }
          });
    },[])
    return{
        user,
        error,
        signInUsingGoogle,
        logOut,
        handleRegister,
        handleEmailChange,
        handlePasswordChange,
        handleChangeName,
        handleLogInUser
    }
}

export default useFirebase;