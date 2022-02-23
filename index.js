function receivesAFunction(callback) {
     callback();
}


function returnsANamedFunction () {
    return function myFunc() {
        return "hi";
    }
}

function returnsAnAnonymousFunction () {
    return function() {
        return "hi";
    }
};