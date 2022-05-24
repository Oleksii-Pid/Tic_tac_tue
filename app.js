const container = document.querySelector('.container');
const wrapper = document.querySelector('.wrapper');
const X = 'X';
const ZERO = 'O';
const EMPTY = '';

let status = true;
let currentValue;

let elementValues = new Array(9).fill(EMPTY);
let elements;

function render(){
    container.innerHTML = '';
    for(i=0; i < elementValues.length; i++){
        const element = document.createElement('div');
        element.classList.add('element');
        container.appendChild(element);
        element.innerHTML = `${elementValues[i]}`;
        if(element.innerHTML){
            element.style.pointerEvents = 'none';
        }
    }
    elements = Array.from(document.querySelectorAll('.element'));
    pointLine();
}

container.addEventListener('click', clickRender);

function clickRender(e){
    for(i=0; i<elements.length; i++){
        if(e.target == elements[i]){
            currentValue = !status ? ZERO : X;
            elementValues[i] = currentValue;
            status = !status;
            render();
        }
    }
}
function addStyleCross(a,b,c){
    elements[a].classList.add('cross');
    elements[b].classList.add('cross');
    elements[c].classList.add('cross');
    container.style.pointerEvents = "none";
    status ? theEnd(`Переміг ${ZERO}`) : theEnd(`Переміг ${X}`)
}

function pointLine(){    
        if(elementValues[0] == elementValues[1] && elementValues[1] == elementValues[2] && elementValues[0]){
            drawLine('three', 100);
            addStyleCross(0,1,2);
            }else 
        if(elementValues[3] == elementValues[4] && elementValues[4] == elementValues[5] && elementValues[3]){
            drawLine('line', 100)
            addStyleCross(3,4,5);
            }else
        if(elementValues[6] == elementValues[7] && elementValues[7] == elementValues[8] && elementValues[6]){
            drawLine('four', 100);
            addStyleCross(6,7,8);
            }else
        if(elementValues[0] == elementValues[3] && elementValues[3] == elementValues[6] && elementValues[0]){
            drawLine('five', 100);
            addStyleCross(0,3,6);
            }else
        if(elementValues[1] == elementValues[4] && elementValues[4] == elementValues[7] && elementValues[1]){
            drawLine('six', 100);
            addStyleCross(1,4,7);
           }else    
        if(elementValues[2] == elementValues[5] && elementValues[5] == elementValues[8] && elementValues[2]){
            drawLine('seven', 100);
            addStyleCross(2,5,8);
           }else
        if(elementValues[0] == elementValues[4] && elementValues[4] == elementValues[8] && elementValues[0]){
            drawLine('one', 130)
            addStyleCross(0,4,8);
            }else
        if(elementValues[2] == elementValues[4] && elementValues[4] == elementValues[6] && elementValues[2]){
            drawLine('two', 130);
            addStyleCross(2,4,6);
           }
           else{
        if(elementValues[0] && 
               elementValues[1] && 
               elementValues[2] && 
               elementValues[3] && 
               elementValues[4] && 
               elementValues[5] && 
               elementValues[6] && 
               elementValues[7] && 
               elementValues[8]){
                    container.classList.add('cross');
                    drawLine('end', 0)
                    theEnd('Нічия');
                }
        }
    }
function drawLine(grad, wid){
        const line = document.createElement('div');
        wrapper.appendChild(line);
        line.classList.add('line');
        line.classList.add(grad);
        let widthLine = 0;
        let heightLine = 0.5;
        setInterval(()=>{
            line.style.width = `${widthLine}%`
            line.style.height = `${heightLine}%`
            if(widthLine != wid){
                widthLine++;
                heightLine +=0.02;
            }
        }, 10)

    }

function theEnd(text){
    setTimeout(()=>{
    const endBox = document.createElement('div');
    endBox.classList.add('end-box');
    wrapper.appendChild(endBox);

    const win = document.createElement('div');
    endBox.appendChild(win);
    win.classList.add('win');
    win.innerHTML = `${text}`;
    
    const play = document.createElement('button');
    play.classList.add('play')
    endBox.appendChild(play);
    play.innerHTML = `Зіграти ще`;
    play.addEventListener('click',()=>{
        location.reload()
    })}, 1500)
}
render();

        



