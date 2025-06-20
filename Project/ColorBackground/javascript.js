// generate random color

const randomColor = function()
{
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
let stopinterval;
const startChangeingColor = function(){
    if (!stopinterval) {
        stopinterval = setInterval(changeBG, 1000);
    }

    function changeBG() {
        document.body.style.backgroundColor = randomColor();
    }
};
const stopChangeingColor = function(){
    clearInterval(stopinterval);
    stopinterval = null;
};


document.querySelector('#start').addEventListener('click', startChangeingColor);
document.querySelector('#stop').addEventListener('click', stopChangeingColor);
