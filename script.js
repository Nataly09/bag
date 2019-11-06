const box_top = document.getElementById('box_top');
const inp = document.getElementById('inp');
const eraser = document.getElementById('eraser');
const update = document.getElementById('update');


const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

document.addEventListener('scroll', (e) => {
    // Get current page position if more than 100 hide phone bar
    const pagePosition  = window.pageYOffset;
    
    // Program branch
    if (pagePosition >= 50)
        box_top.style.display = "none";
    else 
        box_top.style.display = "flex";
})


let down = false;
let color = undefined;




canvas.addEventListener( 'mouseup', event => {
    down=false;
})

canvas.addEventListener('mousedown', event => {
    down=true;
    color = inp.value;
})

canvas.addEventListener('mouseover', event =>{
    down = false;
})

canvas.addEventListener( 'mousemove', event => {
    if(down){
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.fillRect(event.layerX -1, event.layerY -1, 6, 6);
    }

    if(eraser.checked){
        ctx.clearRect(event.layerX -1, event.layerY -1, 15, 15)
    }
})

update.addEventListener('click', event => {
    ctx.clearRect(0, 0, 400, 400);
})


canvas.addEventListener( 'touchend', event => {
    down=false;
})

canvas.addEventListener('touchstart', event => {
    down=true;
    color = inp.value;
})


canvas.addEventListener( 'touchmove', event => {
    console.log(eraser.checked)
    if(down){
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.fillRect(event.layerX - 2, event.layerY -2, 8, 8);
    } else{
        ctx.clearRect(event.layerX - 2, event.layerY -2, 8, 8)
    }
})