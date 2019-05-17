let fetch1 = fetch("https://jsonplaceholder.typicode.com/users");
let fetch2 = fetch("https://jsonplaceholder.typicode.com/todos");

Promise.all([fetch1,fetch2]).then(function(e){
    Promise.all([e[0].json(),e[1].json()]).then(function(finalResponse){
        console.log(finalResponse)
    })
})




// function getData(){
//     return new Promise(resolve,reject){
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then(function(e){
//             if(e.ok){
//                 resolve(e)
//             }else{
//                 reject(e)
//             }
//         })
//         .catch(function(e){
//             reject("NETWORK ERR::")
//         })
//     };
// }