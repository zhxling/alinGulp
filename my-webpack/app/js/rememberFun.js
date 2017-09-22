let isPrime = (function() {
    let hash = {
        // 8: false,
        // 7: true
    };

    let isPrime = (n) => {
        if(n<3) {
            return true;
        } else if(hash[n] !== undefined) {
            return hash[n]
        }else {
            for(let i = 2; i<Math.sqrt(n); i++) {
                if(n % i == 0) {
                    return hash[n]=false;
                }
            }
            return hash[n] =true;
        }
    }
    return isPrime
})()

let isPrime1 = (n) => {
    if(n<3) {
        return true;
    } else {
        for(let i = 2; i<Math.sqrt(n); i++) {
            if(n % i == 0) {
                return false;
            }
        }
        return true;
    }
}

export {isPrime, isPrime1}