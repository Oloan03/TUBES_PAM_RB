import firebase from 'firebase/app';
import 'firebase/auth';

const signin = async (email, password) => {
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.log(error);
  }
};

export default signin;