function lazyApply(fun, thisObj, argArray, ims, checker) {
    var timer = function() {
        checker = checker || function() {return true;};
        var verdict = checker.call(thisObj, argArray, ims, timerId);
        console.log(verdict);
        if(verdict == 1) {
            fun.apply(thisObj, argArray || []);
        }
        if(verdict == 1 || verdict == -1) {
            clearInterval(timerId);
        }
    }

    var timerId = setInterval(timer, ims);
    return timerId;
}

export {lazyApply as default}