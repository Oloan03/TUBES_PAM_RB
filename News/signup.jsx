import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const signup = async (email, password, name, phone, birthdate) => {
  try {
    const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
    const user = response.user;

    await user.updateProfile({ displayName: name });
    await firebase.firestore().collection('users').doc(user.uid).set({
      name,
      email,
      phone,
      birthdate,
    });
  } catch (error) {
    console.log(error);
  }
};

export default signup;