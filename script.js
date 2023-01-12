//Relogio digital
let relDigital = document.querySelector('.digital');

//Relogio Analogico
let secElement = document.querySelector('.p_s');
let minElement = document.querySelector('.p_m');
let hourElement = document.querySelector('.p_h');


//Interval do Relogio Digital
function updateClock(){
    
    let date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    let hours = date.getHours();;
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    relDigital.innerHTML = `${fixZero(hours)}:${fixZero(minutes)}:${fixZero(seconds)}`;

    // let sDeg = ((360 / 60) * seconds) - 90;
    let sDeg = fixDeg(seconds);
    let mDeg = fixDeg(minutes);
    let hDeg = fixDeg(hours);
    secElement.style.transform = `rotate(${sDeg}deg)`;
    minElement.style.transform = `rotate(${mDeg}deg)`;
    hourElement.style.transform = `rotate(${hDeg}deg)`;
    // secElement.style.display = 'block';
}

function fixZero(time) {
    //Formatar para duas casas quando necessário
    return time < 10 ? `0${time}` : time;
}
function fixDeg(time) {
    return ((360/60)*time) - 90;
}

updateClock();
setInterval(updateClock,1000);
