// console.log("sync1")
// console.log("sync2")
// console.log("sync3")
// console.log("sync4")

// // for (let i = 0; i <= 20000; i++) {
// //     console.log(i)
// // }

// setTimeout(() => {
//     console.log("1 second Async")
// }, 1000);

// setTimeout(() => {
//     console.log("Async")
// }, 2000);


// console.log("sync5")
// console.log("sync6")
// console.log("sync7")



//First Way (CallBack Hell)

// function ChaiWala() {
//     setTimeout(() => {
//         console.log("chai done")
//         setTimeout(() => {
//             console.log("samosa done")
//             setTimeout(() => {
//                 console.log("chatni done")
//                 setTimeout(() => {
//                    console.log("done!!")
//                    setTimeout(() => {
//                     console.log("last done")
//                    }, 2000);
//                 }, 200);
//             }, 3000);
//         }, 2000);
//     }, 2000);
// }

// ChaiWala()





// Second Way

// function ChaiWala(cb) {
//     setTimeout(() => {
//         cb("chai done")
//     }, 2000);
// }

// function ChatniCallBack() {
//     console.log("chatni done")
// }

// function SamosaCallBack() {
//     console.log("samosa done")
//     setTimeout(() => {
//         ChatniCallBack()
//     }, 3000);
// }

// function ChaiCallBack(a) {
//     console.log(a)
//     setTimeout(() => {
//         SamosaCallBack()
//     }, 2000);
// }

// ChaiWala(ChaiCallBack)






// function new_promise(a) {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             if (a > 5) {
//                 resolve(a)
//             }
//             else {
//                 reject("error")
//             }
//         }, 2000);
//     })
// }


// new_promise(6)
//     .then((data) => {
//         console.log(data)
//         return new_promise(7)
//     })
//     .then((data) => {
//         console.log(data)
//         return new_promise(2)
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log(err)
//         return new_promise(8)
//     })
//     .then((data) => {
//         console.log(data)
//         return new_promise(2)
//     })
//     .catch((err) => {
//         console.log(err)
//     })






// function job() {
//     return new Promise(function (resolve, reject) {
//         reject();
//     });
// }
// let promise = job();
// promise.then(function () {
//     console.log('Success 1');
// }).then(function () {
//         console.log('Success 2');
//     })

//     .then(function () {
//         console.log('Success 3');
//     })
//     .catch(function () {
//         console.log('Error 1');
//     })
//     .then(function () {
//         console.log('Success 4');
//     })
//     .then(function () {
//         console.log("success 5")
//     })
//     .catch(() => {
//         console.log("Error 2")
//     })
    