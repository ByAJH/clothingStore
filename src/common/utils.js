export function debounce(fun, time) {
    let timer = null
    return function timerFun() {
        clearInterval(timer)
        timer = setInterval(() => {
            fun()
            clearInterval(timer)
        }, time)
    }
}