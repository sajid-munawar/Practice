let myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(()=>{
            console.log('val');
        })
    },2000)
})
console.log(myPromise.then())