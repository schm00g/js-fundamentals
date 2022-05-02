let promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve('Hurray fetched data!')
    }, 2000);
});

const systemRequiringData = () => {
    promise.then((result) => {
        console.log(`Consuming data: ${result}`)
    });
};

systemRequiringData();