import React, {useRef} from 'react'
import { auth } from '../../firebase';
import "./Signup.css"

const SignIn = () => {
const emailRef = useRef(null);
const passwordRef = useRef(null);

 const register = (e)=>{
   e.preventDefault();
    auth.createUserWithEmailAndPassword(
    emailRef.current.value,
     passwordRef.current.value,
   ).then((authUser)=>{
     console.log(authUser);

   }).catch((error)=>{
     alert(error.message)
   });
 };
//  const signIn = (e)=>{
//   e.preventDefault();
//   auth.signInWithEmailAndPassword(
//     emailRef.current.value,
//     passwordRef.current.value
//   ).catch((error)=>{
//     alert(error.message)
//   })
// }
  return (
    <div className="signup">
      <form>
      <h1> Sign UP</h1>
      <input
      ref={emailRef}
      placeholder="email"
      type="email"
      />
      <input
      ref={passwordRef}
      placeholder="password"
      type="password"
      />
      <button
      type="submit"
      onClick={register}
      >
        Sign UP
      </button>
      <h4>
        <span className="text_gray">Already have an Account?</span>
         <span 
         className="signup_link"
        //  onClick={register}
         >
           Sign In</span> 
         
         </h4>
      </form>
      
    </div>
  );
}

export default SignIn;

