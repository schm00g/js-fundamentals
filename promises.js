let promise = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve('Success');
        // reject(new Error('Unable to fetch data.'))
    }, 2000);
});

const systemRequiringData = () => {
    promise
        .then((result) => console.log(result))
        .catch((error) => {
            console.error(`Error: ${error.message}`)
        });
};

systemRequiringData();

// https://blog.greenroots.info/javascript-promises-explain-like-i-am-five