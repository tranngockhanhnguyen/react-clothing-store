// import { getRedirectResult } from "firebase/auth";
// import { useEffect } from "react";
import SignUpForm from "../../components/sign-up-form";
import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase";

function SignIn() {
  // useEffect(() => {
  //   (async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   })();
  // }, []);

  async function logGoogleUser() {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h1>SIGN IN</h1>
      <button onClick={logGoogleUser}>Login with Google</button>
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>Login with Google Redirect</button> */}
    </div>
  );
}

export default SignIn;
