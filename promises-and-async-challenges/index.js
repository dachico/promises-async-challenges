// 1.
// function makePromise() {
//     const promise = new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Promise is resolved!');
//         }, 2000)
//     });
//     return promise;
// }

// makePromise()
// .then((result) => {
//     console.log(result);
// })

// 2.
// function doubleAfter2Seconds(x){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(x * 2);
//         }, 2000)
//     });
// }

// function addAsync (a,b) {
//     return Promise.all([doubleAfter2Seconds(a), doubleAfter2Seconds(b)])
//     .then(([doubleA, doubleB]) => doubleA + doubleB);
// }
// addAsync(1, 2)
// .then(result => {
//     console.log(result);
// })

// 3.
// function promiseWithError(){
//     return new Promise((undefined, reject) => {
//         setTimeout(() => {
//             reject('This is an error!');
//         },1000);
//     });
// }

// promiseWithError()
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log('Error:' + error);
// })

// 4.
// function fetchAllData(promises){
//     return Promise.all(promises);
// }

// const promise = 50;
// const promise2 = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('Resolved string')
//     },1000)
// })

// fetchAllData([promise,promise2])
// .then((result) => {
//     console.log(result);
// })

// 5.
// function promiseWithError(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject('This is an error!');
//         },1000);
//     });
// }

// async function asyncFunctionWithError(){
//     try {
//         const result = await promiseWithError();
//         console.log(result);
//     }catch (error) {
//         console.log(error);
//     }
// }
// asyncFunctionWithError();

// 6.
// function racePromises(promises){
//     return Promise.race(promises);
// }

// const promise = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'one')
// }, 500);
// const promise2 = new Promise((undefined, reject) => {
//     setTimeout(reject, 100, 'two')
// }, 500)

// racePromises([promise, promise2])
// .then((values) => console.log(values))
// .catch((error) => console.log(error))

// 7.
// function getData(callback){
//     setTimeout(() => {
//         callback(undefined, 'Async data')
//     }, 1000);
// }

// function getDataPromise(){
//     return new Promise((resolve, reject) => {
//         getData((error, data) => {
//             if (error){
//                 reject(error);
//             }else {
//                 resolve(data)
//             }
//         });
//     });
// }

// getDataPromise()
// .then(result => console.log(result))
// .catch(error => console.log(error))

// 8.
// function wait(ms){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         },ms)
//     })
// }

// wait(2000).then(() => console.log(`Done`))

// 9.

// function wait(ms){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         },ms)
//     })
// }

// function echo(msg, ms){
//     return new Promise((resolve, reject) => {
//         wait(ms).then(() => {
//             resolve(msg);
//         });
//     })
// }
// echo('done', 1000)
// .then((msg) => console.log(msg))

// 10.

// const promiseAll = (arrayOfPromises) => {
//     if (arrayOfPromises.length === 0){
//         return Promise.resolve([]);
//     }
//     const promiseValue = [];
    
//     let settledPromisesCount = 0;

//     return new Promise((resolve, reject) => {
        
//         arrayOfPromises.forEach((promise, index) => {
//             if (promise instanceof Promise === false) {
//             promise = Promise.resolve(promise);
//              }
//             promise.then(result => {
//                 settledPromisesCount += 1;
//                 promiseValue[index] = result;
//                 if (settledPromisesCount === arrayOfPromises.length) {
//                     resolve(promiseValue);
//                 }
//             }).catch(reason => {
//                 reject(reason);
//             });
//         });
//     });
// }

// const getOne = () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => resolve(1), 1000);
//     });
// }
// const getTwo = () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => resolve(2), 2000);
//     });
// }
// const getThree = () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => resolve(3), 3000);
//     });
// }

// promiseAll([getOne(), getTwo(), getThree()])
// .then(values => {
//     console.log(values);
// })
// promiseAll([]).then(values => console.log(values));
// promiseAll([1, 'string', true])
// .then(values => console.log(values))

// 11.

// const simplePromiseAllSettled = (arrayOfPromises) => {
//     if (arrayOfPromises.length === 0){
//         return Promise.resolve([]);
//     }
//     const promiseValues = [];

//     let settledPromisesCount = 0;

//     return new Promise((resolve, reject) => {
//         arrayOfPromises.forEach((promise, index) => {
//             if (promise instanceof Promise === false){
//                 promise = Promise.resolve(promise);
//             }

//             promise.then((result) => {
//                 settledPromisesCount += 1;
//                 promiseValues[index] = {
//                     status: 'fulfilled',
//                     value: result,
//                 };
//                 if (settledPromisesCount === arrayOfPromises.length) {
//                     resolve(promiseValues);
//                 }
//             }).catch((reason) => {
//                 settledPromisesCount += 1;
//                 promiseValues[index] = {
//                     status: 'rejected',
//                     reason: reason,
//                 };
//                 if( settledPromisesCount === arrayOfPromises.length) {
//                     resolve(promiseValues);
//                 }
//             });
//         });
//     });
// }

// Promise.allSettled([]).then((result) => console.log(result));
// simplePromiseAllSettled([]).then((result) => console.log(result));
// Promise.allSettled([12, 'Hello world', true]).then((result) => console.log(result));
// simplePromiseAllSettled([12, 'Hello world', true]).then((result) => console.log(result));

// function first() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => resolve(8000), 500)
//     })
// }
// function second() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => reject(8000), 500)
//     })
// }
// Promise.allSettled([first(), second()])
// .then((result) => console.log(result));

// 12.

// async function loadJson(url){
//     let response = await fetch(url);

//     if(response.status === 200) {
//         return await response.json();
//     }else {
//         throw new Error(response.status)
//     }
// }

// loadJson('https://javascript.info/no-such-user.json')
//   .catch(alert); 

console.log(`We made it 🏋️`);
