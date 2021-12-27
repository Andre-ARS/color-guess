const colors = document.getElementById('colors');
const balls = document.getElementsByClassName('ball');
let colorRgb = [];
let codeRgb = ''
let answer = document.getElementById('answer')




// Requisito 2
function randomNum() {
    let numBalls = balls.length;

    return  Math.floor(Math.random() * numBalls);
}

function rgbCode() {
    codeRgb = document.getElementById("rgb-color").innerText = colorRgb[randomNum()];
    return codeRgb
}


// Requisito 3
function createCircle(num) {
    for (let i = 0; i < num; i += 1) {
        let circle = document.createElement('div');
        
        circle.classList.add('ball');
        colors.appendChild(circle);
    }
}



// Requisto 4
// feito a partir do codigo do requisito 12 do
// projeto pixels art

function rgbGenerator() {
    let rgb = [];
    
    for (let i = 0; i < 3; i += 1) {
        rgb.push(Math.floor(Math.random() * 256));
    }
    
    return '(' + rgb[0] + ', ' + rgb[1] + ', ' + rgb[2] + ')';
}

function randomColors() {
    
    for (let index = 0; index < balls.length; index += 1){
        let color = rgbGenerator();
        
        colorRgb.push(color);
    }
}

function optionPaint() {
    colorRgb = [];
    
    randomColors();
    
    for (let i = 0; i < balls.length; i += 1) {
        document.getElementsByClassName('ball')[i].style.backgroundColor = 'rgb' + colorRgb[i];
    }
}

window.onload = function () {
    createCircle(6);
    optionPaint();
    rgbCode();
    document.getElementById('answer').innerText = "Escolha uma cor";
}


// Requisito 5
function answerCheck(event) {
    if (event.target.classList.contains('ball')){
        if (event.target.style.backgroundColor === 'rgb' + codeRgb) {
            document.getElementById('answer').innerText = "Acertou!";
        }else {
            document.getElementById('answer').innerText = "Errou! Tente novamente!";
        }
    }
}
colors.addEventListener('click', answerCheck);