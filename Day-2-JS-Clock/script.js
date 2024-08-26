const hourHand = document.querySelector('.hour-hand')
const minuteHand = document.querySelector('.minute-hand')
const secondHand = document.querySelector('.second-hand') 

document.addEventListener('DOMContentLoaded', () => {
    function setHand() {
        const now = new Date()
        
        const second = now.getSeconds()
        const secondDeg = ((second / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondDeg}deg)`

        const minute = now.getMinutes()
        const minutesDeg = ((minute / 60) * 360) + 90;
        minuteHand.style.transform = `rotate(${minutesDeg}deg)`

        const hour = now.getHours()
        const hourDeg = ((hour / 12) * 360) + 90;
        hourHand.style.transform = `rotate(${hourDeg}deg)`;

    }

    setInterval(setHand, 1000)
    setHand();
})