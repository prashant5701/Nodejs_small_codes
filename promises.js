//Promises (handling asynchronous event in nodejs or javascript) and handling error

let a= 10;
let b= 10;

let p1 = new Promise (function (resolve,reject){

  setTimeout(()=>{
   b=20;
   resolve();
  },3000)

});

//handling promises if resolve or rejected

p1.then(
  function(){console.log(a+b);},
  // function(error){ console.log(error)} //call reject if any error occured
)



//still facing difficulty refer below code 

// let myPromise = new Promise(function(myResolve, myReject) {
//   // "Producing Code" (May take some time)
  
//     myResolve(); // when successful
//     myReject();  // when error
//   });
  
//   // "Consuming Code" (Must wait for a fulfilled Promise)
//   myPromise.then(
//     function(value) { /* code if successful */ },
//     function(error) { /* code if some error */ }
//   );