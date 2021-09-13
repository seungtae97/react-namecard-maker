import { firebaseApp } from "./firebase";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const auth = getAuth(firebaseApp);
class AuthService {
  login(providerName) {
    let provider;
    if (providerName === "Google") provider = new GoogleAuthProvider();
    if (providerName === "Github") provider = new GithubAuthProvider();

    return signInWithPopup(auth, provider);
  }
  logout() {
    signOut(auth);
  }
  onAuthChange(onUserChanged) {
    onAuthStateChanged(auth, (user) => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
