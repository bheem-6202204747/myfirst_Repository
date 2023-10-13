//  console.log(document.body)
// let a = Math.random() * 4521578;
// console.log(a);
// console.log(Math.floor(a).toString(16));
// return "#" + ("000000" + a).slice(-6);

// const randomColor = () => {
//    let hexColor = Math.floor(Math.random() * 16777215).toString(16);
//     return "#" + ("000000" + hexColor).slice(-6);
// }
// let intervalID;
// const startInterval = () => {
//     const changeBg = () => {
//         document.body.style.backgroundColor = randomColor();
//         console.log("current time is ", Date.now(), document.body);
//     };
//     !intervalID ? (intervalID = setInterval(changeBg, 1000)) : null;
// };
// const stopInterval = () => {
//     clearInterval(intervalID);
//     intervalID = null;
// }

// document.querySelector("#start").addEventListener("click", startInterval);
// document.querySelector("#stop").addEventListener("click", stopInterval);

//================== CALL Back Function ===============

// const firstFunction = (callBack) => {
//     setTimeout(() => {
//         console.log("Hello");
//         callBack();
//     }, 1000);
// };
// const secFunction = (callBack) => {
//     setTimeout(() => {
//         console.log("2nd Hello");
//         callBack();
//     }, 2000);
// };
// const thirdFunction = (callBack) => {
//     setTimeout(() => {
//         console.log("3rd Hello");
//         callBack();
//     }, 3000);
// };

// firstFunction(() => {
//     secFunction(() => {
//         thirdFunction(() => {
//             console.log("All Set!  ")
//         })
//     })
// })


// ==============  promise function   ============


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



// ================Number Convert into Text ======================

// function test(n) {
//     if (n < 0)
//       return false;
// 	 single_digit = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
// 	 double_digit = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
// 	 below_hundred = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
// 	if (n == 0) 
//     {
//         return 'Zero'
//     }
// 	function translate(n) {
// 		word = ""
// 		if (n < 10) {
// 			word = single_digit[n] + ' '
// 		}
// 		else if (n < 20) {
// 			word = double_digit[n - 10] + ' '
// 		}
// 		else if (n < 100) {
// 			rem = translate(n % 10)
// 			word = below_hundred[(n - n % 10) / 10 - 2] + ' ' + rem
// 		}
// 		else if (n < 1000) {
// 			word = single_digit[Math.trunc(n / 100)] + ' Hundred ' + translate(n % 100)
// 		}
// 		return word
// 	}
// 	 result = translate(n) 
// 	return result.trim()+'.'
// }
// n = parseInt(prompt("Enter The Positive Number Between 1 to 999"));
// document.write("Number n = " +n + "<br>");
// document.write("In word: "+test(n));



// =================body less loop ====================

// a = 0
// for(a=5;a<=10;a++);
// {
//     document.write(a);
// }




//=========================== sprate method in array ================

let sumnumer = (a,b,c) =>{
	return a+b+c
}
let number = [10,20,30];
let result = sumnumer(...number);
console.log("The Sum of These number is = " +result);


// =========================== Rest Syntax in Array =========
let addnumber = (...numbers) => {
	let result = 0;
	numbers.forEach(num=>result +=num);
	return result
}
let res = addnumber(10,50,80)
console.log("Sum of these numbers is =" +res);


//============================ Destructuring of Array in Java Script ===========================


// let numbers = [10,50,60,90,80]
// let [first,second,third] = numbers;
// console.log(first,second,third); 



// ======================With Nested Array =================
let navarray = [[1,2,3],[4,5,6],[7,8,9]];
let [first,second,third] = navarray;
console.log(first,second,third);



// =================== 
let team = ['rohit','shubham', 'Virat','Shreyas','Rahul'];
let [opener1,opener2,...toporder] = team
console.log(...toporder); 
console.log(toporder);



//===========oops concept=================
const personDetails = {
	name :'Bheem',
	age :'20',
	height:'172cm'
}
console.log(personDetails.height);




// ================================= object print ===================================
let address = {'street':'36chaurangi lines',city:"kolkata"}
let person = {name:'bheem',role:'Batsman',address}
let {name,role,address:{street}} = person
console.log(name,role,street)



// =======================Default Values With Object Properties ===================

const book = {name:'bheem',topic:'Programming Language',Writer:'Bheem Sharma'}
const {topic, Writer, isSold=false} = book