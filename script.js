let colors = document.getElementById('colors');


function createCircle(num) {
    for (let i = 0; i < num; i += 1) {
        let circle = document.createElement('div');
        
        circle.classList.add('ball');
        colors.appendChild(circle)
    }
}

createCircle(6)
