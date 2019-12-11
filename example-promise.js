// How does this file work?

// function getTempCallback (location, callback) {
//     callback(undefined, 78);
//     callback('City not found');
// };

// getTempCallback('Toronto', function (err, temp) {
//     if (err) {
//         console.log('error', err);
//     } else {
//         console.log('success', temp)
//     }
// });

// function getTempPromise (location) {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(79);
//             reject('City not found');
//         }, 1000);
//     });
// };

// getTempPromise('Toronto').then(function (temp) {
//     console.log('promise success', temp);
// }, function (err) {
//     console.log('promise error', err);
// });

// Challenge Area
function addPromise (a, b) {
    return new Promise(function (resolve, reject) {
        if (isNaN(a) && isNaN(b)) {
            reject('neither of these values are numbers');
        } else if (isNaN(a)) {
            reject('the first value passed was not a number');
        } else if (isNaN(b)) {
            reject('the second value passed was not a number');
        } else {
            resolve(a + b);
        };
    });
};

addPromise(2, 4).then(function (sum) {
    console.log('promise success', sum);
}, function (err) {
    console.log('promise error', err);
});

addPromise('two', 'four').then(function (sum) {
    console.log('promise success', sum)
}, function (err) {
    console.log('promise error', err)
});

addPromise(2, 'four').then(function(sum) {
    console.log('promise success', sum);
}, function (err) {
    console.log('promise failed', err)
});

addPromise("two", 4).then(function(sum) {
    console.log('promise success', sum);
}, function (err) {
    console.log('promise failed', err);
});