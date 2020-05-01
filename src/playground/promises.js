import { Promise } from "firebase";

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'ahsan',
            age: 22
        })
    }, 5000);
    // reject('something went wrong !')
})



promise.then((data) => {
    console.log('1', data)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('this my other promises !')
        }, 5000);
        })
}).then((str) => {
    console.log('does this run !', str)
}).catch((error) => {
    console.log('erroe', error)
})
