function receivesAFunction(callback) {
    console.log(callback());
  }

function returnsANamedFunction() {
    return function namedFunction(){};
  }

function returnsAnAnonymousFunction() {
    return function(){};
  }