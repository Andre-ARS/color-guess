const colors = document.getElementById('colors');
let balls = document.getElementsByClassName('ball');
let colorRgb = [];
let codeRgb = '';
let answer = document.getElementById('answer');
let score = 0





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
    reLoad()
}


function reLoad () {
    document.getElementById('level').value = 6
    createCircle(parseInt(document.getElementById('level').value));
    optionPaint();
    rgbCode();
    score = 0
    document.getElementById('answer').innerText = "Escolha uma cor";
    document.getElementById('score').innerText = 'Acertos: ' + score;
}


// Requisito 5
function answerCheck(event) {
    if (event.target.classList.contains('ball')){
        if (event.target.style.backgroundColor === 'rgb' + codeRgb) {
            document.getElementById('answer').innerText = "Acertou!";
            score += 3;
            document.getElementById('score').innerText = 'Acertos: ' + score;
        }else {
            document.getElementById('answer').innerText = "Errou! Tente novamente!";
            if (score > 0) {
                score -= 1;
                document.getElementById('score').innerText = 'Acertos: ' + score;
            }
        }
    }
    contrastRight()
    winAlert()
}
colors.addEventListener('click', answerCheck);

// Requisito 6
function reset() {
    optionPaint();
    rgbCode();
    document.getElementById('answer').innerText = "Escolha uma cor";
    for (let i = 0; i < balls.length; i += 1) {
        balls[i].className = 'ball'
    }
    colors.addEventListener('click', answerCheck);
}
document.getElementById("reset-game").addEventListener('click', reset)

// Alterar Dificuldade 
function levelChange() {
    while (balls[0]) {        
        balls[0].outerHTML = '';
    } 
    
    createCircle(parseInt(document.getElementById('level').value));
    reset();
}

document.getElementById('level').addEventListener('change', levelChange);

// Aviso de vitória
function winAlert() {
    if (score >= 21) {
        alert('Você Venceu!!!')

        while (balls[0]) {        
            balls[0].outerHTML = '';
        } 

        reLoad()
    }
}

// Destaca o certo
function contrastRight() {
    for (let i = 0; i < balls.length; i += 1) {
        if (balls[i].style.backgroundColor !== 'rgb' + codeRgb) {
            balls[i].classList.add('wrong')
        } else {
            balls[i].classList.add('right')
        }
    }
   colors.removeEventListener('click', answerCheck); 
}
