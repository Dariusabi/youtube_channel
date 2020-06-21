import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC4AThZlWVW7qFX4Gf3_1vUeW6OPMy3Jew",
    authDomain: "localhost",
    databaseURL: "https://react-assessment-280518.firebaseio.com/"
};

export const fire = firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();