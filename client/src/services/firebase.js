import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import dayjs from "dayjs";

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: process.env.VUE_APP_apiKey,
    authDomain: process.env.VUE_APP_authDomain,
    projectId: process.env.VUE_APP_projectId,
    storageBucket: process.env.VUE_APP_storageBucket,
    messagingSenderId: process.env.VUE_APP_messagingSenderId,
    appId: process.env.VUE_APP_appId,
    measurementId: process.env.VUE_APP_messagingSenderId
}
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

const todayCollection = db.collection(dayjs().format("YYYY-MM-DD"))
const provider = new firebase.auth.GoogleAuthProvider()

export {
    provider,
    db,
    auth,
    todayCollection,
}