import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAh-v55BHz62svl_3YHWUuwASknYHvaBNk",
    authDomain: "expensify-12366.firebaseapp.com",
    databaseURL: "https://expensify-12366.firebaseio.com",
    projectId: "expensify-12366",
    storageBucket: "expensify-12366.appspot.com",
    messagingSenderId: "395660110020",
    appId: "1:395660110020:web:f02ef95f127c3ecd898191"
}

firebase.initializeApp(firebaseConfig);

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default }

// const firebaseConfig = {
//     apiKey: process.env.FIREBASE_API_key,
//     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//     databaseURL: process.env.FIREBASE_DATABASE_URL,
//     projectId: process.env.FIREBASE_PROJECT_ID,
//     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.FIREBASE_APP_ID
//   };

//child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {           //this bring the whole arrays from database
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//       const expenses = []
      
//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//         })
//       })
//       console.log(expenses)
//   })

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = []
      
//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//         })
//       })
//       console.log(expenses)
//   })

// database.ref('expenses').push({
//     description: 'this is first expense',
//     note: 'remind me later',
//     amount: 400,
//     createdAt: '23-4-2020'
// })

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val()
//   console.log(`${val.name} is job as a ${val.job.title} in company ${val.job.company}`)
// })
// database.ref('name').set('js')

// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val())
// }, (e) => {
//   console.log('error with fetchin data', e)
// })

// setTimeout(() => {
//   database.ref('age').set(23)
// }, 3500);

// setTimeout(() => {
//   database.ref().off('value', onValueChange)
// }, 7000)

// setTimeout(() => {
//   database.ref('age').set(24)
// }, 10500)

// database.ref()
//   .once('value')
//   .then((snapshot) => {
//    const val = snapshot.val()
//    console.log(val)
//   }).catch((e) => {
//    console.log('something went wrong!', e) 
//   })

// database.ref().set({
//     name: 'Ahsan',
//     age: 22,
//     stressLevel: 6,
//     job: {
//       title: 'software developer',
//       company: 'Google'
//     },
//     location: {
//           city: 'karachi',
//           country: 'pakistan'
//       },
//   }).then(() => {
//     console.log('Data is saved')
//   }).catch((e) => {
//     console.log('the error of first attriute', e)
//   })


// database.ref('isSingle').remove().then(() => {
//   console.log('remove succeeded')
// }).catch((error) => {
//   console.log('remove failed', error)
// })

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'seattle'
// })