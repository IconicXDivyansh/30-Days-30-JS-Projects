const audioItem = [{
    key: 'a',
    keyCode: 65,
    sound: 'clap',
    audio: 'sounds/clap.wav'
    }, {
    key: 's',
    keyCode: 83,
    sound: 'hihat',
    audio: 'sounds/hihat.wav'
    }, {    
    key: 'd',
    keyCode: 68,
    sound: 'kick',
    audio: 'sounds/kick.wav'
    }, {
    key: 'f',
    keyCode: 70,
    sound: 'openhat',
    audio: 'sounds/openhat.wav'
    }, {
    key: 'g',
    keyCode: 71,
    sound: 'boom',
    audio: 'sounds/boom.wav'
    }, {
    key: 'h',
    keyCode: 72,
    sound: 'ride',
    audio: 'sounds/ride.wav'
    }, {
    key: 'j',
    keyCode: 74,
    sound: 'snare',
    audio: 'sounds/snare.wav'
    }, {
    key: 'k',
    keyCode: 75,
    sound: 'tom',
    audio: 'sounds/tom.wav'
    }, {
    key: 'l',
    keyCode: 76,
    sound: 'tink',
    audio:'sounds/tink.wav'
    
}]

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('keydown', (e) => {
        // console.log(e.key, e.keyCode);
        for (let item of audioItem) {
            const key = document.querySelector(`.key[data-key="${item.keyCode}"]`);
            if (e.keyCode === item.keyCode) {
                key.classList.add('playing');
                const audio = new Audio(item.audio);
                audio.currentTime = 0;
                audio.play();
                // console.log("Playing sound for ", item.sound, item.key);
            }
            
        }
        
    })
    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        console.log(e.propertyName);
        this.classList.remove('playing');
    }

    const keys = document.querySelectorAll('.key');
    console.log(keys);
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
});