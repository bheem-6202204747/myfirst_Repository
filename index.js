// // // // console.log(document.body)
// // // // let a = Math.random() * 4521578;
// // // // console.log(a);
// // // // console.log(Math.floor(a).toString(16));
// // // // return "#" + ("000000" + a).slice(-6);

// // // const randomColor = () => {
// // //     let hexColor = Math.floor(Math.random() * 16777215).toString(16);
// // //     return "#" + ("000000" + hexColor).slice(-6);
// // // }
// // // let intervalID;
// // // const startInterval = () => {
// // //     const changeBg = () => {
// // //         document.body.style.backgroundColor = randomColor();
// // //         console.log("current time is ", Date.now(), document.body);
// // //     };
// // //     !intervalID ? (intervalID = setInterval(changeBg, 1000)) : null;
// // // };
// // // const stopInterval = () => {
// // //     clearInterval(intervalID);
// // //     intervalID = null;
// // // }

// // // document.querySelector("#start").addEventListener("click", startInterval);
// // // document.querySelector("#stop").addEventListener("click", stopInterval);

// // //================== CALL Back Function ===============

// // const firstFunction = (callBack) => {
// //     setTimeout(() => {
// //         console.log("Hello");
// //         callBack();
// //     }, 1000);
// // };
// // const secFunction = (callBack) => {
// //     setTimeout(() => {
// //         console.log("2nd Hello");
// //         callBack();
// //     }, 2000);
// // };
// // const thirdFunction = (callBack) => {
// //     setTimeout(() => {
// //         console.log("3rd Hello");
// //         callBack();
// //     }, 3000);
// // };

// // firstFunction(() => {
// //     secFunction(() => {
// //         thirdFunction(() => {
// //             console.log("All Set!  ")
// //         })
// //     })
// // })


// // ==============  promise function   ============


// let p = new Promise((Resolve, Reject) => {
//     let a = 1+1;
//     if(a == 2){
//         Resolve("Success");
//     }
//     else{
//         Reject("Failed");
//     }
// });

// p.then((message) => console.log("message from Promise", message)).catch(
//     (message) => {
//         console.log("Rejection Message from promise", message);
//     }
// )




// const firstFunction = () => {
//     return new Promise((resolve,reject) => {
//         if(1){
//             setTimeout(() => {
//                 console.log("Hello");
//                 resolve();
//             }, 1000);
//         }else{
//             reject("rejected")
//         }
//     });
// };
// const secFunction = () => {
//     return new Promise((resolve,reject) => {
//         if(1){
//             setTimeout(() => {
//                 console.log("2nd Hello");
//                 resolve();
//             }, 2000);
//         }else{
//             reject("rejected")
//         }
//     });
// };
// const thirdFunction = () => {
//     return new Promise((resolve,reject) => {
//         if(1){
//             setTimeout(() => {
//                 console.log("3rd Hello");
//                 resolve();
//             }, 3000);
//         }else{
//             reject("rejected")
//         }
//     });
//  };



// //================ asyschronus function ============


// const doAsync = async() => {
//     try{
//         await firstFunction()
//         await secFunction()
//         await thirdFunction()
//         console.log('Done')
//     }
//     catch(err){
//         console.log(err)
//     }
// }
// doAsync()
  
// ============ concatinate two array =========

// let arr1 = [1,2,3,6];
// let arr2 = [8,9,7,4];
// let arr3 = [...arr1,...arr2];
// console.log(arr3);
// const [a,b,c,d] = arr1;
// console.log(c)