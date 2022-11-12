function job(callback1, callback2) {
    setTimeout(() => {
        callback1();
    }, 2000)
    let count = 1;
    let timer = setInterval(() => {
        callback2();
        count++;
        if (count > 3) {
            clearInterval(timer)
        }
    }, 1000)
}

module.exports = job;